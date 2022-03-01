import { Container } from '../../../components/Container/Container';
import { Content } from '../../../components/Content/Content';
import { GradeCurricular } from '../../../components/gradeCurricular'
import { LabelText } from '../../../components/Typography/LabelText'
import './styles.css';
import { cursos } from '../cursosService';
import { CoordenadorCursoProps } from '../../../types/ICurso';

interface CoordenadorProps {
  data: CoordenadorCursoProps
}

export const DetalhesCurso = () => {
  const { ads } = cursos;
  return (
    <Container>
      <Content
        isOnTop
        title="Análise e desenvolvimento de sistemas"
        subtitle='Curso superior de tecnologia em'
      >
        <section className="sobre-curso">
          <div className="sobre-curso__info card">
            <LabelText
              bold
              size='small'
              spacing={{ marginBottom: 8 }}
            >
              Perfil Profissional
            </LabelText>
            <p>
              O curso de Análise e Desenvolvimento de Sistemas prepara você
              para atuar na área de Tecnologia, podendo trabalhar na análise,
              projeto e desenvolvimento de sistemas computacionais, tais como:
              aplicativos para celulares e outros dispositivos móveis, sites,
              jogos, sistema comerciais etc.
            </p>
            <p>
              Nessa área, você será um profissional que poderá atuar em todos
              os tipos de empresa. Em Informática, não há crise de emprego.
              Desde o século passado dizemos que “a informática é a profissão
              do presente e do futuro”. Com os avanços da tecnologia, essa frase
              fica cada vez mais verdadeira.
            </p>
            <p>
              Em reportagem no Jornal O Estado de São Paulo, de 01/10/2017, está
              escrito “... a língua das máquinas será o idioma mais importante do
              futuro”. Portanto, saber programação, será fundamental.
            </p>
          </div>
          <div className="sobre-curso__detalhes card">
            <div className="coordenador">
              <CoordenadorCurso data={ads.coordenador} />
            </div>
            <div className="info">
              <LabelText
                bold
                spacing={{ marginTop: 12 }}
              >
                Duração do curso
              </LabelText>
              <p className="description">3 anos</p>
            </div>
            <div className="info">
              <LabelText
                bold
                spacing={{ marginTop: 12 }}
              >
                Matutino/Noturno
              </LabelText>
              <p className="description">40 vagas por semestre</p>
            </div>
            <div className="info">
              <LabelText
                bold
                spacing={{ marginTop: 12 }}
              >
                Nota
              </LabelText>
              <p className="description">do 1º ao 4º semestres o aluno estuda no período da manhã e a partir do 5º  semestre no período noturno.</p>
            </div>
            <div className="info">
              <LabelText
                bold
                spacing={{ marginTop: 12 }}
              >
                Projeto pedagogico do curso
              </LabelText>
              <p className="description">Para fazer o download do projeto pedagogico do curso clique aqui</p>
            </div>
          </div>
        </section>

        <GradeCurricular grade={ads.grade} />
      </Content>
    </Container>
  );
}

const CoordenadorCurso: React.FC<CoordenadorProps> = ({ data }) => {
  const { linkCurriculo, linkPhoto, nome, titulo } = data;

  return (
    <div className="coordenador-curso">
      <div className="coordenador-curso__photo">
        <img src={linkPhoto} alt={nome} />
      </div>
      <div className="coordenador-curso__info">
        <LabelText bold>
          Coordenador do Curso
        </LabelText>
        <p>{titulo} {nome}</p>
        <p>
          <a href={linkCurriculo}>Ver perfil no lattes</a>
        </p>
      </div>
    </div>
  );
}