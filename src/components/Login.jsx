import { useState } from "react";
import { Dashborad } from "./afterLogin/Dashboard";
import { LoginPage } from "./beforeLogin/LoginPage";
import { LoginCon } from "../LoginContext/LoginCon";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./beforeLogin/NavBar";
import { NavBarlgn } from "./afterLogin/NavBarLgn";

export const Login = () => {
  const [isLoggedin, setIsLoggedIn] = useState(null);
  const [username, setUserName] = useState("");

  return (
    <>
      <LoginCon.Provider
        value={{ setIsLoggedIn, username, setUserName, isLoggedin }}
      >
        {isLoggedin ? (
          <BrowserRouter>
            <NavBarlgn />
          </BrowserRouter>
        ) : (
          <div>
            <NavBar />
            <LoginPage />
          </div>
        )}
      </LoginCon.Provider>
    </>
  );
};
