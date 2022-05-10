/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { Search } from "../../assets/icons/icons";
import { DbProffessor } from "../../types/IProfessor";
import { colors } from "../../config/styles";
import { cursosService, proffessorsService } from "../../services";
import { useLoading } from "../../contexts/loadingContent";

import { Content } from "../../components/containers/Content/Content";
import { Container } from "../../components/containers/Container/Container";
import { Accordion } from "../../components/atoms/Accordion";
import "./styles.css";

interface ProffessorHeaderProps {
  proffessor: DbProffessor;
  isOpen: boolean;
  onPress: () => void;
}

interface SelectOptionProps {
  label: string;
  value: string;
}

export const Professores: React.FC = () => {
  const [search, setSearch] = useState("");
  const [cursos, setCursos] = useState<SelectOptionProps[]>([{
    label: 'Todos os cursos',
    value: 'All'
  }]);
  const [selectedCourse, setSelectecCourse] = useState<SelectOptionProps>(cursos[0]);
  const [professores, setProfessores] = useState<DbProffessor[]>([]);
  const [filteredProffessors, setFilteredProffessors] = useState<DbProffessor[]>([]);
  const [selectedProfessor, setSelectedProfessor] = useState<DbProffessor | undefined>();
  const { hideLoading, showLoading } = useLoading();

  const fetchProffessors = async () => {
    showLoading();
    const proffessors = await proffessorsService.getProffessors(true);
    setProfessores(proffessors);
    setFilteredProffessors(proffessors);
    hideLoading();
  };

  const fetchCourses = useCallback(async () => {
    showLoading();
    const courses = await cursosService.getCourses(true);
    setCursos([
      {
        label: 'Todos os cursos',
        value: 'All'
      },
      ...courses.map(course => {
        return {
          label: course.name,
          value: course.id
        }
      })
    ]);

    hideLoading();
  }, []);

  const handleSelectProffessor = (proffessor: DbProffessor) => {
    if (proffessor.id === selectedProfessor?.id) {
      return setSelectedProfessor(undefined);
    }
    return setSelectedProfessor(proffessor);
  };

  const fetchData = () => {
    Promise.all([
      fetchProffessors(),
      fetchCourses(),
    ]);
  };

  const filter = () => {
    if (!search && selectedCourse.value === 'All') {
      return setFilteredProffessors(professores);
    }

    if (!!search && selectedCourse.value === 'All') {
      return setFilteredProffessors(
        professores.filter(
          professor =>
            professor.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    const filtered: DbProffessor[] = [];

    if (!search && selectedCourse.value !== 'All') {
      professores.forEach(professor => {
        const { classes } = professor;
        classes.forEach(item => {
          if (item.value === selectedCourse.value) {
            filtered.push(professor);
          }
        })
      });

      return setFilteredProffessors(filtered);
    }

    professores.forEach(professor => {
      const { classes } = professor;
      classes.forEach(item => {
        if (item.value === selectedCourse.value) {
          filtered.push(professor);
        }
      })
    });

    return setFilteredProffessors(
      filtered.filter(professor => professor.name.toLowerCase().includes(search.toLowerCase()))
    );
  };

  useEffect(() => {
    console.log('filtrados', filteredProffessors)
  }, [filteredProffessors]);

  useEffect(() => {
    filter();
  }, [search, selectedCourse]);

  useLayoutEffect(() => {
    fetchData();
  }, [])

  return (
    <Container>
      <Content title={'Professores'} isOnTop>
        <div className="filtro">
          <div className="filtro__item">
            <select
              name="curso"
              id="cursos"
              onChange={(e): void =>
                setSelectecCourse(
                  cursos.filter(curso => curso.value === e.target.value)[0]
                )
              }
            >
              {cursos.map(course => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
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
          {filteredProffessors.length === 0 && (
            <h2>Nenhum professor foi encontrado!</h2>
          )}
          {filteredProffessors.map((proffessor, index) => (
            <Accordion
              key={proffessor.id}
              zIndex={index + 1}
              isOpen={!!selectedProfessor && (selectedProfessor?.id === proffessor.id)}
              onClick={() => handleSelectProffessor(proffessor)}
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
  const { imgUrl, name, title } = proffessor;

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
