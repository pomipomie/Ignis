/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react"
import AuthActions from "../actions/auth";

export const AuthContext = createContext();

export function AuthProvider({children}){
  const [user, setUser] = useState(null)
  const [authError,setAuthError] = useState("");

  return(
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authError,
        setAuthError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  const context = useContext(AuthContext);
  return context;
}

export default AuthProvider;