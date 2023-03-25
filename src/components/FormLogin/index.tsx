import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

interface IuserLogin {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const FormLogin = () => {
  const teste = (data: IuserLogin) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IuserLogin>({ resolver: yupResolver(schema) });

  const { loginUser } = useContext(UserContext);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loginUser)}>
        <label htmlFor="email">Email</label>
        <input
          className="inputLogin"
          id="email"
          type="email"
          placeholder="Digite o email de usuário..."
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Senha</label>
        <input
          className="inputLogin"
          id="password"
          type="password"
          placeholder="Digite a senha de usuário..."
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
