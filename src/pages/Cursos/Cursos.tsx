import React from 'react';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { Courses } from '../../components/organisms/Cursos';

import './styles.css';

export const Cursos: React.FC = () => {
  
  return (
    <Container>
      <Content title="Cursos" isOnTop>
        <Courses />
      </Content>
    </Container>
  );
};
