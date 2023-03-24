import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext";

export const DashboardMain = () => {
  const { getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1>Eu sou a DashboardMain</h1>
    </>
  );
};
