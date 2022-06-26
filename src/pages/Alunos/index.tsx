import React from 'react';
import { LabelText } from '../../components/atoms/Typography/LabelText';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { Feed } from '../../components/containers/Feed';
import './styles.css';

export const Alunos: React.FC = () => {
  return (
    <Container>
      <Content title={'Alunos'} isOnTop >
        <Feed>
          <LabelText
            bold
            size='large'
            spacing={{ marginBottom: '1rem', marginTop: '2rem' }}
          >
            Links
          </LabelText>
        </Feed>
      </Content>
    </Container>
  );
};
