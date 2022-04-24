/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import { ListItem } from "../../../../components/atoms/ListItem";
import { FormButton } from "../../../../components/atoms/PortalButton";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { PortalContent } from "../../../../components/containers/PortalContent";
import { Modal } from "../../../../components/molecules/Modal";
import { colors } from "../../../../config/styles";
import { useLoading } from "../../../../contexts/loadingContent";
import {  cursosService } from "../../../../services";
import { DbCurso } from "../../../../types/ICurso";
import { CursoParams } from "..";

import'./styles.css';

export const CourseDetails: React.FC = () => {
  const [course, setCourse] = useState<DbCurso>();
  const [modalDelete, setModalDelete] = useState(false);
  const { cursoId } = useParams<CursoParams>();
  const { showLoading, hideLoading } = useLoading();
  const history = useHistory();

  const performDelete = async () => {
    showLoading();
    await cursosService.deleteCourse(cursoId);
    await cursosService.getCourses(true);
    hideLoading();
    history.goBack();
  };

  const handleEdit = () => {
    history.push('/portal/dashboard/cursos/editar/' + cursoId);
  };

  useEffect(() => {
    if (cursoId) {
      showLoading();
      cursosService.getOneCourse(cursoId)
        .then(res => {
          if (res) {
            setCourse(res as DbCurso);
          }
        }).finally(() => hideLoading());
    }
  }, [cursoId]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <div className="course-details-container">
          {!!course && (
            <Fragment>
              <h2>{course.name}</h2>

              <h3 style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                Estamos trabalhando nisso...
              </h3>

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

          {!course && (
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
