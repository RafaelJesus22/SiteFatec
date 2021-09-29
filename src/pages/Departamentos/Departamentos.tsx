import React from 'react';
import { Container } from '../../components/Container/Container';
import { Content } from '../../components/Content/Content';
import './styles.css';

export const Departamentos: React.FC = () => {
  return (
    <Container>
      <Content title={'Departamentos'} isOnTop >
        <div></div>
      </Content>
    </Container>
  );
};
