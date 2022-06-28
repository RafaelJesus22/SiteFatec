import React, { Fragment, useState } from 'react';
import { FormInput } from '../../components/atoms/FormInput';
import { FormButton } from '../../components/atoms/PortalButton';
import { LabelText } from '../../components/atoms/Typography/LabelText';
import { Container } from '../../components/containers/Container/Container';
import { Content } from '../../components/containers/Content/Content';
import { Feed } from '../../components/containers/Feed';
import './styles.css';

type GetInTouch = {
  name: string;
  email: string;
  subject: string;
}

const SIGA_ALUNOS_LINK = 'https://siga.cps.sp.gov.br/aluno/login.aspx?';
const CPS_LINK = 'www.cps.sp.gov.br';
const VESTIBULAR_FATEC_LINK = 'www.vestibularfatec.com.br';
const BIBLIOTECA_CPS_LINK = 'biblio.cps.sp.gov.br/';

export const Alunos: React.FC = () => {
  const [getInTouch, setGetInTouch] = useState<GetInTouch>({} as GetInTouch);

  const handleTalkToDirector = async (e: any): Promise<void> => {
    e.preventDefault();
    alert('Em breve...');
  }

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
              SIGA
            </LabelText>
            <LabelText color="secondary" size="default">
              O SIGA (Sistema Integrado de Gestão Acadêmica) é a fonte oficial de todos
              os dados referentes aos cursos ministrados, inclusive com relação às suas
              atividades curriculares, participação de docentes e histórico escolar dos
              alunos.<br />
            </LabelText>
            <LabelText color="secondary" size="default">
              <LinkAluno href={SIGA_ALUNOS_LINK}>
                Clique <strong>aqui</strong> para acessar o SIGA
              </LinkAluno>
            </LabelText>
          </Fragment>
          
          <Fragment>
            <LabelText
              bold
              size='large'
              spacing={{ marginBottom: '1rem', marginTop: '2rem' }}
            >
              BIBLIOTECA VIRTUAL
            </LabelText>
            <LabelText color="secondary" size="default">
              <LinkAluno href={SIGA_ALUNOS_LINK}>
                Clique <strong>aqui</strong> para acessar a Biblioteca virtual do Centro Paula Souza
              </LinkAluno>
            </LabelText>
          </Fragment>

          <Fragment>
            <LabelText
              bold
              size='large'
              spacing={{ marginBottom: '1rem', marginTop: '2rem' }}
            >
              GUIA DE PROFISSÕES
            </LabelText>
            <LabelText color="secondary" size="default">
              Apresentamos aos senhores o Guia das Profissões Tecnológicas, uma publicação elaborada
              pela Assessoria de Comunicação (AssCom), com a colaboração de coordenadores e
              professores da Cesu e de coordenadores de cursos das Fatecs. Nosso objetivo é
              possibilitar que o candidato ao Vestibular possa ter uma ideia mais precisa sobre
              o curso pretendido e até mesmo mudar sua opção ao se informar melhor sobre as
              disciplinas que serão estudadas, a atividade profissional e o mercado de trabalho.
              Ter alunos mais convictos de suas escolhas de curso pode contribuir para a queda
              do índice de evasão.<br /><br />
            </LabelText>
            <LabelText color="secondary" size="default">
              As informações reunidas nessa publicação já estão disponíveis no site do Centro Paula
              Souza <LinkAluno href={CPS_LINK}> ({CPS_LINK})</LinkAluno>, na aba Fatecs /Cursos, e na página do Vestibular
              <LinkAluno href={VESTIBULAR_FATEC_LINK}> ({VESTIBULAR_FATEC_LINK})</LinkAluno>.
            </LabelText>
          </Fragment>

          <Fragment>
            <LabelText
              bold
              size='large'
              spacing={{ marginBottom: 12, marginTop: '2rem' }}
            >
              FALE COM O DIRETOR
            </LabelText>
            <form style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <FormInput
                style={{ marginBottom: '1rem' }}
                value={getInTouch?.name}
                name="Nome *"
                onChange={e =>
                  setGetInTouch({ ...getInTouch, name: e.target.value })
                }
              />
              <FormInput
                style={{ marginBottom: '1rem' }}
                value={getInTouch?.email}
                name="E-mail *"
                onChange={e =>
                  setGetInTouch({ ...getInTouch, email: e.target.value })
                }
              />
              <FormInput
                style={{ marginBottom: '1rem' }}
                value={getInTouch?.subject}
                name="Assunto *"
                onChange={e =>
                  setGetInTouch({ ...getInTouch, subject: e.target.value })
                }
              />
              <FormButton
                title="Enviar"
                onClick={handleTalkToDirector}
              />
            </form>
          </Fragment>
        </Feed>
      </Content>
    </Container>
  );
};

const LinkAluno: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" className="alunos-link">
      {children}
    </a>
  );
};
