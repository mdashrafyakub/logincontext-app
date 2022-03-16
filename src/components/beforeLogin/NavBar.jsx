import { Navbar, Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "#04aa6d" }}>
        <Container>
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            Brand link
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
