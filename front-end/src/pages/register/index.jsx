import React, { useContext } from "react";
import { StyledMainReg } from "./style";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/Logo_Icon_Large.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../context/userContext";
import { useForm } from "react-hook-form";
import { SchemaRegister } from "./Schema";
import { Buttons } from "../../components/Button";
import { Loading } from "../../components/Loading/Index";
import { Input } from "../../components/Input";

export const RegisterPage = () => {
  const { loading, registerUser, setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
    },
    resolver: yupResolver(SchemaRegister),
  });


  const submit = async (registerData) => {
    setLoading(true);
    setTimeout(async () => {
      const newUser = { ...registerData };
      await registerUser(newUser);
      reset();
    }, 1000);
  };

  return (
    <StyledMainReg>
      <div className="boxReg">
        <div className="headerBox">
          <img src={logo} alt="Logo Ki Contatos" />
          <div className="logo">
            <h1>Ki</h1>
            <small>Agenda</small>
          </div>
          <Link to="/">Sair</Link>
        </div>

        <form onSubmit={handleSubmit(submit)} noValidate>
          
          <h2> Cadastro </h2>
          
          <Input
            type="text"
            label="Nome"
            placeholder="Digite seu Nome completo"
            register={register("name")}
            error={errors.name}
          ></Input>

          <Input
            type="email"
            label="Email"
            placeholder="Digite seu email"
            register={register("email")}
            error={errors.email}
          ></Input>

          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua Senha"
            register={register("password")}
            error={errors.password}
          ></Input>

          {/* <Input
            type="password"
            label="Confirmação de senha"
            placeholder="Digite sua Senha novamente"
            register={register("passwordConfirm")}
            error={errors.passwordConfirm}
          ></Input> */}

          <Input
            type="text"
            label="Telefone"
            placeholder="(99) 99999-9999"
            register={register("phone")}
            error={errors.phone}
          ></Input>

          <Buttons type="submit" disabled={loading}>
            {loading ? <Loading /> : "Cadastrar"}
          </Buttons>

        </form>

      </div>
    </StyledMainReg>
  );
};
