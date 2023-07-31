import styled from "styled-components";
import { TextField } from "@mui/material";

export const StyledFieldSet = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 8px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #828282;

  :hover {
    outline: none;
  }

  :focus {
    outline: none;
  }

  p:nth-child(2) {
    color: red;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 17px;
    text-align: left;
    margin-top: -10px;
  }

  .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root {
    color: #f8f9fa;
  }

  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    color: #828282;
  }
`;

export const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "none",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(245, 245, 245, 0.85)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(245, 245, 245, 0.85)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(245, 245, 245, 0.85)",
    },
  },
});
