import { styled } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 80%;
  height: 100vh;
  margin: auto;
  

  .headPage {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 28px;
      color: #ff8405;
    }

    button{
        background-color: transparent;
    }
  }

  .Contatcs{
    border: #ff8405 2px solid;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }
`;
