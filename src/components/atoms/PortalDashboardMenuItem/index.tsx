import { useHistory } from "react-router-dom";
import './styles.css';

interface Props {
  label: string;
  icon: React.ReactElement;
  route: string;
}

export const PortalDashboardMenuItem: React.FC<Props> = ({
  label,
  icon,
  route,
}) => {
  const history = useHistory();
  const handlePress = () => history.push(route);

  return (
    <div className="portal-dashboard-menu_item" onClick={handlePress}>
      <div className="dashboard-menu_item-icon">{icon}</div>
      <div className="dashboard-menu_item-label">{label}</div>
    </div>
  );
};