import { createContext, useEffect, useState } from "react";
import { Api } from "../services/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IContactEdit } from "../components/Modal/modalEdit";

interface iUserContextProps {
  children: React.ReactNode;
}

interface IuserContext {
  registerUser: (data: IuserRegister) => void;
  loginUser: (data: IloginUser) => void;

  registerContact: (data: IcontactCreate) => void;
  deleteContact: (data: string) => void;
  updateContact: (data: IContactEdit) => void;

  setModalVisible: (data: boolean) => void;
  setModalEdit: (data: boolean) => void;
  setContactId: (data: string) => void;
  modalVisible: boolean;
  modalEdit: boolean;
  user: Iuser | undefined;
  contactExist: Icontacts[];
  loading: boolean;
  contactId: string;
}
export interface Iuser {
  id: string;
  name: string;
  email: string;
  cellphone: string;
  createdAt: string;
  contacts: [Icontacts];
}

export interface Icontacts {
  id: string;
  name: string;
  email: string;
  cellphone: string;
  isActive: boolean;
  createdAt: string;
}

interface IuserRegister {
  name: string;
  email: string;
  password: string;
  cellphone: string;
}

interface IloginUser {
  email: string;
  password: string;
}

interface Idata {
  token: string;
}

export interface IcontactCreate {
  name: string;
  email: string;
  cellphone: string;
}

export const UserContext = createContext<IuserContext>({} as IuserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [user, setUser] = useState<Iuser | undefined>(undefined);
  const [contactExist, setContactExist] = useState([] as Icontacts[]);
  const [contactId, setContactId] = useState("");
  const [update, setUpdate] = useState<number>(1);

  useEffect(() => {
    const getUser = async (): Promise<void> => {
      const token = localStorage.getItem("@userToken:token");

      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          const response = await Api.get("/users");
          setUser(response.data);
          setContactExist(response.data.contacts);
        } catch (error: any) {
          console.log(error.response.data);
        }
      }
      setLoading(false);
    };
    getUser();
  }, [loading, update]);

  const registerUser = async (data: IuserRegister): Promise<void> => {
    try {
      const response = await Api.post<any>("/users", data);
      navigate("/");
      toast.success("Cadastro realizado com sucesso", { autoClose: 2000 });
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
      console.log(error.response.data);
    }
  };

  const loginUser = async (data: IloginUser): Promise<void> => {
    try {
      const response = await Api.post<Idata>("/login", data);
      localStorage.setItem("@userToken:token", response.data.token);
      navigate("/dashboard");
      setUpdate(update + 1);
      toast.success("Seja bem vindo!", { autoClose: 2000 });
    } catch (error: any) {
      console.log(error.response.data);
      toast.error(`${error.response.data.message}`);
    }
  };

  const registerContact = async (data: IcontactCreate) => {
    const token = localStorage.getItem("@userToken:token");

    try {
      Api.defaults.headers.authorization = `Bearer ${token}`;

      const response = await Api.post("/contact", data);

      const newContact = {
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
        cellphone: response.data.cellphone,
        isActive: response.data.isActive,
        createdAt: response.data.createdAt,
      };

      const newData = [...contactExist, newContact];

      setContactExist(newData);
      setModalVisible(false);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const deleteContact = async (contactId: string) => {
    const token = localStorage.getItem("@userToken:token");

    try {
      Api.defaults.headers.authorization = `Bearer ${token}`;

      const response = await Api.delete(`/contact/${contactId}`);
      toast.success("Contato removido", { autoClose: 2000 });

      const newListContact = contactExist?.filter(
        (contact: Icontacts) => contact.id !== contactId
      );
      setContactExist(newListContact);
      setModalEdit(false);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`, { autoClose: 2000 });
      console.log(error.response.data.message);
    }
  };

  const updateContact = async (data: IContactEdit) => {
    const token = localStorage.getItem("@userToken:token");

    try {
      Api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await Api.patch(`/contact/${contactId}`, data);
      setUpdate(update + 1);
      setModalEdit(false);
    } catch (error: any) {
      toast.error(`${error.response.data.message}`, { autoClose: 2000 });
      console.log(error.response.data.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        setModalVisible,
        modalVisible,
        user,
        contactExist,
        registerContact,
        loading,
        deleteContact,
        setModalEdit,
        modalEdit,
        contactId,
        setContactId,
        updateContact,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
