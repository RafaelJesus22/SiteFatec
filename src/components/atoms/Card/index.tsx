import './styles.css'

export const Card: React.FC = ({
  children,
}) => {
  return (
    <div className="card">
      {children}
    </div>
  );
}