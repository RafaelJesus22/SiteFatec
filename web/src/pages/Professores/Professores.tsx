import React, { useState } from 'react';
import { Content } from '../../components/Content/Content';
import { ProfessorCard } from '../../components/Professor/ProfessorCard';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Search } from '../../assets/icons/icons';
import { ProfessorCard as ProfessorCardProps } from '../../types/IProfessor';
import './styles.css';

export const Professores: React.FC = () => {
  const [search, setSearch] = useState('');
  const [curso, setCurso] = useState('');
  const professores: ProfessorCardProps[] = [
    { imgUrl: 'https://i.pravatar.cc/150?img=1', name: 'Professor 01' },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', name: 'Professor 02' },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', name: 'Professor 03' },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', name: 'Professor 04' },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', name: 'Professor 01' },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', name: 'Professor 02' },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', name: 'Professor 03' },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', name: 'Professor 04' },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', name: 'Professor 01' },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', name: 'Professor 02' },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', name: 'Professor 11' },
    {
      imgUrl: 'https://i.pravatar.cc/155?img=1',
      name: 'Professor 20',
      CursoDisciplinas: [
        {
          curso: 'Algoritmos',
          funcao: 'Professor',
          disciplinas: [
            {
              nome: 'Algoritmos',
              cargaHoraria: 80,
              categoria: 'programação'
            },
            {
              nome: 'Estrutura de dados',
              cargaHoraria: 80,
              categoria: 'programação'
            },
            {
              nome: 'Orientação a objeto',
              cargaHoraria: 80,
              categoria: 'programação'
            },
          ]
        }
      ]
    },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', name: 'Professor 12' },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', name: 'Professor 13' },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', name: 'Professor 14' },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', name: 'Professor 15' },
    { imgUrl: 'https://i.pravatar.cc/155?img=1', name: 'Professor 16' },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', name: 'Professor 17' },
    { imgUrl: 'https://i.pravatar.cc/140?img=1', name: 'Professor 18' },
    { imgUrl: 'https://i.pravatar.cc/130?img=1', name: 'Professor 19' },
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
              name={professor.name}
              CursoDisciplinas={professor.CursoDisciplinas}
            />
          </div>
        ))}
      </div>
    </Content>
  );
};