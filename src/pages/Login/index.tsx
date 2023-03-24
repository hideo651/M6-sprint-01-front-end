import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";

export const LoginPage = () => {
  return (
    <>
      <h1>Eu sou a página de Login</h1>
      <FormLogin />
      <Link to={"/register"}>Registrar</Link>
    </>
  );
};
