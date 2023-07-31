import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { ContactProvider } from "../context/contactContext";
import { RegisterPage } from "../pages/register";
import { PageCrash } from "../pages/404page";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { HomePage } from "../pages/dashboard";

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/DashBoard" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <ContactProvider>
              <HomePage />
            </ContactProvider>
          }
        />
      </Route>
      <Route path="*" element={<PageCrash />} />
    </Routes>
  );
};
