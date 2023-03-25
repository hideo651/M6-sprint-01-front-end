import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";
import { fakeApi } from "../../../services/FakeApi";
import { DivDashboard } from "../../../styles/DashboardPage Style/divDashboard";
import { Main } from "../../../styles/DashboardPage Style/main";
import { InfoContact } from "../InfoContact";

export const DashboardMain = () => {
  const { getUser } = useContext(UserContext);
  const user = fakeApi;

  const cliquei = () => {
    console.log("fui clicado");
  };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      <DivDashboard>
        <div className="infoUser">
          <h2>Olá, {user?.name}</h2>
          <span>{user?.email}</span>
        </div>
        <Main>
          <div className="tecnologia">
            <h3>Adicionar contatos</h3>
            <button onClick={cliquei}>+</button>
          </div>
          <ul>
            {user.contacts.length === 0 ? (
              <span className="semTec"> Nenhum contato adicionado</span>
            ) : (
              user.contacts.map((data, index) => (
                <InfoContact data={data} key={index} />
              ))
            )}
          </ul>
        </Main>
      </DivDashboard>
    </>
  );
};
