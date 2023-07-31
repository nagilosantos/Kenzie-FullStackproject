import React, { useContext } from "react";
import { Buttons } from "../Button";
import { LiContact } from "./style.js";
import contactImg from "../../assets/img/phone_2.png";

export const ListContact = ({ element }) => {
  return (
    <>
      <LiContact
        key={element.id}
        // onClick={() => {
        //   closeOpenModalEdit();
        //   setCurrentTecnology(element);
        // }}
      >
        <Buttons type="button">
          <img src={contactImg} alt="contactImg" />
          <h3>{element.name}</h3>
          <span>{element.phone}</span>
        </Buttons>
      </LiContact>
      {/* {openModalEdit && <ModalEditTecnology />} */}
    </>
  );
};
