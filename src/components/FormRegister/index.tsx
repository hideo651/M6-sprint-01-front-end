import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

interface IdataRegister {
  name: string;
  email: string;
  cellphone: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .email("Deve ser um email válido")
    .required("Email obrigatório"),
  cellphone: yup.string().required("Informe um número para contato"),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 carateres")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos um número")
    .matches(/(\W)|_/, "Deve conter um caracter especial")
    .required("Senha obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "A senha não é igual a anterior")
    .required("As senhas devem ser iguais"),
});

export const FormRegister = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdataRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <h1>Registro de usuário</h1>

      <form onSubmit={handleSubmit(registerUser)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite aqui o seu nome"
          className="inputRegister"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Digite aqui o seu email"
          className="inputRegister"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="cellphone">Telefone</label>
        <input
          type="text"
          id="cellphone"
          placeholder="Digite aqui o seu telefone"
          className="inputRegister"
          {...register("cellphone")}
        />
        <p>{errors.cellphone?.message}</p>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="Digite aqui a sua senha"
          className="inputRegister"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Digite novamente a sua senha"
          className="inputRegister"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <button>Cadastrar</button>
      </form>
    </>
  );
};
