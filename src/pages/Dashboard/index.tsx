import { Link } from "react-router-dom";
import { DashboardMain } from "../../components/Dashboard Components/DashboardMain";
import { HeaderRegister } from "../../styles/RegisterPage Style/header";

export const Dashboard = () => {
  return (
    <div>
      <HeaderRegister>
        <h1>Eu sou a Dashboard</h1>
        <div>
          <Link to={"/"}>Sair</Link>
        </div>
      </HeaderRegister>
      <DashboardMain />
    </div>
  );
};
