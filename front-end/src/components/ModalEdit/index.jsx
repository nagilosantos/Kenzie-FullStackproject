import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Schema } from "./schema";
import { SectionModalEdit } from "./style";
import { UserContext } from "../../context/userContext";
import { ContactContext } from "../../context/contactContext";
import { Loading } from "../Loading/Index";
import { DeleteUserModal } from "./ModalDeleteUser";
import { Buttons } from "../Button";

export const ModalEditUser = () => {
  const { user } = useContext(UserContext);
  const {
    loading,
    updateProfile,
    toggleModalDeleteUser,
    toggleModalEditUser,
    modalEditUserOpen,
    modalDeleteUserOpen,
  } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: user.user.id,
      name: user.user.name,
      email: user.user.email,
    },
    resolver: yupResolver(Schema),
  });

  async function submit(formdata) {
    await updateProfile(formdata);
    reset();
  }

  return (
    <>
        <SectionModalEdit>
          <div className="modalContent">
            <div className="modal">
              <h2>Editar Perfil</h2>
              <Buttons
                type="button"
                onClick={() => {
                  toggleModalEditUser();
                }}
              >
                X
              </Buttons>
            </div>
            <form onSubmit={handleSubmit(submit)} noValidate>
              <Input
                type="email"
                label="email"
                placeholder="Digite seu email"
                register={register("email")}
                error={errors.email}
              ></Input>
              <Input
                type="name"
                label="nome"
                placeholder="Digite seu nome"
                register={register("name")}
                error={errors.name}
              />
              <div className="boxBtn">
                <Buttons type="submit" className="btnEdit" disabled={loading}>
                  {loading ? <Loading /> : "Editar"}
                </Buttons>
                <Buttons
                  type="button"
                  className="btnDelete"
                  disabled={loading}
                  onClick={() => toggleModalDeleteUser()}
                >
                  Excluir
                </Buttons>
              </div>
            </form>
          </div>
        </SectionModalEdit>
      {modalDeleteUserOpen && <DeleteUserModal />}
    </>
  );
};
