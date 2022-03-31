import './styles.css';

export const PortalContainer: React.FC = ({ children }) => {
  return (
    <div className="portal-container">
      <div>
        {children}
      </div>
    </div>
  );
}