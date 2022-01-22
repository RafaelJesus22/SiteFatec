import './styles.css';

type Size = 'small' | 'medium' | 'large';
type Alginment = 'start' | 'center' | 'end';
type Margins = {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  margin?: number;
}

interface Props {
  size?: Size;
  align?: AlingmentsAcceptable;
  bold?: boolean;
  spacing?: Margins;
  children: React.ReactNode;
}

interface AlingmentsAcceptable {
  left: Alginment;
  center: Alginment;
  right: Alginment;
}



export const LabelText: React.FC<Props> = ({
  children,
  align,
  bold,
  spacing,
  size
}) => {
  const sizes = {
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  }

  // const alignments: AlingmentsAcceptable = {
  //   left: 'start',
  //   center: 'center',
  //   right: 'end',
  // }

  return (
    <div className="label-text__container">
      <p className="lable-text__text" style={{ 
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