import React from 'react';
import { Content } from '../../components/Content/Content';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import './styles.css';

export const Cursos: React.FC = () => {
  return (
    <Content>
      <div style={{ marginTop: 150 }}>
        <SectionTitle title="Cursos" />
      </div>
    </Content>
  );
};
