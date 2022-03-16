import "../../styles/LoginPage.css";
import { LoginCon } from "../../LoginContext/LoginCon";
import { useContext, useState } from "react";
import { LoginError } from "./LoginError";
export const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const { setIsLoggedIn, setUserName, username, isLoggedin } =
    useContext(LoginCon);

  return (
    <div className="inputForm">
      {flag && <LoginError />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          username === "ashraf@ashraf.com" && password === "123456"
            ? setIsLoggedIn(true)
            : setIsLoggedIn(false);
          !isLoggedin && setFlag(true);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            const uName = e.target.value;
            setUserName(uName);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};
