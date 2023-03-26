import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoute";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
