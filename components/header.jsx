import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function Header(){
    return(
        <>
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="#home"> <a className="cor-letra" href="#home"> <Image src="/Takout.png" width={90} height={20} alt='takout'></Image> </a></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="centroHead">
                <Nav.Link href="#servico"><h6>Serviço</h6></Nav.Link>
                <Nav.Link href="#solucao"><h6>Solução</h6></Nav.Link>
                <Nav.Link href="#CF"><h6>Como funciona</h6></Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
        </>
    );
}