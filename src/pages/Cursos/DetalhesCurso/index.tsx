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
  const params = useParams() as { curso: CursosEnum };

  useEffect(() => {
    const curso = cursosService.getCurso(params.curso);
    setCurso(curso);
  }, [params.curso])

  return (
    <Container>
      <Content
        isOnTop
        title={curso?.nome}
        subtitle='Curso superior de tecnologia em'
      >
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
      </Content>
    </Container>
  );
}
