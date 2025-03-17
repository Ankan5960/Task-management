import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Error404Page() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button
          variant="primary_green"
          className="mt-6"
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
}
