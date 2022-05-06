import React, { useLayoutEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Content } from "../../components/containers/Content/Content";
import { Search } from "../../assets/icons/icons";
import { Container } from "../../components/containers/Container/Container";
import { Accordion } from "../../components/atoms/Accordion";
import { DbProffessor } from "../../types/IProfessor";
import { proffessorsService } from "../../services";
import "./styles.css";
import { colors } from "../../config/styles";

interface ProffessorHeaderProps {
  proffessor: DbProffessor;
  isOpen: boolean;
  onPress: () => void;
}

export const Professores: React.FC = () => {
  const [search, setSearch] = useState("");
  const [, setCurso] = useState("");
  const [professores, setProfessores] = useState<DbProffessor[]>([]);
  const [selectedProfessor, setSelectedProfessor] = useState<DbProffessor | undefined>();

  const fetchProffessors = async () => {
    const proffessors = await proffessorsService.getProffessors(true);
    setProfessores(proffessors);
  };

  const handleSelectProffessor = (proffessor: DbProffessor) => {
    console.log('proffessor', proffessor.id);
    if (proffessor.id === selectedProfessor?.id) {
      return setSelectedProfessor(undefined);
    }
    return setSelectedProfessor(proffessor);
  }

  useLayoutEffect(() => {
    fetchProffessors();
  }, [])

  return (
    <Container>
      <Content title={'Professores'} isOnTop>
        <div className="filtro">
          <div className="filtro__item">
            <select
              name="curso"
              id="cursos"
              onChange={(e): void => setCurso(e.target.value)}
            >
              <option value="">Todos os cursos</option>
              <option value="ADS">Analise e desenvolvimento de sistemas</option>
              <option value="CD">Ciência de dados</option>
              <option value="SI">Segurança da informação</option>
              <option value="GCOM">Gestão comercial</option>
            </select>
          </div>
          <div className="filtro__item">
            <img src={Search} alt="pesquisar" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Pesquisar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="professores__list">
          {professores.map((proffessor) => (
            <Accordion
              key={proffessor.id}
              isOpen={selectedProfessor?.id === proffessor.id}
              onClick={(): void => handleSelectProffessor(proffessor)}
              Content={() => <ProffessorContent {...proffessor} />}
              Header={() => 
                <ProffessorHeader
                  proffessor={proffessor}
                  isOpen={selectedProfessor?.id === proffessor.id}
                  onPress={() => handleSelectProffessor(proffessor)}
                />
              }
            />
          ))}
        </div>
      </Content>
    </Container>
  );
};

const ProffessorHeader: React.FC<ProffessorHeaderProps> = ({
  proffessor,
  isOpen,
  onPress,
}) => {
  const {imgUrl, name, title} = proffessor;

  return (
    <div className="proffessor-header" onClick={onPress}>
      <div style={{ display: "flex", alignItems: "center" }}>
        {imgUrl && <img src={imgUrl} alt={`professor ${name}`} />}
        <h3>{!!title && title} {name}</h3>
      </div>
      <div style={{ marginRight: '1rem', marginLeft: '1rem', cursor: 'pointer' }}>
        {isOpen ?
          <FaChevronUp
            color={colors.secondaryTextColor}
            onClick={onPress}
            style={{ cursor: 'pointer' }}
          /> :
          <FaChevronDown
            color={colors.secondaryTextColor}
            onClick={onPress}
            style={{ cursor: 'pointer' }}
          />
        }
      </div>
    </div>
  );
}

const ProffessorContent: React.FC<DbProffessor> = ({
  lattes,
  email,
  classes,
  linkedin,
}) => {
  return (
    <div className="proffessor-content">
      {email && (
        <div>
          <span>E-mail</span>
          <h4>{email}</h4>
        </div>
      )}
      {lattes && (
        <div>
          <span>Curriculo</span>
          <h4>{lattes}</h4>
        </div>
      )}
      {linkedin && (
        <div>
          <span>Linkedin</span>
          <h4>{linkedin}</h4>
        </div>
      )}
      {classes && (
        <div>
          <span>Cursos</span>
          {classes.map((item) => {
            return (
              <h4>
                {item.label}
              </h4>
            )
          })}
        </div>
      )}
    </div>
  );
}
