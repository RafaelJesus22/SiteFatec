import { CurriculumProps } from '../../../types/ICurso';
import { CardDiciplina } from '../../atoms/CardDisciplina';
import './styles.css';

interface GradeCurricularProps {
  grade: CurriculumProps
}

export const GradeCurricular: React.FC<GradeCurricularProps> = ({
  grade
}) => (
    <section className="grade">
      <div className="grade__title">
        <h2>Grade Curricular</h2>
      </div>

      <div className="grade__semestres">
        {
          [
            grade.semester1,
            grade.semester2,
            grade.semester3,
            grade.semester4,
            grade.semester5,
            grade.semester6,
          ].map((semestre, index: number) => {
            return (
              <div className="grade__semestre">
                <div className="grade__semestre-title">
                  <h3>{index + 1}º Semestre</h3>
                </div>
                <div className="semestre-disciplinas">
                  {
                    semestre.map((disciplina) => (
                      <CardDiciplina
                        key={disciplina}
                        subjectId={disciplina}
                      />
                    ))
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );