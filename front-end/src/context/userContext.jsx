import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newLoading, setNewLoading] = useState(true);
  const navigate = useNavigate();

  const createLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      localStorage.setItem("@TOKENUSER", response.data.token);
      const { token, user: userResponse } = response.data;
      setUser(userResponse);
      localStorage.setItem("@TOKEN", token);
      toast.success("Login relizado!");

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      getUser();

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      toast.error("Usuário não encontrado!");
    } finally {
      setLoading(false);
    }
  };

  const getUser = async () => {
    const verifyToken = localStorage.getItem("@TOKEN");

    if (!verifyToken) {
      setNewLoading(false);
      return;
    }

    api.defaults.headers.common["Authorization"] = `Bearer ${verifyToken}`;

    try {
      const response = await api.get(`/user/${verifyToken}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setNewLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const registerUser = async (userData) => {
    try {
      setLoading(true);

      await api.post("/user", userData);
      
      toast.success("Cadastro relizado!");

      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (error) {
      toast.error("Erro! verifique os dados inseridos!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        createLogin,
        user,
        setUser,
        newLoading,
        setNewLoading,
        registerUser,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
