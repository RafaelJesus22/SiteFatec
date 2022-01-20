import { DisciplinaProps } from '../../types/ICurso';

import './styles.css';

export const CardDiciplina: React.FC<DisciplinaProps> = ({
  title,
  aulasSemanais,
  type
}) => {
  const colors = {
    tecnica: {
      background: '#92D050',
      color: '#fff'
    },
    infra: {
      background: '#C4D69B',
      color: '#254112'
    },
    matematica: {
      background: '#F5F560',
      color: '#415462'
    },
    adm: {
      background: '#E16B09',
      color: '#fff'
    },
    linguagemEstrangeira: {
      background: '#9AC3E1',
      color: '#415462'
    },
    linguaPortuguesa: {
      background: '#BBDAFF',
      color: '#415462'
    },
    eletiva: {
      background: '#698953',
      color: '#fff'
    },
    multidisciplinarProfissional: {
      background: '#BEBEBE',
      color: '#415462'
    },
    multidisciplinarBasica: {
      background: '#BBDAFF',
      color: '#415462'
    },
  }

  return (
    <div
      className="semestre-disciplina"
      style={{
        backgroundColor: colors[type].background,
        minHeight: (type === 'multidisciplinarBasica' || type === 'tecnica') ? 32 * 4 : aulasSemanais * 32,
      }}>
      <p style={{ color: colors[type].color }}>
        {title} ({aulasSemanais})
      </p>
    </div>
  )
}
