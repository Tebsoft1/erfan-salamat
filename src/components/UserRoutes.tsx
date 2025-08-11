import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function UserRoutes() {
  const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" replace />
  // }

  return (
    <div className="px-4 w-full">
      <Outlet />
    </div>
  );
}
