import { Navigate, useLocation } from "react-router-dom";
import { ROUTE_NAMES } from "src/constants";
import { useAuth } from "src/hooks/auth";

export function Protect({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth?.token)
    return (
      <Navigate to={ROUTE_NAMES.LOGIN} state={{ from: location }} replace />
    );

  return children;
}
