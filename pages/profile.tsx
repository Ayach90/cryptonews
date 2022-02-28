import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  Autocomplete,
  Box,
  Button,
  List,
  ListItem,
  TextField,
} from "@mui/material";
import { useAuth } from "src/contexts/AuthContext";
import { db } from "src/firebase/firebaseConfig";
import useGetCurrentCryptos from "src/hooks/useGetCurrentCyptos";
import Layout from "src/Layout";
import { Boxed } from "src/Layout/styles";
import { Crypto } from "src/types";

const fetcher = (apiUrl: string) => fetch(apiUrl).then((res) => res.json());
const Profile = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { data, error } = useSWR(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false",
    fetcher
  );
  const [currentCryptos] = useGetCurrentCryptos();
  const [cryptosUser, setCryptosUser] = useState([]);
  const [autocomplete, setAutocomplete] = useState("");

  const handleChange = (e) => {
    setAutocomplete(e.target.textContent);
  };

  useEffect(() => {
    const query = doc(db, "users", user.email);
    getDoc(query)
      .then((res) => setCryptosUser(res.data().cryptos))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const newCryptos = [];
  if (data) {
    data.forEach((item: Crypto) => {
      if (!cryptosUser.includes(item.id)) {
        newCryptos.push(item.id);
      }
    });
  }

  const addCrypto = async () => {
    if (!cryptosUser.includes(autocomplete)) {
      const newCryptosUser = [...cryptosUser, autocomplete];
      await setDoc(doc(db, "users", user.email), {
        email: user.email,
        cryptos: newCryptosUser,
      });
      setCryptosUser([...cryptosUser, autocomplete]);
      setAutocomplete("");
    }
  };

  if (!user) {
    router.push("/");
    return <></>;
  } else {
    return (
      <Layout
        title="Profile - CryptosNews"
        description="customize your profile of CryptosNews"
      >
        {!data ? (
          "Loading..."
        ) : (
          <Boxed>
            <Autocomplete
              disablePortal
              id="crypto-combo"
              options={newCryptos}
              onChange={handleChange}
              sx={{ width: 300 }}
              value={autocomplete}
              renderInput={(params) => (
                <TextField {...params} label="Cryptos" />
              )}
            />
            <Button variant="contained" onClick={addCrypto}>
              Add
            </Button>
            <List>
              {currentCryptos.map((item: string) => {
                return <ListItem key={item}>{item}</ListItem>;
              })}
            </List>
          </Boxed>
        )}
      </Layout>
    );
  }
};

export default Profile;
