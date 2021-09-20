import React from 'react';
import { Content } from '../../components/Content/Content';
import { ProfessorCard } from '../../components/Professor/ProfessorCard';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import './styles.css';

export const Professores: React.FC = () => {
  const professores = [
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 1', selected: false },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 2', selected: false },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 3', selected: true },
    { imgUrl: 'https://i.pravatar.cc/150?img=1', nome: 'Professor 4', selected: false },
  ];

  return (
    <Content>
      <div style={{marginTop: 150}}>
        <SectionTitle title="Professores" />
      </div>
      <div className="professores__list">
        {professores.map((professor, index) => (
          <div key={index} style={{width:'45%'}}>
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