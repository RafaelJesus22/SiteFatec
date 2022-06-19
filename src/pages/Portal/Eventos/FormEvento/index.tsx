import { useEffect, useLayoutEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { DbEvent } from "../../../../types/IEvents";
import { useAuth } from "../../../../contexts/authContext";
import { useLoading } from "../../../../contexts/loadingContent";
import { cursosService, eventService } from "../../../../services";

import { FormInput, FormTextArea } from "../../../../components/atoms/FormInput";
import { FormMultiSelect, FormSelect, Option } from "../../../../components/atoms/FormSelect";
import { DashboardContainer } from "../../../../components/containers/DashboardContainer";
import { FormButton } from "../../../../components/atoms/PortalButton";
import { PortalContent } from "../../../../components/containers/PortalContent";
import { FormFile } from "../../../../components/atoms/FormFile";

import { EventoParams } from "..";
import { styles } from "../../styles";
import './styles.css';

export const EventForm = () => {
  const { user } = useAuth();
  const { hideLoading, showLoading } = useLoading();
  const { eventoId } = useParams() as EventoParams;
  const history = useHistory();

  const [modalMessage, setModalMessage] = useState('');
  const [event, setEvent] = useState<DbEvent>({} as DbEvent);
  const [eventImage, setEventImage] = useState<File | null>(null);
  const [courses, setCourses] = useState<Option[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Option>({} as Option);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    showLoading({ message: modalMessage });

    if (eventoId) {
      setModalMessage('Atualizando evento');
      await eventService.updateEvent(event);
    } else {
      setModalMessage('Cadastrando evento');
      await eventService.createEvent(event);
    }

    setModalMessage('Sucesso!');
    hideLoading();
    history.goBack();
  }

  const getEvent = async () => {
    return await eventService.getEventById(eventoId);
  };

  const getCourses = async () => {
    const courses = await cursosService.getCourses(true);
    const options = courses.map(course => {
      return {
        value: course.id,
        label: course.name,
      }
    });

    return options;
  }

  useLayoutEffect(() => {
    const mount = async () => {
      const coursesOptions = await getCourses();
      setCourses(coursesOptions);

      if (eventoId) {
        const event = await getEvent();
        setEvent(event as DbEvent);
        setSelectedCourse(
          coursesOptions.find(
            course => course.value === event?.courseParentId
          ) as Option
        );
      }
    };
    mount();
  }, [eventoId]);

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
              {eventoId && event.id
                ? "Editar evento"
                : "Adicionar evento"
              }
            </h1>
            <FormFile
              onlyImage
              currentFile={eventImage}
              currentUrl={event.imgURl}
              path={'Eventos'}
              name="Imagem do evento"
              style={styles.formInput}
              onChangeFile={({ url, file }) => {
                setEvent({ ...event, imgURl: url });
                setEventImage(file);
              }}
            />
          </div>

          {!!selectedCourse && (
            <FormSelect
              style={styles.formInput}
              value={selectedCourse}
              name="Curso que o evento pertence"
              options={courses}
              onChange={(option) => setSelectedCourse(option)}
            />
          )}

          <FormTextArea
            style={styles.formInput}
            required
            name="Descreva o evento *"
            maxLength={10000}
            value={event.post}
            onChange={e => {
              setEvent({ ...event, post: e.target.value });
            }}
          />

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
