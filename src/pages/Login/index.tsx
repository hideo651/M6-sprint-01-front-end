import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <h1>Eu sou a página de Login</h1>
      <Link to={"/register"}>Registrar</Link>
    </>
  );
};
