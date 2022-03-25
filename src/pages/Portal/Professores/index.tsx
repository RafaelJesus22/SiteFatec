import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DashboardContainer } from "../../../components/containers/DashboardContainer";
import { useAuth } from "../../../contexts/authContext";

export const PortalProfessores: React.FC = () => {
  const history = useHistory();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      // history.push("/");
      window.alert('no user');
    }
  }, [user]);

  return (
    <DashboardContainer hasPadding>
      <h1>Portal Professores</h1>
    </DashboardContainer>
  );
};
