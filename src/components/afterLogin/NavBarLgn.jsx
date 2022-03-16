import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import "../../styles/NavBarLgn.css";
import { LoginCon } from "../../LoginContext/LoginCon";
import { FormElem } from "./formElem/FormElem";
import { ContactUS } from "./contactUs/ContactUs";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Dashborad } from "./Dashboard";

export const NavBarlgn = () => {
  let navigate = useNavigate();

  const { username, setIsLoggedIn } = useContext(LoginCon);
  return (
    <>
      <Navbar style={{ backgroundColor: "#04aa6d" }}>
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Brand link
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              style={{ color: "white" }}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav className="me-auto">
              <Navbar.Text style={{ color: "white" }}>
                Signed in as: {username}
              </Navbar.Text>
              <NavDropdown
                title="Settings"
                id="basic-nav-dropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/contact-us");
                  }}
                >
                  Contact us
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    navigate("/formElem");
                  }}
                >
                  Form Element
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  LogOut
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Dashborad />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="/formElem" element={<FormElem />} />
      </Routes>
    </>
  );
};
