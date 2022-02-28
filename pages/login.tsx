import { useState } from "react";
import { useRouter } from "next/router";
import { Button, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import Layout from "src/Layout";
import { Boxed } from "src/Layout/styles";
import { auth } from "src/firebase/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          setError("Este usuario no existe.");
          break;
        case "auth/wrong-password":
          setError("Contraseña erronea.");
          break;
        default:
          setError("Hubo un error al intentar iniciar sesión.");
          break;
      }
    }
  };
  return (
    <Layout title="Login - CryptosNews" description="Login your account">
      <Boxed
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
        }}
      >
        <TextField
          id="email"
          label="Email"
          fullWidth
          type="email"
          variant="outlined"
          sx={{ maxWidth: "300px" }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          sx={{ maxWidth: "300px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ maxWidth: "300px" }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
      </Boxed>
    </Layout>
  );
};

export default Login;
