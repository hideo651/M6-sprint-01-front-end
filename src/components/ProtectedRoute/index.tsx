import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const ProtectedRoutes = () => {
  const { loading } = useContext(UserContext);

  const token = localStorage.getItem("@userToken:token");

  if (loading) {
    return (
      <div className="carregando">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return token ? <Outlet /> : <Navigate to={"/"} />;
};
