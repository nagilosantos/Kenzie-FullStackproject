import styled from "styled-components";

export const SectionModalEditContact = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;

  .modalContent {
    max-width: 500px;
    width: 100%;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 22px 32px;
    gap: 22px;
  }

  .modal {
    width: 104%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px;
    margin-left: -20px;
    margin-top: -20px;
    align-content: center;
    background: #343b41;
    border-radius: 4px 4px 0px 0px;

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: #f8f9fa;
    }

    button {
      font-family: "Nunito";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #868e96;
      background: none;
      border: none;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 35px;
    width: 100%;

    h4 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 24px;
      color: #f8f9fa;
      text-align: center;
    }

    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: red;
      margin-top: -17px;
    }
  }

  .buttonsEdit{
    display: flex;
    width: 100%;
    gap: 25px;
    button:nth-child(1) {
      width: 45%;
      background: #ff8405;
    }

    button:nth-child(2) {
      width: 45%;
      background: #868e96;
    }
  }
`;
