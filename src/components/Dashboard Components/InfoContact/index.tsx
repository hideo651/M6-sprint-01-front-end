import trash02 from "../../../assets/trash02.svg";

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
        <button className="btnDelete">
          <img src={trash02} alt="" />
        </button>
      </li>
    </>
  );
};
