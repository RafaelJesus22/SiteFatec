/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import {
  CourseInfoProps,
  CourseTechnicalDetailsProps,
  DbCurso,
  TimeCouseType,
} from "../../../../types/ICurso";
import { useAuth } from "../../../../contexts/authContext";
import { useLoading } from "../../../../contexts/loadingContent";
import { cursosService, proffessorsService, subjectService } from "../../../../services";
import { transformToLink } from "../../../../utils/strings";

import { FormInput, FormTextArea } from "../../../../components/atoms/FormInput";
import { FormMultiSelect, FormSelect, Option } from "../../../../components/atoms/FormSelect";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { FormButton } from "../../../../components/atoms/PortalButton";
import { PortalContent } from "../../../../components/containers/PortalContent";

import { CursoParams } from "..";
import './styles.css';

export const CoursesForm = () => {
  const { user } = useAuth();
  const { hideLoading, showLoading } = useLoading();
  const { cursoId } = useParams() as CursoParams;
  const history = useHistory();

  const [proffessors, setProffessors] = useState<Option[]>([]);
  const [selectedProffessor, setSelectedProffessor] = useState<Option>({} as Option);
  const [subjects, setSubjects] = useState<Option[]>([]);
  const [firstSemesterSubjects, setFirstSemesterSubjects] = useState<Option[]>([]);
  const [secondSemesterSubjects, setSecondSemesterSubjects] = useState<Option[]>([]);
  const [thirdSemesterSubjects, setThirdSemesterSubjects] = useState<Option[]>([]);
  const [fourthSemesterSubjects, setFourthSemesterSubjects] = useState<Option[]>([]);
  const [fivethSemesterSubjects, setFivethSemesterSubjects] = useState<Option[]>([]);
  const [sixthSemesterSubjects, setSixthSemesterSubjects] = useState<Option[]>([]);

  const [modalMessage, setModalMessage] = useState('');
  const [course, setCourse] = useState<DbCurso>({} as DbCurso);
  const [courseInfo, setCourseInfo] = useState<CourseInfoProps>({} as CourseInfoProps);
  const [technicalDetails, setTechnicalDetails] = useState<CourseTechnicalDetailsProps>(
    {} as CourseTechnicalDetailsProps
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    showLoading({ message: modalMessage });

    setModalMessage('Criando payload');
    console.log('Criando payload');
    const coursePayload: DbCurso = {
      ...course,
      coordinatorId: selectedProffessor.value,
      link: transformToLink(course.name),
      technicalDetails,
      curriculum: {
        semester1: firstSemesterSubjects.map(item => item.value),
        semester2: secondSemesterSubjects.map(item => item.value),
        semester3: thirdSemesterSubjects.map(item => item.value),
        semester4: fourthSemesterSubjects.map(item => item.value),
        semester5: fivethSemesterSubjects.map(item => item.value),
        semester6: sixthSemesterSubjects.map(item => item.value),
      },
      info: courseInfo,
    };

    console.log('course', coursePayload);

    if (cursoId) {
      setModalMessage('Atualizando curso');
      console.log('Atualizando curso');
      await cursosService.updateCourse(coursePayload);
    } else {
      setModalMessage('Cadastrando curso');
      console.log('Cadastrando curso');
      await cursosService.createCourse(coursePayload);
    }

    setModalMessage('Publicando alterações');
    console.log('Publicando alterações');
    await cursosService.getCourses(true);
    hideLoading();
    history.goBack();
  }

  const getCourse = async () => {
    return await cursosService.getOneCourse(cursoId);
  };

  const getSubjects = async () => {
    const serverSubjects = await subjectService.getSubjects();

    const options: Option[] = serverSubjects.map(s => {
      return {
        label: s.name,
        value: s.id || ""
      }
    });

    return options;
  };

  const getProffessors = async () => {
    const proffessorsServer = await proffessorsService.getProffessors();

    const options: Option[] = proffessorsServer.map(p => {
      return {
        label: p.name,
        value: p.id || ""
      }
    });

    return options;
  };

  useLayoutEffect(() => {
    const mount = async () => {
      showLoading({ message: 'Carregando informações' });
      const serversubjects = await getSubjects();
      const serverProffessors = await getProffessors();

      setSubjects(serversubjects);
      setProffessors(serverProffessors);

      if (cursoId) {
        const serverCourse = await getCourse();

        setCourse(serverCourse as DbCurso);
        setCourseInfo(serverCourse?.info as CourseInfoProps);
        setTechnicalDetails(serverCourse?.technicalDetails as CourseTechnicalDetailsProps);

        const proffessor = serverProffessors.find(p => p.value === serverCourse?.coordinatorId);
        setSelectedProffessor(proffessor as Option);

        const semester1 = serversubjects.filter(s => serverCourse?.curriculum.semester1.includes(s.value));
        const semester2 = serversubjects.filter(s => serverCourse?.curriculum.semester2.includes(s.value));
        const semester3 = serversubjects.filter(s => serverCourse?.curriculum.semester3.includes(s.value));
        const semester4 = serversubjects.filter(s => serverCourse?.curriculum.semester4.includes(s.value));
        const semester5 = serversubjects.filter(s => serverCourse?.curriculum.semester5.includes(s.value));
        const semester6 = serversubjects.filter(s => serverCourse?.curriculum.semester6.includes(s.value));
        setFirstSemesterSubjects(semester1);
        setSecondSemesterSubjects(semester2);
        setThirdSemesterSubjects(semester3);
        setFourthSemesterSubjects(semester4);
        setFivethSemesterSubjects(semester5);
        setSixthSemesterSubjects(semester6);
      }

      hideLoading();
    };
    mount().then(() => console.log('montei'));

  }, [cursoId]);

  useEffect(() => {
    if (!user) {
      history.push("/portal");
    }
  }, [history, user]);

  return (
    <DashboardContainer hasPadding>
      <PortalContent showsBack>
        <form className="dashboard-form">
          <div className="form-section">
            <h1>
              {cursoId && course.name
                ? "Editar curso"
                : "Adicionar curso"
              }
            </h1>

            <FormInput
              style={{ marginBottom: '1.5rem' }}
              required
              name="Nome do curso *"
              value={course.name}
              onChange={e => setCourse({ ...course, name: e.target.value })}
            />
            {proffessors && (
              <FormSelect
                style={{ marginBottom: '1.5rem' }}
                value={selectedProffessor}
                name="Coordenador *"
                options={proffessors}
                onChange={(option) => setSelectedProffessor(option)}
              />
            )}
          </div>

          <div className="form-section">
            <h1>Detalhes técnicos do curso</h1>

            <FormInput
              style={{ marginBottom: '1.5rem' }}
              required
              name="Duração do curso em semestres *"
              type="number"
              value={technicalDetails.duration}
              onChange={e => {
                setTechnicalDetails({ ...technicalDetails, duration: e.target.value });
              }}
            />
            <FormInput
              style={{ marginBottom: '1.5rem' }}
              required
              name="Vagas por semestre *"
              type="number"
              value={technicalDetails.vacancies}
              onChange={e => {
                setTechnicalDetails({ ...technicalDetails, vacancies: e.target.value });
              }}
            />
            <FormSelect
              style={{ marginBottom: '1.5rem' }}
              value={{ value: technicalDetails.timeCourse, label: technicalDetails.timeCourse }}
              name="Período *"
              options={[
                { value: 'Matutino', label: 'Matutino' },
                { value: 'Vespertino', label: 'Vespertino' },
                { value: 'Noturno', label: 'Noturno' },
                { value: 'Matutino/Noturno', label: 'Matutino/Noturno' },
              ]}
              onChange={(option) =>
                setTechnicalDetails({
                  ...technicalDetails,
                  timeCourse: option.value as TimeCouseType
                })
              }
            />
            <FormInput
              style={{ marginBottom: '1.5rem' }}
              name="Projeto pedagógico do curso"
              value={technicalDetails.PedagogicalProjectLink}
              onChange={e => {
                setTechnicalDetails({ ...technicalDetails, PedagogicalProjectLink: e.target.value });
              }}
            />
            <FormTextArea
              style={{ marginBottom: '1.5rem' }}
              name="Observação"
              value={technicalDetails.note}
              onChange={e => {
                setTechnicalDetails({ ...technicalDetails, note: e.target.value });
              }}
            />
          </div>

          <div className="form-section">
            <h1>Informações</h1>

            <FormTextArea
              style={{ marginBottom: '1.5rem' }}
              required
              name="Perfil Profissional *"
              type="number"
              value={courseInfo.professionalProfile}
              onChange={e => {
                setCourseInfo({ ...courseInfo, professionalProfile: e.target.value });
              }}
            />
            <FormTextArea
              style={{ marginBottom: '1.5rem' }}
              required
              name="Onde Trabalhar? "
              type="number"
              value={courseInfo.whereToWork}
              onChange={e => {
                setCourseInfo({ ...courseInfo, whereToWork: e.target.value });
              }}
            />
            <FormInput
              style={{ marginBottom: '1.5rem' }}
              name="Eixo tecnológico"
              type="number"
              value={courseInfo.technologicalAxis}
              onChange={e => {
                setCourseInfo({ ...courseInfo, technologicalAxis: e.target.value });
              }}
            />
          </div>

          <div className="form-section">
            <h1>Grade</h1>

            <FormMultiSelect
              style={{ marginBottom: '1.5rem' }}
              value={firstSemesterSubjects}
              name="1º Semestre"
              options={subjects}
              onChange={(options) => setFirstSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={{ marginBottom: '1.5rem' }}
              value={secondSemesterSubjects}
              name="2º Semestre"
              options={subjects}
              onChange={(options) => setSecondSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={{ marginBottom: '1.5rem' }}
              value={thirdSemesterSubjects}
              name="3º Semestre"
              options={subjects}
              onChange={(options) => setThirdSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={{ marginBottom: '1.5rem' }}
              value={fourthSemesterSubjects}
              name="4º Semestre"
              options={subjects}
              onChange={(options) => setFourthSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={{ marginBottom: '1.5rem' }}
              value={fivethSemesterSubjects}
              name="5º Semestre"
              options={subjects}
              onChange={(options) => setFivethSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={{ marginBottom: '1.5rem' }}
              value={sixthSemesterSubjects}
              name="6º Semestre"
              options={subjects}
              onChange={(options) => setSixthSemesterSubjects(options)}
            />
          </div>

          <div className="form-button">
            <FormButton
              onClick={handleSubmit}
              title="Salvar"
            />
          </div>
        </form>
      </PortalContent>
    </DashboardContainer>
  );
};
