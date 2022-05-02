import { DbSubject } from '../../../types/ICurso';

import './styles.css';

export const CardDiciplina: React.FC<DbSubject> = ({
  name,
  weeklyClasses,
  theme,
}) => {

  return (
    <div
      className="semestre-disciplina"
      style={{
        backgroundColor: theme.background,
        minHeight: 32,
      }}>
      <p style={{ color: theme.color }}>
        {name} ({weeklyClasses})
      </p>
    </div>
  )
}
