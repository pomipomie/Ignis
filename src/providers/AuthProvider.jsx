import { createContext, useContext, useState } from "react"
import AuthActions from "../actions/auth";

export const AuthContext = createContext()

export function AuthProvider({children}){
  const [user, setUser] = useState(null)

  async function authenticateWithEmail(email,password){
    const response = await AuthActions.withEmailAndPassword()
    setUser(response)
  }

  return(
    <AuthContext.Provider
      value={{
        user,
        signOut,
        authenticateWithEmail,
        authenticateAnonimous,
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