import styled from "styled-components";

export const DivDashboard = styled.div`
  color: white;

  a {
    text-decoration: none;
    color: white;
    height: 40px;
    width: 300px;
    color: white;
    background: #212529;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .infoUser {
    padding: 60px 20px 30px 20px;
  }

  span {
    color: #868e96;
    margin-top: 20px;
  }

  .beta {
    display: none;
  }

  .divTitle {
    margin-bottom: 5px;
  }

  @media (min-width: 900px) {
    .beta {
      display: unset;
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 20px 30px 20px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .infoUser {
      max-width: 1200px;
      margin: 0 auto;
      padding: 60px 20px 30px 20px;
      display: flex;
      justify-content: space-between;
    }
  }
`;
