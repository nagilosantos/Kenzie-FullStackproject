import React from "react";
import { StyledButton } from "./style";

export const Buttons = ({ type, onClick, children, disabled }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
