import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { user, isLoading } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!user && !isLoading) navigate("/login");
    },
    [navigate, user, isLoading],
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <div className="flex h-svh w-svw items-center justify-center">
        <Spinner />
      </div>
    );

  // 4. If there IS a user, render the app
  if (user) return children;
}

export default ProtectedRoute;
