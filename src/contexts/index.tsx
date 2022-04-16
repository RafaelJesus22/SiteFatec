import { AuthProvider } from "./authContext";
import { LoadingProvider } from "./loadingContent";

export const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <LoadingProvider>
        {children}
      </LoadingProvider>
    </AuthProvider>
  );
};