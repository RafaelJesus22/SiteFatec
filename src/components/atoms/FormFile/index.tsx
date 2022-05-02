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
  path?: string;
  style?: CSSProperties;
}

export const FormFile: React.FC<Props> = ({
  onChangeFile,
  name,
  currentFile,
  style,
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

    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  useEffect(() => {
    if (!file) {
      return;
    }

    setUploading(true);
    const fileRef = ref(storage, path + file.name);
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
        {currentFile && (
          <div>
            <span>{currentFile?.name} | Upload concluído</span>
            <BsCheckCircle size={20} color={colors.success} />
          </div>
        )}
        {!uploading && !currentFile && (
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