import { LabelText } from "../../atoms/Typography/LabelText";
import { DbProffessor } from "../../../types/IProfessor";
import './styles.css';

interface Props {
  data: DbProffessor;
}

export const CoordenadorCurso: React.FC<Props> = ({ data }) => {
  const {
    lattes,
    imgUrl,
    name,
    title
  } = data;

  return (
    <div className="coordenador-curso">
      {imgUrl && (
        <div className="coordenador-curso__photo">
          <img src={imgUrl} alt={name} />
        </div>
      )}
      <div className="coordenador-curso__info">
        <LabelText bold>
          Coordenador do Curso
        </LabelText>
        <p>{title} {name}</p>
        <p>
          <a href={lattes} target="_blank" rel="noreferrer" >
            Ver perfil no lattes
          </a>
        </p>
      </div>
    </div>
  );
}