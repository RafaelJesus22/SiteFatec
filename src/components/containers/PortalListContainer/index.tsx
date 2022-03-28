import './styles.css';

export const PortalListContainer: React.FC = ({ children }) => {
  return (
    <div className="portal-list_container">
      {children}
    </div>
  );
};