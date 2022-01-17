import { Container } from '../../../components/Container/Container';
import { Content } from '../../../components/Content/Content';
import { CardDiciplina } from '../components/CardDisciplina'
import './styles.css';
import { cursos } from '../cursosService';
import { DisciplinaProps, CursoProps } from '../../../types/ICurso';


export const DetalhesCurso = () => {
  const { ads } = cursos;
  return (
    <Container>
      <Content isOnTop title="Analise e desenvolvimento de sistemas" subtitle='Curso superior de tecnologia em'>
        <section className="sobre-curso">
          <div className="sobre-curso__detalhes"></div>
          <div className="sobre-curso__coordenador"></div>
        </section>

        <section className="grade">
          <div className="grade__title">
            <h2>Grade Curricular</h2>
          </div>
          <div className="grade__semestres">
            {
              ads.semestres.map((semestre, index) => {
                return (
                  <div className="grade__semestre">
                    <div className="grade__semestre-title">
                      <h3>{index + 1}º Semestre</h3>
                    </div>
                    <div className="semestre-disciplinas">
                      {
                        semestre.semestre.map((disciplina) => (
                          <CardDiciplina
                            title={disciplina.title}
                            aulasSemanais={disciplina.aulasSemanais}
                            type={disciplina.type}
                          />
                        ))
                      }
                    </div>
                  </div>
                )
              }
              )}
          </div>
        </section>
      </Content>
    </Container>
  );
}