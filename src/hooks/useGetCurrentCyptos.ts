import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "src/firebase/firebaseConfig";
import { useAuth } from "src/contexts/AuthContext";

const useGetCurrentCryptos = () => {
  const [currentCryptos, setCurrentCryptos] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const query = doc(db, "users", user.email);

    const unsub = onSnapshot(doc(db, "users", user.email), (doc) => {
      setCurrentCryptos(doc.data().cryptos);
    });

    return unsub;
  }, []);
  return [currentCryptos];
};

export default useGetCurrentCryptos;
