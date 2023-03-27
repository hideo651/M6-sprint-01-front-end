import { Modal } from "../../styles/Modal Style/modal";
import * as yup from "yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../context/UserContext";

export interface IContactEdit {
  name?: string;
  email?: string;
  cellphone?: string;
}

const schema = yup.object({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  cellphone: yup.string().notRequired(),
});

export const ModalEdit = () => {
  const { setModalEdit, updateContact, deleteContact, contactId } =
    useContext(UserContext);

  const closeModal = () => setModalEdit(false);

  const infoModal = (data: IContactEdit) => {
    if (data.cellphone?.length === 0) {
      delete data.cellphone;
    }

    if (data.name?.length === 0) {
      delete data.name;
    }

    if (data.email?.length === 0) {
      delete data.email;
    }
    updateContact(data);
    console.log("info");
  };

  const deleteInfo = () => {
    deleteContact(contactId);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactEdit>({ resolver: yupResolver(schema) });

  return (
    <Modal>
      <div className="hidden">
        <div className="modal">
          <div className="modalCorpoEdit">
            <div className="modalTop">
              <h3>Alterar Contato</h3>
              <button className="btnFechar" onClick={closeModal}>
                X
              </button>
            </div>
            <form onSubmit={handleSubmit(infoModal)}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Nome do contato"
                className="inputEdit"
                {...register("name")}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="Email do contato"
                className="inputEdit"
                {...register("email")}
              />
              <label htmlFor="cellphone">Telefone</label>
              <input
                type="text"
                id="cellphone"
                placeholder="Número de contato"
                className="inputEdit"
                {...register("cellphone")}
              />

              <button type="submit" className="btnEditar">
                Salvar alterações
              </button>
            </form>
            <button className="editar" onClick={deleteInfo}>
              Excluir
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
