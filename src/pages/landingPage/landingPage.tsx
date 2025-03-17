import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-4xl font-bold text-green-600">Welcome to EcoBin</h1>
        <p className="text-gray-600 mt-2">
          Join us in making the world a cleaner place by managing waste
          efficiently.
        </p>
        <div className="flex gap-4 mt-6 justify-between">
          <Button
            variant="primary_blue"
            color="primary"
            onClick={() => navigate("/login")}
          >
            Log In
          </Button>
          <Button
            variant="outline"
            color="secondary"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

