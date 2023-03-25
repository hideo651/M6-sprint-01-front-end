import styled from "styled-components";

export const DivForm = styled.div`
  color: #f8f9fa;
  background-color: #212529;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 40px;

  h2 {
    margin: 30px 0 0 0;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    gap: 20px;
  }
  .inputLogin {
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: 2px solid white;
    background: #343b41;
    color: white;
    outline: 0;
  }

  .inputLogin::placeholder {
    color: white;
  }

  .inputRegister {
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background: #343b41;
    color: white;
    outline: 0;
  }

  button {
    height: 40px;
    color: white;
    background: #ff577f;
    border: none;
  }

  button:hover {
    background-color: #ff427f;
  }

  span {
    font-size: 14px;
    color: #868e96;
    font-weight: 600;
  }
  .divContainer {
    width: 100%;
    padding: 20px 20px 30px 20px;
  }

  .divLink {
    height: 40px;
    color: white;
    background: #868e96;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    text-decoration: none;
    color: white;
  }

  select {
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background: #343b41;
    color: white;
    outline: 0;
  }

  p {
    color: red;
    font-size: 13px;
    margin-top: -15px;
  }
`;
