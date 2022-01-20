import { Container } from '../../../components/Container/Container';
import { Content } from '../../../components/Content/Content';
import { GradeCurricular } from '../../../components/gradeCurricular'
import './styles.css';
import { cursos } from '../cursosService';


export const DetalhesCurso = () => {
  const { ads } = cursos;
  return (
    <Container>
      <Content isOnTop title="Analise e desenvolvimento de sistemas" subtitle='Curso superior de tecnologia em'>
        <section className="sobre-curso">
          <div className="sobre-curso__detalhes"></div>
          <div className="sobre-curso__coordenador"></div>
        </section>

        <GradeCurricular grade={ads.grade} />
      </Content>
    </Container>
  ); 
}