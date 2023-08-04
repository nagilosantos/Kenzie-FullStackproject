import { styled } from "styled-components";

export const SectionModalDeleteContact = styled.section`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;

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

  .TitleDelete {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;

    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 800;
      font-size: 20px;
      line-height: 24px;
      color: #f8f9fa;
    }

    .buttonsDeleteModal {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button:nth-child(1) {
        width: 60%;
        background: #ff8405;
      }

      button:nth-child(2) {
        width: 30%;
        background: #868e96;
      }
    }
  }
`;
