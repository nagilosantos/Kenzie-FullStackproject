import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services";
import { UserContext } from "./userContext";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const { user, getUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  //   contact modal
  const [contact, setContact] = useState(null);
  const [modalEditOpen, setEditOpen] = useState(false);
  const [modalContactsOpen, setContactsOpen] = useState(false);
  const [modalDeleteContact, setmodalDeleteContact] = useState(null);
  //   user modal
  const [modalEditUserOpen, setEditUserOpen] = useState(false);
  const [modalDeleteUserOpen, setDeleteUserOpen] = useState(false);

  const navigate = useNavigate();

  const toggleModaladdContact = () => {
    setContactsOpen(!modalContactsOpen);
  };

  const toggleModalEditContact = () => {
    setEditOpen(!modalEditOpen);
  };

  const toggleModalDeleteContact = () => {
    setmodalDeleteContact(!modalDeleteContact);
  };

  const toggleModalEditUser = () => {
    setEditUserOpen(!modalEditUserOpen);
  };

  const toggleModalDeleteUser = () => {
    setDeleteUserOpen(!modalDeleteUserOpen);
  };

  const createContact = async (contactData) => {
    try {
      setLoading(true);
      await api.post("/contacts", contactData);

      getUser();

      toggleModaladdContact();

      toast.success("Contato Criado com sucesso!");
    } catch (error) {
      toast.error("Ocorreu um erro!");
    } finally {
      setLoading(false);
    }
  };

  const updateContact = async (contactData) => {
    try {
      setLoading(true);

      await api.patch(`/contacts/${contactData.id}`, contactData);

      getUser();

      toggleModalEditContact();

      toast.success("Alteração Realizada!");
    } catch (error) {
      toast.error("Ocorreu um erro!!");
    } finally {
      setLoading(false);
    }
  };

  const removeContact = async (contactId) => {
    try {
      setLoading(true);
      await api.delete(`/contacts/${contactId}`);
      getUser();
      toggleModalDeleteContact();
      toast.info("Contato removido!");
    } catch (error) {
      toast.error("Ocorreu um erro!!");
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (userData) => {
    try {
      setLoading(true);

      await api.patch(`/user/${userData.id}`, userData);
      getUser();

      toggleModalEditUser(false);

      toast.success("Perfil atualizado!");
    } catch (error) {
      toast.error("Ocorreu um erro!!");
    } finally {
      setLoading(false);
    }
  };

  const deleteProfile = async (userData) => {
    try {
      setLoading(true);

      await api.delete(`/user/${id}`);

      getUser();

      toast.info("Perfil deletado!");

      localStorage.removeItem("@TOKENUSER");
      localStorage.removeItem("@TOKEN");

      navigate("/");
    } catch (error) {
      toast.error("Ocorreu um erro!!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        loading,
        setLoading,
        toggleModaladdContact,
        toggleModalEditContact,
        toggleModalDeleteContact,
        toggleModalEditUser,
        toggleModalDeleteUser,
        createContact,
        updateContact,
        removeContact,
        updateProfile,
        deleteProfile,
        setEditUserOpen,
        modalEditUserOpen,
        modalEditOpen,
        modalContactsOpen,
        modalDeleteContact,
        modalDeleteUserOpen,
        setEditOpen,
        setContactsOpen,
        setmodalDeleteContact,
        setEditUserOpen,
        setDeleteUserOpen,
        contact,
        setContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
