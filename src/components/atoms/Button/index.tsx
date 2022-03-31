import './styles.css';

interface Props {
  title: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({
  title,
  onClick,
}) => {
  return (
    <button className="app-button" onClick={onClick}>
      {title}
    </button>
  );
};