import { useUser } from "hooks/user";
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const location = useLocation();
  const { data, isLoading } = useUser();

  if (isLoading) return <h1>loading...</h1>;
  return data ? <Outlet /> : <Navigate replace to="/login" state={{ from: location }} />;
};

export default AuthRoute;
