import { createContext, PropsWithChildren, useContext, useState } from "react";

enum statesOfLogin {
  "checking",
  "login",
  "closed",
}

interface modelAuth {
  state: statesOfLogin;
  loginEmailWithPassword: (email: string, password: string) => void;
  logoutOfAccount: () => void;
}

export const AuthContext = createContext({} as modelAuth);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvides = ({ children }: PropsWithChildren) => {
  const [state, setstate] = useState(statesOfLogin.checking);
  const loginEmailWithPassword = (email: string, password: string) => {
    setstate(statesOfLogin.login);
  };
  const logoutOfAccount=()=>{
    setstate(statesOfLogin.closed)
  }
    return (
        <AuthContext.Provider
          value={{
            state: state,
            loginEmailWithPassword,
            logoutOfAccount,
          }}
        >
          {children}
        </AuthContext.Provider>
  );
};
