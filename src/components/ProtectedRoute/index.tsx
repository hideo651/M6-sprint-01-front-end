import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="carregando">
        <h1>Carregando</h1>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to={"/"} />;
};
