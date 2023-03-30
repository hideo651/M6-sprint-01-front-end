import { useContext } from "react";

import { UserContext } from "../../../context/UserContext";
import { BiNews } from "react-icons/bi";

interface IDataContact {
  data: {
    id: string;
    name: string;
    email: string;
    cellphone: string;
    isActive: boolean;
    createdAt: string;
  };
  key: number;
}

export const InfoContact = ({ data }: IDataContact) => {
  const { setModalEdit, setContactId } = useContext(UserContext);

  const openModal = async () => {
    setModalEdit(true);
    setContactId(data.id);
    console.log(data.id);
  };

  return (
    <>
      <li>
        <div>
          <div className="divTitle">
            <h3>Nome: {data.name}</h3>
          </div>
          <p>Telefone: {data.cellphone}</p>
          <p>E-mail: {data.email}</p>
          <div></div>
        </div>
        <button className="btnDelete" onClick={openModal}>
          <BiNews />
        </button>
      </li>
    </>
  );
};
