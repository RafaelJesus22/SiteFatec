import { Container } from '../../../components/containers/Container/Container';
import { Content } from '../../../components/containers/Content/Content';
import { GradeCurricular } from '../../../components/organisms/gradeCurricular'
import { DbCurso } from '../../../types/ICurso';
import { useEffect, useState } from 'react';
import { cursosService } from '../../../services';
import { useParams } from 'react-router-dom';
import { CursosEnum } from '../../../enums/cursos';
import { CursoInfo } from '../../../components/molecules/CursoInfo';
import { CursoDetalhesTecnicos } from '../../../components/molecules/CursoDetalhesTecnicos';
import { DbProffessor } from '../../../types/IProfessor';
import './styles.css';


export const DetalhesCurso = () => {
  const [curso, setCurso] = useState<DbCurso | undefined>();
  const [validRoute, setValidRoute] = useState(true);
  const params = useParams() as { curso: CursosEnum };

  useEffect(() => {
    (async () => {
      const curso = await cursosService.getCouseByLink(params.curso);

      if (curso) {
        return setCurso(curso as DbCurso);
      }
      return setValidRoute(false);
    })()
  }, [params.curso])

  return (
    <Container>
      <Content
        isOnTop
        title={validRoute ? curso?.name : 'Curso não encontrado'}
        subtitle={validRoute ? 'Curso superior de tecnologia em' : '404'}
      >
        {validRoute && (
          <div>
            <section className="sobre-curso">
              {curso && <CursoInfo data={curso.info} />}
              {curso && (
                <CursoDetalhesTecnicos
                  coordenadorId={curso.coordinatorId}
                  detalhes={curso.technicalDetails}
                />
              )}
            </section>

            {curso?.curriculum && <GradeCurricular grade={curso?.curriculum} />}
          </div>
        )}
        {!validRoute && (
          <div className="curso-not_Found">
            <h1 className='c'>Você digitou uma rota inválida</h1>
          </div>
        )}
      </Content>
    </Container>
  );
}
