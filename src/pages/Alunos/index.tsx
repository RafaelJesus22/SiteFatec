import React, { Fragment, useLayoutEffect, useState } from 'react';
import { LabelText } from '../../components/atoms/Typography/LabelText';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { Feed } from '../../components/containers/Feed';
import { ImageGallery } from '../../components/molecules/ImageGallery';
import { useLoading } from '../../contexts/loadingContent';
import { documentService } from '../../services';
import { StorageFile } from '../../types/IDocument';
import './styles.css';

export const Alunos: React.FC = () => {
  const [internships, setInternships] = useState<StorageFile[]>([]);
  const { hideLoading, showLoading } = useLoading()

  const fetchInternships = async (): Promise<void> => {
    const internships = await documentService.getFilesByPath('estagios');
    setInternships(internships);
  };

  useLayoutEffect(() => {
    showLoading();

    fetchInternships().finally(() => hideLoading());
  }, [])

  return (
    <Container>
      <Content title={'Alunos'} isOnTop >
        <Feed>
          <Fragment>
            <LabelText
              bold
              size='large'
              spacing={{ marginBottom: '1rem', marginTop: '2rem' }}
            >
              Links
            </LabelText>
          </Fragment>

          <Fragment>
            <LabelText
              bold
              size='large'
              spacing={{ marginBottom: 12 }}
            >
              Empresas que já contrataram nossos alunos
            </LabelText>
            <ImageGallery images={internships.map(internship => internship.url)} />
          </Fragment>

          <Fragment>
            <LabelText
              bold
              size='large'
              spacing={{ marginBottom: 12 }}
            >
              O QUE É CPA NA FATEC SANTANA DE PARNAÍBA?
            </LabelText>
            <LabelText
              size="default"
              color="secondary"
              spacing={{ marginBottom: 12 }}
            >
              Denominada Comissão Própria de Avaliação - CPA, é um órgão colegiado, formado
              por professores, que disciplina a organização, o funcionamento e o cumprimento das
              atribuições e é vinculado ao Centro Estadual de Educação Tecnológica do estado de
              São Paulo - CPS.
            </LabelText>
            <LabelText
              size="default"
              color="secondary"
              spacing={{ marginBottom: 12 }}
            >
              A CPA tem atuação autônoma em relação aos Conselhos Superiores e demais Órgãos
              Colegiados da Instituição.
            </LabelText>
            <LabelText
              size="default"
              color="secondary"
              spacing={{ marginBottom: 12 }}
            >
              A CPA tem por finalidade contribuir com o planejamento, elaboração, coordenação e
              monitoramento da política de autoavaliação institucional, promovendo, no que
              couber, a interlocução com os órgãos de regulação, supervisão e avaliação.
            </LabelText>
            <LabelText
              size="default"
              color="secondary"
              spacing={{ marginBottom: 12 }}
            >
              A autoavaliação tem por objetivo a melhoria da qualidade do ensino tecnológico, a
              orientação da expansão da sua oferta, a consolidação da função social do ensino
              superior e o desenvolvimento institucional, e consiste em um processo contínuo,
              sistêmico e participativo que envolve comunidade acadêmica e integrantes da sociedade.
            </LabelText>
            <LabelText
              size="default"
              color="secondary"
              spacing={{ marginBottom: 100 }}
            >
              Em nossa unidade, a CPA começou em 2020 com o Professor Antonio Lobosco, em 2021 foi
              a professora Angela dos Santos Oshiro e em 2022 o Prof. Dr. Célio Aparecido Garcia.
              Para qualquer dúvida, sugestão ou reclamação, você pode acionar a CPA pelo e-mail
              f283.cpa@fatec.sp.gov.br
            </LabelText>
          </Fragment>
        </Feed>
      </Content>
    </Container>
  );
};
