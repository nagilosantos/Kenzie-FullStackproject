import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { SectionModalCreateContact } from "./style";
import { Input } from "../../Input";
import { Buttons } from "../../Button";
import { SchemaCreateContact } from "./schema";
import { ContactContext } from "../../../context/contactContext";
import { Loading } from "../../Loading/Index";

export const ModalCreateContact = () => {
  const { toggleModaladdContact, loading, createContact } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: yupResolver(SchemaCreateContact),
  });

  const submit = async (data) => {
    const contact = { ...data };
    await createContact(contact);
    reset();
  };

  return (
    <SectionModalCreateContact>
      <div className="modalContent">
        <div className="modal">
          <h2>Criar novo contato</h2>
          <Buttons
            type="button"
            onClick={() => {
              toggleModaladdContact();
            }}
          >
            X
          </Buttons>
        </div>
        <form onSubmit={handleSubmit(submit)}>
          <h4>Adicione um contato a sua Agenda</h4>
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
          <div className="buttonsCreate">
            <Buttons type="submit" disabled={loading}>
              {loading ? <Loading /> : "Criar Contato"}
            </Buttons>
            <Buttons
              type="button"
              onClick={() => {
                toggleModaladdContact();
              }}
              disabled={loading}
            >
              Cancelar
            </Buttons>
          </div>
        </form>
      </div>
    </SectionModalCreateContact>
  );
};
