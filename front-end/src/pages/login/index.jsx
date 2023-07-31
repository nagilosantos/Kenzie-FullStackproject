import React, { useContext } from "react";
import logo from "../../assets/img/Logo_Icon_Large.svg";
import { StyledMain } from "./style.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../components/Input";
import { Buttons } from "../../components/Button";
import { Loading } from "../../components/Loading/Index";
import { UserContext } from "../../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import { SchemaMainLogin } from "./schema";

export const LoginPage = () => {
  const { loading, createLogin, setLoading } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(SchemaMainLogin),
  });

  const submit = async (loginData) => {
    setLoading(true);
    setTimeout(async () => {
      await createLogin(loginData);

      if (localStorage.getItem("@TOKEN")) {
        setTimeout(() => {
          navigate("/Dashboard");
        }, 3000);
      } else {
        setTimeout(() => {
          navigate("/");
        }, 3000);
        reset();
      }
    }, 1000);
  };

  return (
    <StyledMain>
      <div className="box">
        <img src={logo} alt="Logo Ki Contatos" />
        <div>
          <h1>Ki</h1>
          <small>Agenda</small>
        </div>
        <p className="subtitle">
          Organize seus <small>contatos</small> de forma <small>prática</small>!
        </p>

        <form onSubmit={handleSubmit(submit)} noValidate>
          <h2>Login</h2>
          <Input
            type="email"
            label="email"
            placeholder="Digite seu email"
            register={register("email")}
            error={errors.email}
          ></Input>
          <Input
            type="password"
            label="senha"
            placeholder="Digite sua senha"
            register={register("password")}
            error={errors.password}
          />
          <Buttons type="submit" disabled={loading}>
            {loading ? <Loading /> : "Entrar"}
          </Buttons>
        </form>
        <div className="boxRegister">
          <h3> Não possui Cadastro </h3>
          <Link to="/register"> Cadastrar </Link>
        </div>
      </div>
    </StyledMain>
  );
};
