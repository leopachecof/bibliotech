import "./Menu.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logoIcon from "./../../assets/icons/livros.png";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Menu() {
  const navigate = useNavigate();
  const usuarioLogado = useContext(AuthContext);
  console.log(usuarioLogado);

  function userName() {
    let displayName = ""
    if (usuarioLogado.displayName === null) {
      for (let i = 0; i < usuarioLogado.email.length; i++) {
        if (usuarioLogado.email[i] === "@"){
          break
        }else{
          displayName = displayName + usuarioLogado.email.charAt(i)
          console.log(i)
        }
      }
      return displayName
    }else{
      return usuarioLogado.displayName
    }
  }
  function onLogout() {
    logout().then(() => {
      navigate("/login");
    });
  }
  return (
    <Navbar bg="success" variant="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img src={logoIcon} width="32" alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/livros">
              Livros
            </Nav.Link>
            <Nav.Link as={Link} to="/emprestimos">
              Emprestimos
            </Nav.Link>
            <Nav.Link as={Link} to="/emprestimos">
              {userName()}
            </Nav.Link>
            <Nav.Link onClick={onLogout}>
              <i className="bi bi-box-arrow-right"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
