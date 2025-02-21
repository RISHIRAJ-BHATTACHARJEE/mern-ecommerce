import { useAuth } from "@/hooks/useAuth";
import { Spinner } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center !w-full !h-screen">
        <Spinner size="xl"/>
      </div>
    )
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
