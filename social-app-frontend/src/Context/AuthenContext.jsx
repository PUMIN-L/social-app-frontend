import { createContext, useEffect, useState } from "react";
import * as postAPI from '../apiComponent/axios.config'
export const AuthContext = createContext();


 function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const getUserById = async () => {
    try {
        const res = await postAPI.getUserById()
        console.log(res)
    } catch (error) {
        
    }
  }

  useEffect(() => {
    getUserById()
  }, [])
    //Note : api("/login")
    // setUser({ id: 1, name: "John Doe" });


  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );

};
export default AuthContextProvider;
