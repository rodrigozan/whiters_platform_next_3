import { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';

export default function NavigationMenu() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="/">Meu Site</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="sidebar"
            onClick={handleToggleSidebar}
          />
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto">
              <Nav.Link href="/">Página Inicial</Nav.Link>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          {showSidebar && (
            <Col
              id="sidebar"
              className="bg-dark text-white"
              style={{ width: '250px' }}
            >
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/">Página Inicial</Nav.Link>
                <Nav.Link href="/sobre">Sobre</Nav.Link>
                <Nav.Link href="/contato">Contato</Nav.Link>
              </Nav>
            </Col>
          )}

          <Col>
            {/* Conteúdo do seu site */}
            <h1>Conteúdo</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
