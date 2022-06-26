import './styles.css';

type Size = 'small' | 'medium' | 'large' | 'default';
type Alginment = 'start' | 'center' | 'end';
type Margins = {
  marginTop?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginHorizontal?: number | string;
  marginVertical?: number | string;
  margin?: number | string;
}

interface Props {
  size?: Size;
  align?: AlingmentsAcceptable;
  bold?: boolean;
  spacing?: Margins;
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
}

interface AlingmentsAcceptable {
  left: Alginment;
  center: Alginment;
  right: Alginment;
}



export const LabelText: React.FC<Props> = ({
  children,
  color = 'primary',
  bold,
  spacing,
  size
}) => {
  const sizes = {
    small: '1rem',
    default: '1.25rem',
    medium: '1.5rem',
    large: '2rem',
  }

  return (
    <div className="label-text__container">
      <p className={`lable-text__text ${color}`} style={{ 
        fontSize: size ? sizes[size] : sizes.small,
        textAlign: 'start',
        fontWeight: bold ? 'bold' : 'normal',
        ...spacing
      }}>
        {children}
      </p>
    </div>
  );
}