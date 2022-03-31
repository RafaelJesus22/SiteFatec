import React from 'react';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
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
