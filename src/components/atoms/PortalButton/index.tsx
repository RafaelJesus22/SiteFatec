import { colors } from "../../../config/styles";
import './styles.css';

interface Props {
  title: string;
  onClick: () => any;
  color?: string;
}

export const FormButton: React.FC<Props> = ({
  title,
  onClick,
  color,
}) => {
  return (
    <button
      className="portal-button"
      onClick={onClick}
      style={{
        backgroundColor: !color ? colors.primaryColor : color,
      }}
    >
      {title}
    </button>
  );
}