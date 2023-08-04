import { useContext } from "react";
import { SectionModalDelete } from "./style";
import { ContactContext } from "../../../context/contactContext";
import { Buttons } from "../../Button";
import { UserContext } from "../../../context/userContext";

export const DeleteUserModal = () => {
  const { toggleModalDeleteUser, deleteProfile } = useContext(ContactContext);
  const { user } = useContext(UserContext);

  async function submitDel(formdata) {
    await deleteProfile(formdata.id);
    reset();
  }
  return (
    <SectionModalDelete>
      <div className="modalContent">
        <div className="modal">
          <h2>Deletar Perfil</h2>
          <Buttons
            type="button"
            onClick={() => {
              toggleModalDeleteUser();
            }}
          >
            X
          </Buttons>
        </div>
        <div className="TitleDelete">
          <h3>Tem certeza que deseja deletar o perfil?</h3>
          <div className="buttonsDeleteModal">
            <Buttons
              type="button"
              onClick={() => {
                submitDel(user.user);
              }}
            >
              Deletar Perfil
            </Buttons>
            <Buttons
              type="button"
              onClick={() => {
                toggleModalDeleteUser();
              }}
            >
              Cancelar
            </Buttons>
          </div>
        </div>
      </div>
    </SectionModalDelete>
  );
};
