import { createContext, useContext, useState } from "react";
import { Portal } from "../components/organisms/Portal";

type ShowLoadingType = {
  message?: string;
};

interface LoadingContextProps {
  showLoading: (props?: ShowLoadingType) => void;
  hideLoading: () => void;
}

const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps);

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const showLoading = (props?: ShowLoadingType) => {
    setMessage(props?.message || "Carregando");  
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
    setMessage("");
  };

  return (
    <LoadingContext.Provider value={{showLoading, hideLoading}}>
      {loading && <Portal text={message} visible={loading} />}
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const { hideLoading, showLoading } = useContext(LoadingContext);

  return { hideLoading, showLoading };
};