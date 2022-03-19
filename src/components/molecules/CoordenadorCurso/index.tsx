import { LabelText } from "../../atoms/Typography/LabelText";
import { CoordenadorCursoProps } from "../../../types/ICurso";
import './styles.css';

interface Props {
  data: CoordenadorCursoProps;
}

export const CoordenadorCurso: React.FC<Props> = ({ data }) => {
  const {
    linkCurriculo,
    linkPhoto,
    nome,
    titulo
  } = data;

  return (
    <div className="coordenador-curso">
      {linkPhoto && (
        <div className="coordenador-curso__photo">
          <img src={linkPhoto} alt={nome} />
        </div>
      )}
      <div className="coordenador-curso__info">
        <LabelText bold>
          Coordenador do Curso
        </LabelText>
        <p>{titulo} {nome}</p>
        <p>
          <a href={linkCurriculo} target="_blank" rel="noreferrer" >
            Ver perfil no lattes
          </a>
        </p>
      </div>
    </div>
  );
}