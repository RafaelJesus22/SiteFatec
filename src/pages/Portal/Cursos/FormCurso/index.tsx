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
import { FormFile } from "../../../../components/atoms/FormFile";

import { CursoParams } from "..";
import { styles } from "../../styles";
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

  const [courseImage, setCourseImage] = useState<File | null>(null);
  const [pedagogicalProjectUrl,] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [course, setCourse] = useState<DbCurso>({} as DbCurso);
  const [courseInfo, setCourseInfo] = useState<CourseInfoProps>({} as CourseInfoProps);
  const [technicalDetails, setTechnicalDetails] = useState<CourseTechnicalDetailsProps>(
    {} as CourseTechnicalDetailsProps
  );

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const { name, imageUrl } = course;
    const { duration, timeCourse, vacancies } = technicalDetails;
    const { professionalProfile } = courseInfo;

    if (
        !name ||
        !selectedProffessor.value ||
        !imageUrl ||
        !duration ||
        !timeCourse ||
        !vacancies ||
        !professionalProfile
      ) {
      return window.alert('Preencha todos os campos obrigatórios!');
    }

    showLoading({ message: modalMessage });

    const coursePayload: DbCurso = {
      ...course,
      coordinatorId: selectedProffessor.value,
      link: transformToLink(course.name),
      technicalDetails: {
        ...technicalDetails,
        pedagogicalProjectUrl,
      },
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

    if (cursoId) {
      setModalMessage('Atualizando curso');
      await cursosService.updateCourse(coursePayload);
    } else {
      setModalMessage('Cadastrando curso');
      await cursosService.createCourse(coursePayload);
    }

    setModalMessage('Sucesso!');
    hideLoading();
    history.goBack();
  }

  const getCourse = async () => {
    return await cursosService.getCourseById(cursoId);
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

        const semester1 = serverCourse?.curriculum.semester1.map(s => {
          return serversubjects.find(sub => sub.value === s);
        });
        const semester2 = serverCourse?.curriculum.semester2.map(s => {
          return serversubjects.find(sub => sub.value === s);
        });
        const semester3 = serverCourse?.curriculum.semester3.map(s => {
          return serversubjects.find(sub => sub.value === s);
        });
        const semester4 = serverCourse?.curriculum.semester4.map(s => {
          return serversubjects.find(sub => sub.value === s);
        });
        const semester5 = serverCourse?.curriculum.semester5.map(s => {
          return serversubjects.find(sub => sub.value === s);
        });
        const semester6 = serverCourse?.curriculum.semester6.map(s => {
          return serversubjects.find(sub => sub.value === s);
        });

        setFirstSemesterSubjects(semester1 as Option[]);
        setSecondSemesterSubjects(semester2 as Option[]);
        setThirdSemesterSubjects(semester3 as Option[]);
        setFourthSemesterSubjects(semester4 as Option[]);
        setFivethSemesterSubjects(semester5 as Option[]);
        setSixthSemesterSubjects(semester6 as Option[]);
      }

      hideLoading();
    };
    mount();

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
              style={styles.formInput}
              required
              name="Nome do curso *"
              value={course.name}
              onChange={e => setCourse({ ...course, name: e.target.value })}
            />
            {proffessors && (
              <FormSelect
                style={styles.formInput}
                value={selectedProffessor}
                name="Coordenador *"
                options={proffessors}
                onChange={(option) => setSelectedProffessor(option)}
              />
            )}
            <FormFile
              currentFile={courseImage}
              currentUrl={course.imageUrl}
              path="thumb_curso"
              name="Imagem do curso no menu *"
              style={styles.formInput}
              onChangeFile={({ url, file }) => {
                setCourse({ ...course, imageUrl: url });
                setCourseImage(file);
              }}
            />
          </div>

          <div className="form-section">
            <h1>Detalhes técnicos do curso</h1>

            <FormInput
              style={styles.formInput}
              required
              name="Duração do curso em semestres *"
              type="number"
              value={technicalDetails.duration}
              onChange={e => {
                setTechnicalDetails({ ...technicalDetails, duration: e.target.value });
              }}
            />
            <FormInput
              style={styles.formInput}
              required
              name="Vagas por semestre *"
              type="number"
              value={technicalDetails.vacancies}
              onChange={e => {
                setTechnicalDetails({ ...technicalDetails, vacancies: e.target.value });
              }}
            />
            <FormSelect
              style={styles.formInput}
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
              style={styles.formInput}
              name="Link do projeto pedagógico do curso"
              value={technicalDetails.pedagogicalProjectUrl}
              onChange={(e) => {
                setTechnicalDetails({
                  ...technicalDetails,
                  pedagogicalProjectUrl: e.target.value
                });
              }}
            />
            <FormTextArea
              style={styles.formInput}
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
              style={styles.formInput}
              required
              name="Perfil Profissional *"
              value={courseInfo.professionalProfile}
              onChange={e => {
                console.log('profissional', courseInfo.professionalProfile);
                setCourseInfo({ ...courseInfo, professionalProfile: e.target.value });
              }}
            />
            <FormTextArea
              style={styles.formInput}
              required
              name="Onde Trabalhar? "
              value={courseInfo.whereToWork}
              onChange={e => {
                setCourseInfo({ ...courseInfo, whereToWork: e.target.value });
              }}
            />
            <FormInput
              style={styles.formInput}
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
              style={styles.formInput}
              value={firstSemesterSubjects}
              name="1º Semestre"
              options={subjects}
              onChange={(options) => setFirstSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={styles.formInput}
              value={secondSemesterSubjects}
              name="2º Semestre"
              options={subjects}
              onChange={(options) => setSecondSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={styles.formInput}
              value={thirdSemesterSubjects}
              name="3º Semestre"
              options={subjects}
              onChange={(options) => setThirdSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={styles.formInput}
              value={fourthSemesterSubjects}
              name="4º Semestre"
              options={subjects}
              onChange={(options) => setFourthSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={styles.formInput}
              value={fivethSemesterSubjects}
              name="5º Semestre"
              options={subjects}
              onChange={(options) => setFivethSemesterSubjects(options)}
            />
            <FormMultiSelect
              style={styles.formInput}
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
