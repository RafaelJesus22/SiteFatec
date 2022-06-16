import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { DashboardHomeMenu } from "../../../components/molecules/DashboardHomeMenu";
import './styles.css';

export const PortalDashboard: React.FC = () => {

  return (
    <DashboardContainer hasPadding>
      <div className="portal-dashboard-welcome">
        <h1>Página inicial</h1>
        <h3>Bem vindo</h3>
        <span>
          Esse é o portal de administração da Fatec, clique
          em um dos botões abaixo para abrir as configurações
        </span>
      </div>

      <DashboardHomeMenu />
    </DashboardContainer>
  );
};
