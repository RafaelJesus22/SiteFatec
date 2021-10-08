import React from 'react';
import { Container } from '../../components/Container/Container';
import { Content } from '../../components/Content/Content';
import './styles.css';

export const Noticias: React.FC = () => {
  return (
    <Container>
      <Content title={'Notícias'} isOnTop >
        <div></div>
      </Content>
    </Container>
  );
};
