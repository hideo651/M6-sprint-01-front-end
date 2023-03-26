import styled from "styled-components";

export const Modal = styled.div`
  color: white;

  .btnFechar {
    text-decoration: none;
    color: #868e96;
    font-size: 20px;
    height: 40px;
    width: 40px;

    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    padding-top: 5px;
  }

  p {
    color: red;
    font-weight: bold;
  }

  .modal {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .modalCorpo {
    width: 350px;
    height: 600px;
    border-radius: 8px;
    background-color: #212529;
    position: relative;
  }

  .modalCorpoEdit {
    width: 350px;
    height: 356px;
    border-radius: 8px;
    background-color: #212529;
    position: relative;
  }

  .modalTop {
    background-color: #343b41;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;
  }

  input {
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: 2px solid #f8f9fa;
    background: #343b41;
    color: #f8f9fa;
    outline: 0;
  }

  select {
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: 2px solid #f8f9fa;
    background: #343b41;
    color: #f8f9fa;
    outline: 0;
  }

  .btnCadastrar {
    height: 40px;
    color: white;
    background: #ff577f;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }

  .btnEditar {
    height: 40px;
    color: white;
    background: #ff577f;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    width: 140px;
  }

  .editar {
    position: absolute;
    right: 20px;
    bottom: 19px;
    width: 100px;
    height: 40px;
    background-color: #868e96;
    color: #f8f9fa;
    border-radius: 4px;
    border: none;
  }

  .spanTechName {
    height: 40px;
    padding: 7px;
    border-radius: 4px;
    border: 2px solid #f8f9fa;
    background: #343b41;
    color: #f8f9fa;
    outline: 0;
  }

  /* .hidden {
    display: none;
  } */
`;
