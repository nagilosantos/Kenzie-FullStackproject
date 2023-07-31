import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@mui/material";
import { Buttons } from "../Button";
import { Input } from "../Input";
import { Schema } from "./schema";
import { SectionModalEdit } from "./style";
import { UserContext } from "../../context/userContext";
import { ContactContext } from "../../context/contactContext";

export const ModalEditUser = () => {
  const { user } = useContext(UserContext);
  const {
    loading,
    updateProfile,
    deleteProfile,
    toggleModalEditUser,
    modalEditUserOpen,
  } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    resolver: yupResolver(Schema),
  });

  async function submit(formdata) {
    await updateProfile(formdata);
    reset();
  }

  async function submitDel(formdata) {
    await deleteProfile(formdata.id);
    reset();
  }

 
  const handleCloseModal = () => {
    toggleModalEditUser(false);
  };

  return (
    <>
      {modalEditUserOpen && (
        <Modal open={modalEditUserOpen} onClose={handleCloseModal}>
          <SectionModalEdit>
            <div className="modalContent">
              <div className="modal">
                <h2>Editar Perfil</h2>
                <Buttons type="button" onClick={() => handleCloseModal}>
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
                    Editar
                  </Buttons>
                  <Buttons
                    type="button"
                    className="btnDelete"
                    disabled={loading}
                    onClick={() => submitDel(user)}
                  >
                    Excluir
                  </Buttons>
                </div>
              </form>
            </div>
          </SectionModalEdit>
        </Modal>
      )}
    </>
  );
};
