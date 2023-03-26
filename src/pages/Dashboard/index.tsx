import { Link } from "react-router-dom";
import { DashboardMain } from "../../components/Dashboard Components/DashboardMain";
import { HeaderRegister } from "../../styles/RegisterPage Style/header";

export const Dashboard = () => {
  function clear() {
    localStorage.clear();
  }

  return (
    <div>
      <HeaderRegister>
        <h1>
          Gerenciador de <span>Contatos</span>
        </h1>
        <div>
          <Link to={"/"} onClick={clear}>
            Sair
          </Link>
        </div>
      </HeaderRegister>
      <DashboardMain />
    </div>
  );
};
