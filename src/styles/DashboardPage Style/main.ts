import styled from "styled-components";

export const Main = styled.main`
  margin: 20px;
  padding-top: 20px;
  .tecnologia {
    display: flex;
    justify-content: space-between;
  }

  button {
    text-decoration: none;
    color: white;
    font-size: 30px;
    height: 40px;
    width: 40px;
    color: white;
    background: #212529;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    background: #212529;
    margin-top: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: black;
    padding: 20px;
    align-content: center;
    border-radius: 4px;
    position: relative;
  }

  li:hover {
    background-color: #343b41;
  }
  .spanLi {
    margin: unset;
    display: flex;
    align-items: center;
  }

  .semTec {
    text-align: center;
    margin: unset;
  }

  .divStatus {
    display: flex;
    gap: 20px;
  }

  .btnDelete {
    background-color: transparent;
    position: absolute;
    top: 40px;
    right: 20px;
  }

  @media (min-width: 900px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;
