import React, { useState } from 'react';
import { Content } from '../../components/Content/Content';
import { ProfessorCard } from '../../components/Professor/ProfessorCard';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Search } from '../../assets/icons/icons';
import './styles.css';

export const Professores: React.FC = () => {
  const [search, setSearch] = useState('');
  const [curso, setCurso] = useState('');
  const professores = [
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 01', selected: false },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', nome: 'Professor 02', selected: false },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', nome: 'Professor 03', selected: true },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', nome: 'Professor 04', selected: false },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 01', selected: false },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', nome: 'Professor 02', selected: false },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', nome: 'Professor 03', selected: true },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', nome: 'Professor 04', selected: false },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 01', selected: false },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', nome: 'Professor 02', selected: false },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', nome: 'Professor 11', selected: true },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', nome: 'Professor 12', selected: false },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 13', selected: false },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', nome: 'Professor 14', selected: false },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', nome: 'Professor 15', selected: true },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', nome: 'Professor 16', selected: false },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 17', selected: false },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', nome: 'Professor 18', selected: false },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', nome: 'Professor 19', selected: true },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', nome: 'Professor 20', selected: false },
  ];

  return (
    <Content>
      <div style={{marginTop: 150}}>
        <SectionTitle title="Professores" />
      </div>
      <div className="filtro">
        <div className="filtro__item">
          <select name="curso" id="cursos" onChange={(e): void => setCurso(e.target.value)} >
            <option value="">Todos os cursos</option>
            <option value="ADS">Analise e desenvolvimento de sistemas</option>
            <option value="CD">Ciência de dados</option>
            <option value="SI">Segurança da informação</option>
            <option value="GCOM">Gestão comercial</option>
          </select>
        </div>
        <div className="filtro__item">
          <img src={ Search } alt="pesquisar" />
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
        {professores.map((professor, index) => (
          <div key={index} style={{width:'48%'}}>
            <ProfessorCard
            imgUrl={professor.imgUrl}
            name={professor.nome}
            selected={professor.selected}
          />
          </div>
        ))}
      </div>
    </Content>
  );
};