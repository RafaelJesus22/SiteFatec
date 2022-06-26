import { useEffect, useState } from "react";
import { proffessorsService } from "../../../services";
import { CourseTechnicalDetailsProps } from "../../../types/ICurso";
import { DbProffessor } from "../../../types/IProfessor";
import { Card } from "../../atoms/Card";
import { LabelText } from "../../atoms/Typography/LabelText";
import { CoordenadorCurso } from "../../molecules/CoordenadorCurso";

import './styles.css';

interface Props {
  detalhes: CourseTechnicalDetailsProps;
  coordenadorId: string;
}

export const CursoDetalhesTecnicos: React.FC<Props> = ({
  detalhes,
  coordenadorId,
}) => {
  const [coordenador, setCoordenador] = useState<DbProffessor | undefined>();

  useEffect(() => {
    proffessorsService.getProfessorById(coordenadorId).then(setCoordenador);
  })

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
          description={`${detalhes.duration} semestres`}
        />
        <Item
          title={detalhes.timeCourse}
          description={`${detalhes.vacancies} vagas por semestre`}
        />

        {detalhes.note && (
          <Item
            title="Nota"
            description={detalhes.note || ''}
          />
        )}
        <Item
          title="Projeto pedagogico do curso"
          description="Para fazer o download do projeto pedagógico do curso clique aqui"
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