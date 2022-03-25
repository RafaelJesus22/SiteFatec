import { DashboardMenu } from "../../organisms/DashboardMenu";
import { PortalContainer } from "../PortalContainer";

interface Props {
  hasPadding?: boolean;
}

export const DashboardContainer: React.FC<Props> = ({ children, hasPadding }) => {
  return (
    <PortalContainer>
      <DashboardMenu />
      <div style={{ padding: hasPadding ? '2rem' : 0, marginLeft: '340px' }}>
        {children}
      </div>
    </PortalContainer>
  );
};