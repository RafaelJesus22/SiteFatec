import { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { cursosService } from "../../../services";
import { DbEvent } from "../../../types/IEvents"

import './styles.css';

const MAX_WIDTH = 250;

export const EventCard: React.FC<DbEvent> = ({
  createdAt,
  updatedAt,
  title,
  edited,
  post,
  courseParentId,
  imgURl,
  id,
}) => {
  const [courseName, setCourseName] = useState("");
  const history = useHistory();

  const getCourseName = async (courseParentId?: string) => {
    if (!courseParentId) {
      return setCourseName("Fatec Santana de Parnaíba");
    }

    const course = await cursosService.getCourseById(courseParentId);
    return setCourseName(course?.name || "");
  };

  const handleDate = (date: any) => {
    if (!date) {
      return "";
    }

    const d = new Date(date.seconds * 1000);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    return `${d.getDate()}/${month}/${d.getFullYear()}`;
  };

  const handlePost = (text: string) => {
    if (!text) {
      return "";
    }
    return text.length > MAX_WIDTH ? `${text.substring(0, MAX_WIDTH)}...` : text;
  };

  const handleEventDetails = () => {
    history.push(`/noticias/${id}`);
  };

  useLayoutEffect(() => {
    console.log(updatedAt !== createdAt ? "Atualizado" : "Criado");

    getCourseName(courseParentId);
  })

  return (
    <div className="event-item">
      <div className="event-item-header">
        <div>
          <h3>{courseName}</h3>
          <span>{handleDate(createdAt)}</span>
        </div>
        <div>
          {edited && (
            <span>
              Atualizado em: {handleDate(updatedAt)}
            </span>
          )}
        </div>
      </div> 
      <div className="event-item-body">
        <h3 onClick={handleEventDetails}>
          {title}
        </h3>
        <p>
          {handlePost(post)}
          {post.length > MAX_WIDTH && (
            <span
              className="event-item-body_ver-mais"
              onClick={handleEventDetails}
            >
              ver mais
            </span>
          )}
        </p>
        {imgURl && (
          <img
            src={imgURl}
            alt="Imagem do post"
          />
        )}
      </div>
    </div>
  );
}