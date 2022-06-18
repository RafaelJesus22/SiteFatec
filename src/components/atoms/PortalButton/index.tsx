import { colors } from "../../../config/styles";
import './styles.css';

interface Props {
  title: string;
  onClick: (param?: any) => any | Promise<any>;
  color?: string;
  disabled?: boolean;
}

export const FormButton: React.FC<Props> = ({
  title,
  onClick,
  color,
  disabled,
}) => {
  return (
    <button
      className={`portal-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      style={{
        backgroundColor: !color ? colors.primaryColor : color,
      }}
    >
      {title}
    </button>
  );
}