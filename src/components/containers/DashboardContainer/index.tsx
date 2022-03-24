import { DashboardMenu } from "../../organisms/DashboardMenu";
import { PortalContainer } from "../PortalContainer";

export const DashboardContainer: React.FC = ({ children }) => {
  return (
    <PortalContainer>
      <DashboardMenu />
      <div style={{ padding: '2rem', marginLeft: '340px' }}>
        {children}
      </div>
    </PortalContainer>
  );
};