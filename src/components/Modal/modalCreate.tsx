import * as yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "../../styles/Modal Style/modal";
import { IcontactCreate, UserContext } from "../../context/UserContext";

const schema = yup.object({
  name: yup.string().required("Informe o nome do contato"),
  email: yup
    .string()
    .email("Informe um email válido")
    .required("Informe um email"),
  cellphone: yup.string().required("Informe o telefone do contato"),
});

export const ModalComponent = () => {
  const { setModalVisible, registerContact } = useContext(UserContext);

  const closeModal = () => setModalVisible(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IcontactCreate>({ resolver: yupResolver(schema) });

  return (
    <Modal>
      <div className="hidden">
        <div className="modal">
          <div className="modalCorpo">
            <div className="modalTop">
              <h3>Cadastrar Contato</h3>
              <button className="btnFechar" onClick={closeModal}>
                X
              </button>
            </div>
            <form onSubmit={handleSubmit(registerContact)}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Nome do contato"
                {...register("name")}
              />
              <p>{errors.name?.message}</p>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email do contato"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
              <label htmlFor="cellphone">Telefone</label>
              <input
                type="text"
                id="cellphone"
                placeholder="Telefone do contato"
                {...register("cellphone")}
              />
              <p>{errors.cellphone?.message}</p>
              <button type="submit" className="btnCadastrar">
                Cadastrar contato
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};
