import { useContext } from "react";
import { Buttons } from "../../../Button";
import { SectionModalDeleteContact } from "./style";
import { ContactContext } from "../../../../context/contactContext";

export const DeleteContact = () => {
  const {
    contact,
    toggleModalDeleteContact,
    removeContact,
    toggleModalEditContact,
  } = useContext(ContactContext);

  const submitDel = async (data) => {
    await removeContact(data.id);
    toggleModalEditContact();
    reset();
  };
  return (
    <SectionModalDeleteContact>
      <div className="modalContent">
        <div className="modal">
          <h2>Deletar Perfil</h2>
          <Buttons
            type="button"
            onClick={() => {
              toggleModalDeleteContact();
            }}
          >
            X
          </Buttons>
        </div>
        <div className="TitleDelete">
          <h3>Tem certeza que deseja deletar o contato?</h3>
          <div className="buttonsDeleteModal">
            <Buttons
              type="button"
              onClick={() => {
                submitDel(contact);
              }}
            >
              Deletar Perfil
            </Buttons>
            <Buttons
              type="button"
              onClick={() => {
                toggleModalDeleteContact();
              }}
            >
              Cancelar
            </Buttons>
          </div>
        </div>
      </div>
    </SectionModalDeleteContact>
  );
};
