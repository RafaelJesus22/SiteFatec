import { PortalDashboardMenuItem } from "../../atoms/PortalDashboardMenuItem";
import { MENU_ITENS } from "../../organisms/DashboardMenu";
import './styles.css';


export const DashboardHomeMenu = () => (
  <div className="dashboard-home-menu">
    {MENU_ITENS
      .filter(item =>
        item.label !== 'Início'
      )
      .map(({ label, icon, route }) => (
        <PortalDashboardMenuItem
          label={label}
          icon={icon}
          route={route}
        />
      ))}
  </div>
);