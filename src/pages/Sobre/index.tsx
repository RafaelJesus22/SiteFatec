import React, { useLayoutEffect, useState } from 'react';
import { LabelText } from '../../components/atoms/Typography/LabelText';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { Feed } from '../../components/containers/Feed';
import { fatecDia, fatecNoite } from '../../assets/images';
import './styles.css';

export const Sobre: React.FC = () => {
  const [image, setImage] = useState(fatecDia);

  useLayoutEffect(() => {
    const date = new Date();

    if (date.getHours() >= 18) {
      setImage(fatecNoite);
    }
  });

  return (
    <Container>
      <Content title={''} isOnTop >
        <Feed>
          <img
            src={image}
            className="about-img"
            alt="Imagem do prédio da Fatec Santana de Parnaíba"
          />

          <LabelText
            bold
            size='large'
            spacing={{ marginBottom: 12 }}
          >
            HISTÓRIA
          </LabelText>
          <LabelText
            size="default"
            color="secondary"
            spacing={{ marginBottom: 20 }}
          >
            A Fatec Santana de Parnaíba foi inaugurada no dia 23 de setembro de 2014 pelo
            Secretário Estadual de Desenvolvimento Econômico, Ciência, Tecnologia e Inovação,
            Sr. Nelson Baeta Neves Filho e, pela Diretora Superintendente do Centro Paula Souza,
            Sra. Laura Laganá.
          </LabelText>
          <LabelText
            size="default"
            color="secondary"
            spacing={{ marginBottom: 20 }}
          >
            A Fatec Santana inicia suas atividades no primeiro semestre de 2015.
            As aulas são ministradas na ETEC Bartolomeu Bueno da Silva - Anhanguera,
            até a inauguração do prédio próprio da Fatec, construído ao lado do prédio da ETEC,
            através de convênio com a Prefeitura. A inauguração do novo prédio aconteceu no dia
            31 de outubro de 2019 com a presença do Governador do Estado Sr. João Dória,
            da Superintendente do Centro Paula Souza, Sra. Laura Laganá, do Prefeito de Santana de
            Parnaíba, o Sr. Elvis Cezar e o Diretor da Unidade, Prof. Ricardo Slavov. A solenidade de
            inauguração reuniu ainda as presenças do Secretário de Desenvolvimento Regional, Sr. Marcos
            Vinholi, e do Secretário Executivo de Desenvolvimento Econômico Sr. Américo Sakamoto.
          </LabelText>
          <LabelText
            size="default"
            color="secondary"
            spacing={{ marginBottom: 40 }}
          >
            A Fatec Santana nasce inicialmente com um curso: de Tecnologia em Gestão Comercial,
            sendo ofertado 40 vagas no períoido noturno. Posteriormente é implantado o curso de
            Tecnologia em Análise e Desenvolvimento de Sistemas, com 40 vagas no período matutino.
            No primeiro semestre de 2020 é implantado o curso de Tecnologia em Segurança da Informação,
            com 40 vagas no período noturno e, no segundo semestre de 2020 tem início a primeira
            turma do curso de Tecnologia em Ciência de Dados, com 40 vagas no período noturno.
          </LabelText>

          <LabelText
            bold
            size='large'
            spacing={{ marginBottom: 20 }}
          >
            DIREÇÃO
          </LabelText>
          <LabelText
            size="default"
            color="secondary"
            spacing={{ marginBottom: 40 }}
          >
            <p>Diretor: Prof. Dr. Ricardo Slavov</p>
            <p>Diretora de Serviços Acadêmicos: Ana Paula Freitas de Lima Gomes</p>
            <p>Diretora de Serviços Administrativos: Leilane Melo de Souza</p>
            <p>Assessora Administrativa: Daniela Freire Ramos de Oliveira</p>
          </LabelText>
        </Feed>
      </Content>
    </Container>
  );
};
