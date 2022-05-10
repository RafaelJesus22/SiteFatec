/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ListItem } from "../../../../components/atoms/ListItem";
import { FormButton } from "../../../../components/atoms/PortalButton";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { PortalContent } from "../../../../components/containers/PortalContent";
import { SubjectThemeMarker } from "../../../../components/atoms/SubjectThemeMarker";
import { Modal } from "../../../../components/molecules/Modal";
import { colors } from "../../../../config/styles";
import { useLoading } from "../../../../contexts/loadingContent";
import { subjectService } from "../../../../services";
import { DbSubject } from "../../../../types/ICurso";
import { SubjectParams } from "..";

import './styles.css';

export const SubjectDetails: React.FC = () => {
  const [subject, setSubject] = useState<DbSubject>();
  const [modalDelete, setModalDelete] = useState(false);
  const { disciplinaId } = useParams<SubjectParams>();
  const { showLoading, hideLoading } = useLoading();
  const history = useHistory();

  const performDelete = async () => {
    showLoading();
    await subjectService.deleteSubject(disciplinaId);
    await subjectService.getSubjects(true);
    hideLoading();
    history.goBack();
  };

  const handleEdit = () => {
    history.push('/portal/dashboard/disciplinas/editar/' + disciplinaId);
  };

  useEffect(() => {
    if (disciplinaId) {
      showLoading();
      subjectService.getOneSubject(disciplinaId)
        .then(res => {
          if (res) {
            setSubject(res);
          }
        }).finally(() => hideLoading());
    }
  }, [disciplinaId]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <div className="subject-details-container">
          {!!subject && (
            <Fragment>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <SubjectThemeMarker theme={subject.theme} />
                <h2>
                  {subject.name}
                </h2>
              </div>

              <ListItem
                title="Aulas semanais"
                description={String(subject.weeklyClasses)}
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

          {!subject && (
            <h2>Disciplina não encontrada</h2>
          )}

          <Modal
            visible={modalDelete}
            title="Excluir disciplina"
            text="Tem certeza que deseja excluir esta disciplina?"
            onClick={performDelete}
            onCancel={() => setModalDelete(false)}
            confirmButtonText="Excluir"
          />
        </div>
      </PortalContent>
    </DashboardContainer>
  );
};
