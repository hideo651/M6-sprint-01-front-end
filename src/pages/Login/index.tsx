import { Link } from "react-router-dom";
import { FormLogin } from "../../components/FormLogin";

import { DivForm } from "../../styles/LoginPage Style/divform";
import { Header } from "../../styles/LoginPage Style/header";

export const LoginPage = () => {
  return (
    <>
      <Header>
        <h1>Gerenciador de Contatos</h1>
      </Header>
      <DivForm>
        <FormLogin />
        <span>Ainda não possui uma conta ?</span>
        <div className="divContainer">
          <Link className="divLink" to={"/register"}>
            Cadastre-se
          </Link>
        </div>
      </DivForm>
    </>
  );
};
