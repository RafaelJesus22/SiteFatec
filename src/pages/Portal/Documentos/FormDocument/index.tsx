import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormFile } from "../../../../components/atoms/FormFile";
import { FormSelect, Option } from "../../../../components/atoms/FormSelect";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { useAuth } from "../../../../contexts/authContext";
import { useLoading } from "../../../../contexts/loadingContent";
import { documentService } from "../../../../services";

import { PortalContent } from "../../../../components/containers/PortalContent";
import { FormButton } from "../../../../components/atoms/PortalButton";
import './styles.css';

export const DocumentsForm = () => {
  const [directories, setDirectories] = useState<Option[]>([]);
  const [selectedDirectory, setSelectedDirectory] = useState<Option>({} as Option);
  const [file, setFile] = useState<File | null>(null);

  const { hideLoading, showLoading } = useLoading();
  const history = useHistory();
  const { user } = useAuth();


  useEffect(() => {
    showLoading();
    documentService.getDirectories(true)
      .then(res => {
        setDirectories(res.map(directory => {
          return {
            label: directory.name,
            value: directory.path,
          }
        }));
      }).catch(err => {
        alert(`Erro ao carregar diretórios!\n${JSON.stringify(err)}`);
      }).finally(() => hideLoading())
  }, []);

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }
  }, [history, user]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <form className="dashboard-form">
          <h1>Adicionar Documento</h1>
          <FormSelect
            style={{ marginBottom: '1.5rem' }}
            name="Pasta"
            value={selectedDirectory}
            options={directories}
            onChange={(option) => {
              setSelectedDirectory(option);
              console.log('path', selectedDirectory.value)
            }}
          />
          {selectedDirectory.value && (
            <FormFile
              style={{ marginBottom: '1.5rem' }}
              name="Arquivo"
              currentFile={file}
              path={selectedDirectory.value}
              onChangeFile={({ file }) => {
                setFile(file)
                alert(`O arquivo ${file?.name} foi salvo com sucesso!`);
                history.goBack();
              }}
            />
          )}

          <div className="form-button">
            <FormButton
              disabled
              onClick={() => null}
              title="Adicione um arquivo e ele será salvo automaticamente"
            />
          </div>
        </form>
      </PortalContent>
    </DashboardContainer>
  );
};