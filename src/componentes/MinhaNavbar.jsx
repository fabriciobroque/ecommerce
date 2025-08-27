import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MinhaNavbar() {

  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  function buscarDadosUsuario() {

    
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    const emailUsuario = localStorage.getItem("emailUsuario");
    const token = localStorage.getItem("token");

    setEmail(emailUsuario);
    setNome(nomeUsuario);
    setToken(token);
  }

  function sair() {
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("emailUsuario");
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    buscarDadosUsuario();
    },[]);

    if(!token) {
      return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="text-white">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/produtos" className="text-white">Produto</Nav.Link>
            <Nav.Link href="/login" className="text-white">Fazer Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      );
    }

    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className="text-white">E-Commerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/produtos" className="text-white">Produto</Nav.Link>
          </Nav>
        </Container>
          <Navbar.Text className='text-white justify-content-end px-2'>{nome}</Navbar.Text>
          <Navbar.Text className='text-white px-2 '>{email}</Navbar.Text>
          <Nav.Link onClick={sair} className="text-white px-2">Sair</Nav.Link>
      </Navbar>
      </>
    )
}

export { MinhaNavbar };