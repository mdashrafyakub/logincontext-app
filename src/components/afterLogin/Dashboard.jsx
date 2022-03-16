import { useContext } from "react";
import { LoginCon } from "../../LoginContext/LoginCon";
export const Dashborad = () => {
  const { username } = useContext(LoginCon);
  return (
    <>
      <h1>Hi {username}</h1>
    </>
  );
};
