import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FormFile } from "../../../../components/atoms/FormFile";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { useAuth } from "../../../../contexts/authContext";

import { PortalContent } from "../../../../components/containers/PortalContent";
import { FormButton } from "../../../../components/atoms/PortalButton";
import './styles.css';

export const InternshipsForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const INTERSHIPS_PATH = 'estagios';

  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }
  }, [history, user]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <form className="dashboard-form">
          <h1>Adicionar Empresa</h1>
          <FormFile
            style={{ marginBottom: '1.5rem' }}
            name="Arquivo"
            currentFile={file}
            path={INTERSHIPS_PATH}
            onChangeFile={({ file }) => {
              setFile(file)
              alert(`O arquivo ${file?.name} foi salvo com sucesso!`);
              history.goBack();
            }}
          />

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