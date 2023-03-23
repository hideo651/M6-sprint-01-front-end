import { createContext } from "react";
import { Api } from "../services/Api";

interface iUserContextProps {
  children: React.ReactNode;
}

interface IuserContext {
  registerUser: (data: IuserRegister) => void;
}

interface IuserRegister {
  name: string;
  email: string;
  password: string;
  cellphone: string;
}

export const UserContext = createContext<IuserContext>({} as IuserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const registerUser = async (data: IuserRegister): Promise<void> => {
    console.log(data);
    try {
      const response = await Api.post<any>("/users", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
