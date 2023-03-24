import { createContext } from "react";
import { Api } from "../services/Api";
import { useNavigate } from "react-router-dom";

interface iUserContextProps {
  children: React.ReactNode;
}

interface IuserContext {
  registerUser: (data: IuserRegister) => void;
  loginUser: (data: IloginUser) => void;
  getUser: () => void;
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

export const UserContext = createContext<IuserContext>({} as IuserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();

  const registerUser = async (data: IuserRegister): Promise<void> => {
    console.log(data);
    try {
      const response = await Api.post<any>("/users", data);
      console.log(response);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const loginUser = async (data: IloginUser): Promise<void> => {
    try {
      const response = await Api.post<Idata>("/login", data);
      localStorage.setItem("@userToken:token", response.data.token);
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const getUser = async (): Promise<void> => {
    const token = localStorage.getItem("@userToken:token");

    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;

        const response = await Api.get("/users");
        console.log(response.data);
      } catch (error: any) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <UserContext.Provider value={{ registerUser, loginUser, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
