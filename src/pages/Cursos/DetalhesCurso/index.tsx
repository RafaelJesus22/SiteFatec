import { Container } from '../../../components/Container/Container';
import { Content } from '../../../components/Content/Content';
import { GradeCurricular } from '../../../components/organisms/gradeCurricular'
import { CursoProps } from '../../../types/ICurso';
import { useEffect, useState } from 'react';
import { cursosService } from '../../../services';
import { useParams } from 'react-router-dom';
import { CursosEnum } from '../../../enums/cursos';
import { CursoInfo } from '../../../components/molecules/CursoInfo';
import { CursoDetalhesTecnicos } from '../../../components/molecules/CursoDetalhesTecnicos';
import './styles.css';


export const DetalhesCurso = () => {
  const [curso, setCurso] = useState<CursoProps | undefined>();
  const [validRoute, setValidRoute] = useState(true);
  const params = useParams() as { curso: CursosEnum };

  useEffect(() => {
    const curso = cursosService.getCurso(params.curso);

    if (curso) {
      return setCurso(curso);
    }
    return setValidRoute(false);
  }, [params.curso])

  return (
    <Container>
      <Content
        isOnTop
        title={validRoute ? curso?.nome : 'Curso não encontrado'}
        subtitle={validRoute ? 'Curso superior de tecnologia em' : '404'}
      >
        {validRoute && (
          <div>
            <section className="sobre-curso">
              {curso && <CursoInfo data={curso.info} />}
              {curso && (
                <CursoDetalhesTecnicos
                  coordenador={curso.coordenador}
                  detalhes={curso.detalhesTecnicos}
                />
              )}
            </section>

            <GradeCurricular grade={[]} />
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
