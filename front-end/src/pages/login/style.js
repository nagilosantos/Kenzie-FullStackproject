import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 369px;
    background: #212529;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 20px;

    img {
      width: 100px;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 10px;
      margin-bottom: 10px;
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

    .subtitle {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 900;
      font-size: 20px;
      line-height: 28px;
      color: #f8f9fa;
      text-align: center;

      small {
        color: #ff8405;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;

      h2 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 28px;
        color: #f8f9fa;
        text-align: center;
        padding: 20px;
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

  .boxRegister {
    display: flex;
    flex-direction: column;
    width: 100%;
    h3 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 200;
      font-size: 15px;
      line-height: 28px;
      color: #f8f9fa;
      text-align: center;
      padding: 20px;
    }
    a {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #ffffff;
      height: 40px;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      width: 100%;
      background: #868e96;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.6);
      }
    }
  }
`;
