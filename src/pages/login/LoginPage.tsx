import { Button, TextField, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Paper className="p-6 w-full max-w-md shadow-lg rounded-2xl">
        <Typography variant="h4" className="text-center text-green-600 font-extrabold mb-4">
          Login to EcoBin
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
          onClick={handleLogin}
        >
          Log In
        </Button>
        <Typography variant="body2" className="text-center mt-4">
          Don't have an account? 
          <span
            className="text-green-600 cursor-pointer"
            onClick={() => navigate("/signup")}
          > Sign Up</span>
        </Typography>
      </Paper>
      
    </div>
  );
};

export default LoginPage;
