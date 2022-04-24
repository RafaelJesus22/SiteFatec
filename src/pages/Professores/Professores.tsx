import React, { useState } from "react";
import { Content } from "../../components/containers/Content/Content";
import { ProfessorCard } from "../../components/Professor/ProfessorCard";
import { Search } from "../../assets/icons/icons";
import { DbProffessor } from "../../types/IProfessor";
import "./styles.css";
import { Container } from "../../components/containers/Container/Container";

export const Professores: React.FC = () => {
  const [search, setSearch] = useState("");
  // const [prosessor, setProfessor] = useState<DbProffessor>();
  const [, setCurso] = useState("");
  const CursoDisciplinas = [
    {
      curso: "Algoritmos",
      funcao: "Professor",
      disciplinas: [
        { nome: "Algoritmos", cargaHoraria: 80, categoria: "programação" },
        {
          nome: "Estrutura de dados",
          cargaHoraria: 80,
          categoria: "programação",
        },
        {
          nome: "Orientação a objeto",
          cargaHoraria: 80,
          categoria: "programação",
        },
      ],
    },
  ];

  // const professores: DbProffessor[] = [
  //   {
  //     imgUrl: "https://i.pravatar.cc/150?img=1",
  //     name: "Rafael Jesus Correia Moura",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/140?img=2",
  //     name: "Professor 02Professor 02Professor 02",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/130?img=3",
  //     name: "Professor 03",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/155?img=4",
  //     name: "Professor 04",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/150?img=5",
  //     name: "Pós doutor Irapuã Glória Junior",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/140?img=6",
  //     name: "Professor 02",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/130?img=7",
  //     name: "Professor 03",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/155?img=8",
  //     name: "Professor 04",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/150?img=9",
  //     name: "Professor 01",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/140?img=10",
  //     name: "Professor 02",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/130?img=11",
  //     name: "Professor 11",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/155?img=12",
  //     name: "Professor 12",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/150?img=13",
  //     name: "Professor 13",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/140?img=14",
  //     name: "Professor 14",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/130?img=15",
  //     name: "Professor 15",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/155?img=16",
  //     name: "Professor 16",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/150?img=17",
  //     name: "Professor 17",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/140?img=18",
  //     name: "Professor 18",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/130?img=19",
  //     name: "Professor 19",
  //     CursoDisciplinas,
  //   },
  //   {
  //     imgUrl: "https://i.pravatar.cc/155?img=20",
  //     name: "Professor 20",
  //     CursoDisciplinas,
  //   },
  // ];

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
          {/* {professores.map((professor, index) => (
            <div key={index}className={'professores_item'}>
              <ProfessorCard
                imgUrl={professor.imgUrl}
                name={professor.name}
              />
            </div>
          ))} */}
        </div>
      </Content>
    </Container>
  );
};
