import { Link } from "react-router-dom";
import { FormRegister } from "../../components/FormRegister";
import { DivForm } from "../../styles/LoginPage Style/divform";
import { HeaderRegister } from "../../styles/RegisterPage Style/header";

export const RegisterPage = () => {
  return (
    <div>
      <HeaderRegister>
        <h1>Gerenciador de Contatos</h1>
        <div>
          <Link to={"/"}>Voltar</Link>
        </div>
      </HeaderRegister>
      <DivForm>
        <FormRegister />
      </DivForm>
    </div>
  );
};
