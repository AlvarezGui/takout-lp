import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function Header(){
    return(
        <>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home"> <a className="navbar-brand cor-letra imgTakout" href="#home"> <Image src="/Takout.png" width={90} height={20} alt='takout'></Image> </a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#servico"><h6>Serviço</h6></Nav.Link>
            <Nav.Link href="#solucao"><h6>Solução</h6></Nav.Link>
            <Nav.Link href="#CF"><h6>Como funciona</h6></Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href=""><h5>Login</h5></Nav.Link>
            <Button variant="primary">Iniciar</Button>{' '}
          </Nav>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}