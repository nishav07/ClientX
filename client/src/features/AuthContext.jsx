import { createContext, useContext, useEffect, useState } from "react";
import api from "../helperFx/api.js"; 

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if(!token){
        setLoading(false);
        return
      }
      try {
        const { data } = await api.get("/dashboard");
        setUser(data.data);
      } catch (err) {
        console.log("auth context se err aata hua ",err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
