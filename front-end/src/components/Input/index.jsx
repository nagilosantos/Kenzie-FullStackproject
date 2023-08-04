import {  StyledFieldSet, StyledTextField } from "./style";

export const Input = ({ label, type, register, placeholder, error }) => {
  return (
    <StyledFieldSet>
      <StyledTextField
        type={type}
        label={label}
        placeholder={placeholder}
        {...register}
      />
      {error ? <p>{error.message}</p> : null}
    </StyledFieldSet>
  );
};
