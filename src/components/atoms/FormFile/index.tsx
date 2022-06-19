import { CSSProperties, useEffect, useState } from "react";
import { colors } from "../../../config/styles";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { BsCheckCircle } from 'react-icons/bs';
import { storage } from '../../../firebase';
import './styles.css';

interface Props {
  onChangeFile: (props: { url: string, file: File | null }) => void;
  name: string;
  currentFile: File | null;
  maxSize?: number;
  currentUrl?: string;
  path?: string;
  onlyImage?: boolean;
  style?: CSSProperties;
}

export const FormFile: React.FC<Props> = ({
  onChangeFile,
  name,
  currentFile,
  currentUrl,
  style,
  maxSize = 10 * 1024 * 1024,
  onlyImage = false,
  path = '',
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [, setProgress] = useState(-1);
  const [, setUploadError] = useState<Error | null>(null);
  const [, setUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    let selectedFile = null;

    if (event.target.files) {
      selectedFile = event.target.files[0];
    }

    if (onlyImage && selectedFile && !selectedFile.type.startsWith('image/')) {
      setFile(null);
      return alert('Selecione uma imagem');
    } 

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUrl = (): string => {
    if (path === '')
      return file?.name || '';
    return `${path}/${file?.name}`;
  }
 
  useEffect(() => {
    if (!file) {
      return;
    }

    if (file.size > maxSize) {
      return alert(`selecione um arquivo de no máximo ${maxSize / 1024 / 1024}MB`);
    }

    setUploading(true);
    const fileRef = ref(storage, handleUrl());
    const task = uploadBytesResumable(fileRef, file);
    task.on('state_changed',
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setUploadError(error);
        console.log(error);
      },
      () => {
        getDownloadURL(fileRef).then((url: string) => {
          setUrl(url);
          onChangeFile({ url, file });
          setProgress(-1);
          setUploading(false);
        });
      }
    );
  }, [file, onChangeFile, path]);

  return (
    <div style={style}>
      <label htmlFor="input-file" style={{ color: colors.secondaryTextColor, display: 'block' }}>
        {name}
      </label>
      <label htmlFor="input-file" className="input">
        {uploading && (
          <span>Carregando...</span>
        )}
        {(currentFile || currentUrl) && (
          <div>
            {currentFile && <span>{ currentFile?.name} | Upload concluído</span>}
            {!currentFile && currentUrl && <span>{currentUrl}</span>}
            <BsCheckCircle size={20} color={colors.success} />
          </div>
        )}
        {!uploading && !currentFile && !currentUrl && (
          <span>
            Clique para adicionar um arquivo
          </span>
        )}
      </label>
      <input
        id="input-file"
        name="input-file"
        type="file"
        onChange={handleChangeFile}
      />
    </div>
  );
};