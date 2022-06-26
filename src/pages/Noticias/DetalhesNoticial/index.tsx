import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { NewsDetailParams } from '..';
import { useLoading } from "../../../contexts/loadingContent";
import { cursosService, eventService } from "../../../services";
import { firebaseTimestampToDate } from "../../../utils/strings";
import { DbEvent } from "../../../types/IEvents";

import { Container } from "../../../components/containers/Container/Container";
import { Content } from "../../../components/containers/Content/Content";
import { Feed } from "../../../components/containers/Feed";

import './styles.css';

export const NewsDetail = () => {
  const { hideLoading, showLoading } = useLoading();
  const { noticiaId } = useParams() as NewsDetailParams;
  const [courseName, setCourseName] = useState('');
  const [event, setEvent] = useState<DbEvent>();

  const getCourseName = async (courseParentId?: string) => {
    if (!courseParentId) {
      return setCourseName("Fatec Santana de Parnaíba");
    }

    const course = await cursosService.getCourseById(courseParentId);
    return setCourseName(course?.name || "");
  };

  useLayoutEffect(() => {
    getCourseName();
    showLoading();
    eventService.getEventById(noticiaId)
      .then(setEvent)
      .catch(err => console.log('erro ao obter noticia', err))
      .finally(() => hideLoading());

  }, [noticiaId]);

  return (
    <Container>
      <Content
        isOnTop
        title={courseName}
      >
        <Feed>
          <div className="detalhes-noticia">
            {event?.imgURl && (
              <img
                src={event?.imgURl}
                alt={event?.title}
              />
            )}
            <div className="detalhes-noticia-text">
              <h1>{event?.title}</h1>
              <span>
                criado em {firebaseTimestampToDate(event?.createdAt)}
              </span>
              {event?.edited && (
                <span>
                  atualizado em {firebaseTimestampToDate(event?.updatedAt)}
                </span>
              )}
              <p>{event?.post}</p>
            </div>
          </div>
        </Feed>
      </Content>
    </Container>
  )
};