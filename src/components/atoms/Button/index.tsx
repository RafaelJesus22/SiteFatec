import { buttonTheme } from '../../../config/styles';
import './styles.css';

type ButtonTheme = 'primary' | 'secondary';

interface Props {
  title: string;
  onClick: () => void;
  type?: ButtonTheme;
}

export const Button: React.FC<Props> = ({
  title,
  onClick,
  type = 'primary',
}) => {
  return (
    <button
      className="app-button" 
      onClick={onClick}
      style={buttonTheme[type]}
    >
      {title}
    </button>
  );
};