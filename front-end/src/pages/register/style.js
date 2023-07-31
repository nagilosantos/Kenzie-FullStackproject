import { styled } from "styled-components";

export const StyledMainReg = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .boxReg {
    width: 380px;
    background: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 30px;

    .headerBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
    }

    .logo {
      display: flex;
      gap: 10px;
      h1 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 28px;
        color: #f8f9fa;
      }

      small {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 28px;
        color: #ff8405;
      }
    }

    img {
      width: 60px;
    }

    a {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #ffffff;
      width: 45px;
      height: 40px;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      background: #868e96;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.6);
      }
    }

    form {
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;

      h2 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        color: #f8f9fa;
      }

      button {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 600;
        line-height: 28px;
        color: #f8f9fa;
        background-color: #ff8405;

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }
`;
