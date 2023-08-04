import { useContext } from "react";
import { Header } from "../../components/Header";
import { StyledContainer } from "./style";
import { Buttons } from "../../components/Button";
import addnewContact from "../../assets/img/Add_Phone.png";
import { ListContact } from "../../components/ListContact";
import { UserContext } from "../../context/userContext";
import { ContactContext } from "../../context/contactContext";
import { ModalCreateContact } from "../../components/ModalContact/create";


export const HomePage = () => {
  const { user } = useContext(UserContext);
  const { toggleModaladdContact, modalContactsOpen } = useContext(ContactContext);

  return (
    <>
      <Header element={user} />
      <StyledContainer>
        <div className="headPage">
          <h2>Lista de Contatos</h2>
          <Buttons type="button" onClick={() => toggleModaladdContact()}>
            <img src={addnewContact} alt="Add Contact" />
          </Buttons>
        </div>
        <div className="Contatcs">
          {user.contacts?.map((element) => (
            <ListContact key={element.id} element={element} />
          ))}
        </div>
      </StyledContainer>
      {modalContactsOpen && <ModalCreateContact />}
    </>
  );
};
