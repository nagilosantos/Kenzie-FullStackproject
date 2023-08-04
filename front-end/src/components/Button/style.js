import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  border: none;

  &:hover{
    filter:brightness( .6)
  }
`;
