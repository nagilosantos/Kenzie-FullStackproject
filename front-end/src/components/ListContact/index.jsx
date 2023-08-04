import { useContext } from "react";
import { Buttons } from "../Button";
import { LiContact } from "./style.js";
import contactImg from "../../assets/img/phone_2.png";

import { ContactContext } from "../../context/contactContext";
import { ModalEditContact } from "../ModalContact/update";

export const ListContact = ({ element }) => {
  const { modalEditOpen, setContact, toggleModalEditContact } =
    useContext(ContactContext);
  return (
    <>
      <LiContact
        key={element.id}
        onClick={() => {
          toggleModalEditContact();
          setContact(element);
        }}
      >
        <Buttons type="button">
          <img src={contactImg} alt="contactImg" />
          <h3>{element.name}</h3>
          <span>{element.phone}</span>
        </Buttons>
      </LiContact>
      {modalEditOpen && <ModalEditContact />}
    </>
  );
};
