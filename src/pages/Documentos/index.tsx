import { getDownloadURL } from 'firebase/storage';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { HiOutlineDownload } from 'react-icons/hi'
import { BiChevronRight } from 'react-icons/bi';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { colors } from '../../config/styles';
import { useLoading } from '../../contexts/loadingContent';
import { documentService } from '../../services';
import { DbDirectoryPath, StorageFile } from '../../types/IDocument';
import './styles.css';

export const Documentos: React.FC = () => {
  const { showLoading, hideLoading } = useLoading();
  const [directories, setDirectories] = useState<any[]>([]);
  const [selectedDirectory, setSelectedDirectory] = useState<any>();
  const [files, setFiles] = useState<StorageFile[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);

  const handleFileName = (file: StorageFile) => {
    const { name } = file;
    return name
      .split('')
      .reverse()
      .join('')
      .split('.')[1]
      .split('')
      .reverse()
      .join('');
  };

  const handleDownload = async (file: StorageFile) => {
    try {
      console.log('entrei')
      const url = await getDownloadURL(file.file)
      console.log('terminei', url)
      window.open(url, '_blank');
    } catch (err) {
      alert('Não foi possivel baixar o arquivo');
      console.log('erro', err)
    }
  }

  useLayoutEffect(() => {
    showLoading()
    documentService.getDirectories()
      .then(res => setDirectories(res))
      .catch(err => console.log(err))
      .finally(() => hideLoading());
  }, []);

  useEffect(() => {
    showLoading({ message: 'Carregando arquivos...' });
    setLoadingFiles(true);
    documentService.getFilesByPath(selectedDirectory?.path || '')
      .then(res => {
        setFiles(res);
        console.log(res)
      })
      .catch(err => {
        alert('Um erro ocorreu ao carregar os arquivos');
        console.log(err)
      })
      .finally(() => {
        hideLoading();
        setLoadingFiles(false);
      });
  }, [selectedDirectory])

  return (
    <Container>
      <Content title={!selectedDirectory ? 'Documentos' : ''} isOnTop >
        <div className="documents-options">
          {!selectedDirectory && (
            <ul className='dir-list'>
              {directories && directories.map(directory => (
                <li className="dir-item" key={directory.id}>
                  <span onClick={() => setSelectedDirectory(directory)}>
                    {directory.name}
                  </span>
                  <BiChevronRight
                    size={24}
                    color={colors.titleColor}
                    onClick={() => setSelectedDirectory(directory)}
                  />
                </li>
              ))}
            </ul>
          )}
          {selectedDirectory && (
            <div className="directory-nav">
              <h1 className="directory-root" style={{ color: '#B3B3BF' }} onClick={() => setSelectedDirectory(undefined)}>Documentos </h1>
              <h1 className="directory-divider">{' > '}</h1>
              <h1 className="directory-current">{selectedDirectory.name}</h1>
            </div>
          )}
          {files && (
            <div className='file-grid'>
              {files.map(file => (
                <div key={file.name} className="file-item">
                  <span>
                    {handleFileName(file)}
                  </span>
                  <HiOutlineDownload
                    size={28}
                    color={colors.titleColor}
                    onClick={() => handleDownload(file)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </Content>
    </Container>
  );
};

