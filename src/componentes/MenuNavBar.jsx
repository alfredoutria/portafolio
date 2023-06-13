import {Container, Navbar, Nav} from 'react-bootstrap';

function MenuNavBar() {
  return (
    <Navbar className='navbarEscritorio' expand="lg" fixed='top'>
      <Container>
        <Navbar.Collapse id="bascic navbar-nav">
          <Nav className="nav" >
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#acerca">Acerca de mi</Nav.Link>
            <Nav.Link href="#proyectos">Proyectos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavBar;