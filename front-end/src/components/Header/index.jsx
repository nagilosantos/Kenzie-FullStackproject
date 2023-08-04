import { useContext } from "react";
import { Head } from "./style.js";
import logo from "../../assets/img/Logo_Icon_Small.svg";
import userImg from "../../assets/img/Usuário.png";
import { Link, useNavigate } from "react-router-dom";
import { Buttons } from "../Button/index.jsx";
import { ContactContext } from "../../context/contactContext.jsx";
import { ModalEditUser } from "../ModalEdit/index.jsx";

export const Header = ({ element }) => {
  const { toggleModalEditUser, modalEditUserOpen, setEditUserOpen } =
    useContext(ContactContext);
  const navigate = useNavigate();
  const user = element.user.name;

  return (
    <Head>
      <div className="headerBox">
        <div className="logo">
          <img src={logo} alt="Logo Ki Contatos" />
          <div className="logo">
            <h1>Ki</h1>
            <small>Agenda</small>
          </div>
        </div>
        <Link
          onClick={() => {
            localStorage.removeItem("@TOKEN");
            localStorage.removeItem("@TOKENUSER");
            element = null;
            navigate("/");
          }}
        >
          Sair
        </Link>
      </div>
      <div className="topBox">
        <div className="midBox">
          <figure>
            <img src={userImg} alt="Usuário" className="imgUser" />
          </figure>
          <h2>
            Owner: <small>{user}</small>
          </h2>
          <Buttons
            type="button"
            onClick={() => {
              toggleModalEditUser();
            }}
          >
            Editar Perfil
          </Buttons>
        </div>
      </div>
      {modalEditUserOpen && <ModalEditUser />}
    </Head>
  );
};
