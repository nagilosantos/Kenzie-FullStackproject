import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  const logedUser = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();
  return <> {logedUser ? <Outlet /> : navigate("/")}</>;
};
