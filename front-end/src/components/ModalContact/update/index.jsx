import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SectionModalEditContact } from "./style";
import { ContactContext } from "../../../context/contactContext";
import { SchemaEditContact } from "./schema";
import { Buttons } from "../../Button";
import { Input } from "../../Input";
import { Loading } from "../../Loading/Index";
import { DeleteContact } from "./deleteConfirmationModal";

export const ModalEditContact = () => {
  const {
    toggleModalEditContact,
    toggleModalDeleteContact,
    contact,
    updateContact,
    loading,
    modalDeleteContact,
  } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    },
    resolver: yupResolver(SchemaEditContact),
  });

  const submit = async (data) => {
    const contact = { ...data };
    await updateContact(contact);
    reset();
  };

  return (
    <SectionModalEditContact>
      <div className="modalContent">
        <div className="modal">
          <h2>Editar Contato</h2>
          <Buttons
            type="button"
            onClick={() => {
              toggleModalEditContact();
            }}
          >
            X
          </Buttons>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <h4>Edição de contato</h4>
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
          ></Input>
          <Input
            type="text"
            label="Telefone"
            placeholder="(99)9999-9999"
            register={register("phone")}
            error={errors.phone}
          ></Input>
          <div className="buttonsEdit">
            <Buttons type="submit" disabled={loading}>
              {loading ? <Loading /> : "Editar Contato"}
            </Buttons>
            <Buttons
              type="button"
              onClick={() => {
                toggleModalDeleteContact();
              }}
              disabled={loading}
            >
              Delete
            </Buttons>
          </div>
        </form>
      </div>
      {modalDeleteContact && <DeleteContact />}
    </SectionModalEditContact>
  );
};
