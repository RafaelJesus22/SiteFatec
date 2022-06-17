import { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ListItem } from "../../../../components/atoms/ListItem";
import { FormButton } from "../../../../components/atoms/PortalButton";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { PortalContent } from "../../../../components/containers/PortalContent";
import { Modal } from "../../../../components/molecules/Modal";
import { colors } from "../../../../config/styles";
import { useLoading } from "../../../../contexts/loadingContent";
import { cursosService, proffessorsService, subjectService } from "../../../../services";
import { CurriculumProps, DbCurso, DbSubject } from "../../../../types/ICurso";
import { CursoParams } from "..";

import './styles.css';
import { DbProffessor } from "../../../../types/IProfessor";

export const CourseDetails: React.FC = () => {
  const [course, setCourse] = useState<DbCurso>();
  const [coordinator, setCoordinator] = useState<DbProffessor>({} as DbProffessor);
  const [grade, setGrade] = useState<string[][]>([]);
  const [modalDelete, setModalDelete] = useState(false);
  const { cursoId } = useParams<CursoParams>();
  const { showLoading, hideLoading } = useLoading();
  const history = useHistory();


  const getCoordinator = async (coordinatorId: string) => {
    const coordinator = await proffessorsService.getOneProfessor(coordinatorId);
    setCoordinator(coordinator as DbProffessor);
  }

  const getSubjectsName = async (grade: CurriculumProps) => {
    const subjects = await subjectService.getSubjects(true);

    const semester1 = grade.semester1.map((subjectId: string) => {
      const subject = subjects.find((subject: DbSubject) => subject.id === subjectId);
      return subject ? subject.name : '';
    });
    const semester2 = grade.semester2.map((subjectId: string) => {
      const subject = subjects.find((subject: DbSubject) => subject.id === subjectId);
      return subject ? subject.name : '';
    });
    const semester3 = grade.semester3.map((subjectId: string) => {
      const subject = subjects.find((subject: DbSubject) => subject.id === subjectId);
      return subject ? subject.name : '';
    });
    const semester4 = grade.semester4.map((subjectId: string) => {
      const subject = subjects.find((subject: DbSubject) => subject.id === subjectId);
      return subject ? subject.name : '';
    });
    const semester5 = grade.semester5.map((subjectId: string) => {
      const subject = subjects.find((subject: DbSubject) => subject.id === subjectId);
      return subject ? subject.name : '';
    });
    const semester6 = grade.semester6.map((subjectId: string) => {
      const subject = subjects.find((subject: DbSubject) => subject.id === subjectId);
      return subject ? subject.name : '';
    });

    setGrade([semester1, semester2, semester3, semester4, semester5, semester6]);
  }

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
    async function load() {
      showLoading();
      const course = await cursosService.getCourseById(cursoId);
      setCourse(course as DbCurso);
      await getCoordinator(String(course?.coordinatorId));
      await getSubjectsName(course?.curriculum as CurriculumProps);
      hideLoading();
    }
    load();

  }, [cursoId]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <div className="course-details-container">
          {!!course && (
            <Fragment>
              <h2>{course.name}</h2>

              <ListItem
                title="Coordenador do curso"
                description={coordinator.name}
              />

              <div className="form-section">
                <h2 className="form-section-title">Detalhes técnicos</h2>
                <ListItem
                  title="Duração do curso"
                  description={`${course?.technicalDetails?.duration} semestres`}
                />
                <ListItem
                  title="Vagas por semestre"
                  description={`${course?.technicalDetails?.vacancies} vagas`}
                />
                <ListItem
                  title="Período do curso"
                  description={course?.technicalDetails?.timeCourse}
                />
                {course.technicalDetails.note && (
                  <ListItem
                    title="Nota"
                    description={course?.technicalDetails?.note}
                  />
                )}
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Informações</h2>
                <ListItem
                  title="Perfil profissional"
                  description={course?.info?.professionalProfile}
                />
                {course?.info?.whereToWork && (
                  <ListItem
                    title="Onde trabalhar?"
                    description={course?.info?.whereToWork}
                  />
                )}
                {course?.info?.technologicalAxis && (
                  <ListItem
                    title="Eixo tecnológico"
                    description={course?.info?.technologicalAxis}
                  />
                )}
              </div>

              <div className="form-section">
                <h2 className="form-section-title">Grade curricular</h2>
                <ListItem
                  title="1º Semestre"
                  descriptionArray={grade[0]}
                />
                <ListItem
                  title="2º Semestre"
                  descriptionArray={grade[1]}
                />
                <ListItem
                  title="3º Semestre"
                  descriptionArray={grade[2]}
                />
                <ListItem
                  title="4º Semestre"
                  descriptionArray={grade[3]}
                />
                <ListItem
                  title="5º Semestre"
                  descriptionArray={grade[4]}
                />
                <ListItem
                  title="6º Semestre"
                  descriptionArray={grade[5]}
                />
              </div>

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
            title="Excluir Curso"
            text="Tem certeza que deseja excluir este curso?"
            onClick={performDelete}
            onCancel={() => setModalDelete(false)}
            confirmButtonText="Excluir"
          />
        </div>
      </PortalContent>
    </DashboardContainer>
  );
};
