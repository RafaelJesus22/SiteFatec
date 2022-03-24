import { PortalContainer } from "../../../components/containers/PortalContainer";
import { DashboardMenu } from "../../../components/organisms/DashboardMenu";

export const PortalDashboard: React.FC = () => {
  return (
    <PortalContainer>
      <DashboardMenu />
    </PortalContainer>
  );
};
