import { useState, useEffect, useCallback } from 'react';
import { cursosService } from '../../../services';
import { DbCurso } from '../../../types/ICurso';
import { CursoCard } from '../../molecules/CursoCard/CursoCard';
import { CallToMore } from '../../atoms/CallToMore/CallToMore';
import './styles.css';

interface Props {
  quantity?: number;
  inverted?: boolean;
  containerStyle?: React.CSSProperties; 
}

export const Courses: React.FC<Props> = ({
  quantity,
  inverted = false,
  containerStyle = {},
}) => {
  const [courses, setCourses] = useState<DbCurso[]>([]);

  const fetchCourses = useCallback(async () => {
    const cursos = await cursosService.getCourses(true);
    if (!!quantity) {
      return setCourses(cursos.slice(0, quantity));
    }

    setCourses(cursos);
  }, [quantity]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return (
    <div className="cursos-container" style={containerStyle}>
      {courses.map((item, index) => {
        return (
          <div className="cursos-item" key={item.id}>
            <CursoCard
              inverted={inverted && index % 2 === 1}
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum amet temporibus nam cum at, illo laboriosam illum praesentium sit sunt esse voluptatem! Dolorem, dolorum voluptatem."
              image={item.imageUrl}
              title={item.name}
              link={item.link}
            />
          </div>
        );
      })}
      {!!quantity && (
        <div className="cta">
          <CallToMore link={'/cursos'} title={'Todos os Cursos'} />
        </div>
      )}
    </div>
  );
};