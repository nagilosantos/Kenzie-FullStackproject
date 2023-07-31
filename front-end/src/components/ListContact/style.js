import styled from "styled-components";

export const LiContact = styled.li`
  list-style: none;
  button {
    background: white;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    flex-direction: column;
    padding: 20px;
    transition: transform 1s;

    img {
      width: 150px;
      margin-bottom: 20px;
    }

    h3 {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 22px;
      color: #ff8405;
    }

    span {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      text-align: right;
      color: #868e96;
    }

    &:hover {
      transform: scale(1.1);
      box-shadow: 4px 20px 22px -9px #ff8405;
    }
  }
`;
