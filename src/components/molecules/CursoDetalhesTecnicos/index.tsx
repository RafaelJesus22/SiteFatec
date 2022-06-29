import { useEffect, useState } from "react";
import { colors } from "../../../config/styles";
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

type ItemProps = {
  title: string,
  description: string,
  link?: string
  url?: string;
}

export const CursoDetalhesTecnicos: React.FC<Props> = ({
  detalhes,
  coordenadorId,
}) => {
  const [coordenador, setCoordenador] = useState<DbProffessor | undefined>();

  useEffect(() => {
    proffessorsService.getProfessorById(coordenadorId).then(setCoordenador);
  });

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
        {detalhes.pedagogicalProjectUrl && (
          <Item
            title="Projeto pedagogico do curso"
            description="Para ver o projeto pedagógico do curso"
            link="clique aqui"
            url={detalhes.pedagogicalProjectUrl}
          />
        )}
      </div>
    </Card>
  );
};

const Item: React.FC<ItemProps> = ({ title, description, link, url }) => (
  <div className="info">
    <LabelText
      bold
      spacing={{ marginTop: 12 }}
    >
      {title}
    </LabelText>
    <LabelText color="secondary">
      {description}{' '}
      {!!link && (
        <a
          style={{ color: colors.primaryColor }}
          href={url}
          target="_blank"
        >
          {link}
        </a>
      )}
    </LabelText>
  </div>
)