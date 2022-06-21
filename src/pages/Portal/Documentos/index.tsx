import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getDownloadURL } from "firebase/storage";

import { useAuth } from "../../../contexts/authContext";
import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { PortalListContainer } from "../../../components/containers/PortalListContainer";
import { Modal } from "../../../components/molecules/Modal";
import { PortalListFilter } from "../../../components/molecules/PortalListFilter";
import { FiTrash2 } from 'react-icons/fi'

import { documentService } from "../../../services";
import { useLoading } from "../../../contexts/loadingContent";
import { FileListItem, StorageFile } from "../../../types/IDocument";

import './styles.css';

export const PortalDocuments: React.FC = () => {
  const [files, setFiles] = useState<FileListItem[] | null>(null);
  const [listItems, setListItems] = useState<FileListItem[] | null>(null);
  const [fileToDelete, setFileToDelete] = useState<StorageFile | null>(null);
  const [modalDelete, setModalDelete] = useState(false);
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { user } = useAuth();
  const { hideLoading, showLoading } = useLoading()

  const handlePressAdd = () => {
    history.push("documentos/adicionar")
  }

  const getDocuments = useCallback(async (storaged?: boolean) => {
    showLoading();

    try {
      const files = await documentService.getAllFoldersAndFiles(storaged);
      setFiles(files);
    } catch (err) {
      console.log(err);
    } finally {
      hideLoading();
    }
  }, [hideLoading, showLoading]);

  const performDelete = async () => {
    setModalDelete(false);
    showLoading();

    await documentService.deleteFile(fileToDelete as StorageFile);
    await getDocuments(true);

    hideLoading();
  };

  const handlePressDocument = async (item: StorageFile) => {
    const { file } = item;
    const url = await getDownloadURL(file);

    window.open(url, '_blank');
  }

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }

    getDocuments();
  }, [history, user]);

  useEffect(() => {
    if (search === '') {
      setListItems(files);
    }

    const filtered = files?.filter(file => {
      return file.file.name.toLowerCase().startsWith(search.toLowerCase())
    });

    setListItems(filtered || null);
  }, [files, search]);

  return (
    <DashboardContainer hasPadding>
      <header className="portal-page_header">
        <h1 className="title">Documentos</h1>
      </header>

      <PortalListFilter
        onPressButton={handlePressAdd}
        inputValue={search}
        onChangeInput={setSearch}
        inputStyle={{ minWidth: '50%' }}
      />

      <PortalListContainer>
        <div className="portal-list_header">
          <p style={{ width: '50%' }}>
            Nome
          </p>
          <p style={{ width: '40%' }}>
            Categoria
          </p>
          <p style={{ width: '10%' }}>
            Ações
          </p>
        </div>
        <div className="portal-list_items">
          {listItems?.length === 0 && (
            <h2>Nenhum documento encontrado</h2>
          )}
          {listItems?.map(({ file, category }) => (
            <div className="portal-list_item" key={file.name}>
              <div style={{ width: '50%' }} onClick={() => handlePressDocument(file)}>
                <p title={file.name} className="list-link">
                  {file.name}
                </p>
              </div>
              <div style={{ width: '40%' }}>
                <p title={String(category)}>
                  {category}
                </p>
              </div>
              <div className="actions" style={{ width: '10%' }}>
                <FiTrash2
                  size={24}
                  className="icon delete"
                  onClick={() => {
                    setModalDelete(true);
                    setFileToDelete(file);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <Modal
          visible={modalDelete}
          title="Excluir arquivo"
          text="Tem certeza que deseja excluir este arquivo?"
          onClick={performDelete}
          onCancel={() => setModalDelete(false)}
          confirmButtonText="Excluir"
        />
      </PortalListContainer>
    </DashboardContainer>
  );
};
