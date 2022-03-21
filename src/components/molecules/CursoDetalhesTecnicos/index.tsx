import { CoordenadorCursoProps, CursoDetalhesTecnicosProps } from "../../../types/ICurso";
import { Card } from "../../atoms/Card";
import { LabelText } from "../../atoms/Typography/LabelText";
import { CoordenadorCurso } from "../../molecules/CoordenadorCurso";

import './styles.css';

interface Props {
  detalhes: CursoDetalhesTecnicosProps;
  coordenador?: CoordenadorCursoProps;
}

export const CursoDetalhesTecnicos: React.FC<Props> = ({
  detalhes,
  coordenador,
}) => {
  return (
    <Card>
      <div className="sobre-curso__detalhes">
        {coordenador && (
          <div className="coordenador">
            <CoordenadorCurso data={coordenador} />
          </div>
        )}
        <Item
          title="Duração do curso"
          description={`${detalhes.duracao} anos`}
        />
        <Item
          title={detalhes.periodo}
          description={`${detalhes.vagas} vagas por semestre`}
        />

        {detalhes.nota && (
          <Item
            title="Nota"
            description={detalhes.nota || ''}
          />
        )}
        <Item
          title="Projeto pedagogico do curso"
          description="Para fazer o download do projeto pedagogico do curso clique aqui"
        />
      </div>
    </Card>
  );
};

const Item: React.FC<{ title: string, description: string }> = ({ title, description }) => (
  <div className="info">
    <LabelText
      bold
      spacing={{ marginTop: 12 }}
    >
      {title}
    </LabelText>
    <p className="description">{description}</p>
  </div>
)