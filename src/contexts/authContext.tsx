import { createContext, useContext, useEffect, useState } from "react";
import { User } from 'firebase/auth'

interface AuthContextProps {
  user: User | null;
  onChangeUser: (user: User | null) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log('user no auth provider', user);
  }, [user]);

  const onChangeUser = (user: User | null) => {
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{user, onChangeUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { onChangeUser, user } = useContext(AuthContext);

  return { user, onChangeUser };
}