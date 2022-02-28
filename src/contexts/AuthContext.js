//This file is Javascript because I had too many errors in typescript. I will have to invest more time to resolve it
import { onAuthStateChanged } from "firebase/auth";
import { useState, useContext, useEffect, createContext } from "react";
import { auth } from "../firebase/firebaseConfig";

const AuthContext = createContext(null);

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const cancelSuscription = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });
    return cancelSuscription;
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>
      {loader ? "Cargando..." : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider, useAuth };
