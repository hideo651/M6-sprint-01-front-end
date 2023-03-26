import { useContext } from "react";
import trash02 from "../../../assets/trash02.svg";
import { UserContext } from "../../../context/UserContext";

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
  const { deleteContact } = useContext(UserContext);

  const deletar = (idContact: string) => deleteContact(idContact);

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
        <button className="btnDelete" onClick={() => deletar(data.id)}>
          <img src={trash02} alt="" />
        </button>
      </li>
    </>
  );
};
