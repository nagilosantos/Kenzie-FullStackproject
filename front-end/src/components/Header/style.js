import styled from "styled-components";

export const Head = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 198px;

  .headerBox {
    width: 80%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    margin: 0px;
    gap: 4px;
    img {
      width: 75px;
    }
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

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 67.49px;
    height: 40.11px;
    background: #212529;
    border-radius: 4px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 26px;
    text-decoration: none;
    color: #f8f9fa;

    &:hover {
      filter: brightness(0.7);
    }
  }

  .topBox {
    width: 100%;
    height: 118px;
    border-bottom: 1px solid #212529;
    border-top: 1px solid #212529;
    background: rgb(50, 137, 255);
    background: linear-gradient(
      0deg,
      rgba(50, 137, 255, 1) 52%,
      rgba(67, 65, 65, 0.8407738095238095) 100%
    );
    box-shadow: 4px 20px 22px -9px rgba(43, 13, 143, 1);

    .midBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: absolute;
      top: 113px;

      figure {
        border-radius: 100%;
        border: #f8f9fa 4px solid;
        margin-bottom: 20px;
        img {
          width: 130px;
          height: 130px;
          transition: transform 2s;
          object-position: 50% 50%;
          border-radius: 100%;

          &:hover {
            transform: scale(1.3);
          }
        }
      }

      h2 {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 28px;
        color: #ff8405;

        small {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 900;
          font-size: 24px;
          line-height: 28px;
          color: #f8f9fa;
        }
      }

      button {
        margin-top: 10px;
        background-color: rgba(50, 137, 255, 1);
        height: 25px;
        &:hover {
          background-color: #ff8405;
        }
      }
    }
  }
`;
