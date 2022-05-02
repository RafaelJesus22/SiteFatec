import { SubjectTheme } from "../types/ICurso"

export const colors = {
  primaryColor: '#971004',
  titleColor: '#415462',
  secondaryTextColor: '#757575',
  white: '#fff',
  black: '#000000',
  background: '#fff',
  modalBackground: '#0004',
  borderColor: '#ccc',
  success: '#4caf50',
}

export const buttonTheme = {
  primary: {
    backgroundColor: colors.primaryColor,
    color: colors.white,
  },
  secondary: {
    backgroundColor: colors.white,
    color: colors.primaryColor,
    border: `1px solid ${colors.primaryColor}`,
  },
}

export const subjectTheme: SubjectTheme[] = [
  {
    background: '#92D050',
    color: '#fff'
  },
  {
    background: '#C4D69B',
    color: '#254112'
  },
  {
    background: '#F5F560',
    color: '#415462'
  },
  {
    background: '#E16B09',
    color: '#fff'
  },
  {
    background: '#9AC3E1',
    color: '#415462'
  },
  {
    background: '#698953',
    color: '#fff'
  },
  {
    background: '#BEBEBE',
    color: '#415462'
  },
  {
    background: '#BBDAFF',
    color: '#415462'
  },
]