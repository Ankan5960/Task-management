import { Button, TextField, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log("Signing up with", name, email, password);
    // Add authentication logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Paper className="p-6 w-full max-w-md shadow-lg rounded-2xl">
        <Typography
          variant="h4"
          className="text-center text-green-600 font-bold mb-4"
        >
          Sign Up for EcoBin
        </Typography>
        <TextField
          label="Full Name"
          type="text"
          fullWidth
          margin="normal"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography variant="body2" className="text-center mt-4">
          Already have an account?
          <span
            className="text-green-600 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            {" "}
            Log In
          </span>
        </Typography>
      </Paper>
    </div>
  );
};

export default SignupPage;
