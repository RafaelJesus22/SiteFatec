import { SemestreProps } from '../../../types/ICurso';
import { CardDiciplina } from '../../atoms/CardDisciplina'

import './styles.css';

interface GradeCurricularProps {
  grade: Array<SemestreProps>
}

export const GradeCurricular: React.FC<GradeCurricularProps> = ({
  grade
}) => {
  return (
    <section className="grade">
      <div className="grade__title">
        <h2>Grade Curricular</h2>
        <p style={{ textAlign: 'center' }}>Em manutenção...</p>
      </div>

      {/* <div className="grade__semestres">
        {
          grade.map((semestre, index) => {
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
      </div> */}
    </section>
  );
}