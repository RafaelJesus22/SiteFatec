import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ListItem } from "../../../../components/atoms/ListItem";
import { FormButton } from "../../../../components/atoms/PortalButton";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { PortalContent } from "../../../../components/containers/PortalContent";
import { Modal } from "../../../../components/molecules/Modal";
import { colors } from "../../../../config/styles";
import { useLoading } from "../../../../contexts/loadingContent";
import { proffessorsService } from "../../../../services";
import { DbProffessor } from "../../../../types/IProfessor";
import { ProffessorParams } from "..";

import './styles.css';

export const ProffessorDetails: React.FC = () => {
  const [proffessor, setProffessor] = useState<DbProffessor>();
  const [modalDelete, setModalDelete] = useState(false);
  const { proffessorId } = useParams<ProffessorParams>();
  const { showLoading, hideLoading } = useLoading();
  const history = useHistory();

  const getClasses = () => {
    if (proffessor) {
      let classes = ""
      proffessor.classes.forEach((item) => (
        classes += `${item.label}\n`
      ));
      return classes;
    }
  };

  const performDelete = async () => {
    showLoading();
    await proffessorsService.deleteProffessor(proffessorId);
    await proffessorsService.getProffessors(true);
    hideLoading();
    history.goBack();
  };

  const handleEdit = () => {
    history.push('/portal/dashboard/professores/editar/' + proffessorId);
  };

  useEffect(() => {
    if (proffessorId) {
      showLoading();
      proffessorsService.getProfessorById(proffessorId)
        .then(res => {
          if (res) {
            setProffessor(res);
          }
        }).finally(() => hideLoading());
    }
  }, [proffessorId]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <div className="proffessor-details-container">
          {!!proffessor && (
            <Fragment>
              {proffessor.imgUrl && (
                <img
                  src={proffessor.imgUrl}
                  alt={`Foto do professor ${proffessor.name}`}
                />
              )}
              <h2>{proffessor.title} {proffessor.name}</h2>

              <ListItem
                title="E-mail"
                description={proffessor.email}
              />
              <ListItem
                title="Lattes"
                description={proffessor.lattes}
              />
              <ListItem
                title="Cursos"
                description={getClasses()}
              />
              <ListItem
                title="Linkedin"
                description={proffessor.linkedin}
                isLink={!!proffessor.linkedin}
              />

              <div className="buttons">
                <FormButton
                  title="Editar"
                  onClick={handleEdit}
                  color={colors.secondaryTextColor}
                />
                <FormButton
                  title="Excluir"
                  onClick={() => setModalDelete(true)}
                />
              </div>
            </Fragment>
          )}

          {!proffessor && (
            <h3>Professor não encontrado</h3>
          )}

          <Modal
            visible={modalDelete}
            title="Excluir professor"
            text="Tem certeza que deseja excluir este professor?"
            onClick={performDelete}
            onCancel={() => setModalDelete(false)}
            confirmButtonText="Excluir"
          />
        </div>
      </PortalContent>
    </DashboardContainer>
  );
};
