import { useContext, useEffect } from "react";
import { Iuser, UserContext } from "../../../context/UserContext";
import { DivDashboard } from "../../../styles/DashboardPage Style/divDashboard";
import { Main } from "../../../styles/DashboardPage Style/main";
import { ModalComponent } from "../../Modal/modalCreate";
import { InfoContact } from "../InfoContact";

export const DashboardMain = () => {
  const { modalVisible, setModalVisible, user, contactExist } =
    useContext(UserContext);

  const openModal = () => setModalVisible(true);

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
            <button onClick={openModal}>+</button>
          </div>
          <ul>
            {contactExist.length === 0 ? (
              <span className="semTec"> Nenhum contato adicionado</span>
            ) : (
              contactExist.map((data, index) => (
                <InfoContact data={data} key={index} />
              ))
            )}
          </ul>
        </Main>
      </DivDashboard>
      {modalVisible ? <ModalComponent /> : <></>}
    </>
  );
};
