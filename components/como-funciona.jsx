import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image'

export default function comoFunciona(){
    return(
    <>
        <div className="fundoCF">

            {/* titulo */}
            <div className="tituloCF" id='CF'>
                <h1>Tudo que você precisa</h1>
                <p>Diversas funções para deixar seu uso prático</p>
            </div>

            

            <div className='flexiona'>

                
                {/* Tabs com FAlA */}                
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='BGCTabs'>
                    <Row className='fundoColCF'>
                        <Col sm={3} className="fundoColCF ladinhoTab">
                            <Nav variant="pills" className="flex-column fundoColCF">
                                <Nav.Item className='fundoColCF'>
                                    <Nav.Link eventKey="first"><h3 className='fundoColCFFunc'>Funcionalidade 1 </h3> <p className='fundoColCFFunc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda in laboriosam est animi numquam voluptate nulla eligendi itaque optio.</p></Nav.Link>
                                    
                                </Nav.Item>

                                <Nav.Item className='fundoColCF navItemMT'>
                                    <Nav.Link eventKey="second"><h3 className='fundoColCFFunc'>Funcionalidade 2 </h3> <p className='fundoColCFFunc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda in laboriosam est animi numquam voluptate nulla eligendi itaque optio.</p></Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='fundoColCF navItemMT'>
                                    <Nav.Link eventKey="third"><h3 className='fundoColCFFunc'>Funcionalidade 3 </h3> <p className='fundoColCFFunc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda in laboriosam est animi numquam voluptate nulla eligendi itaque optio.</p></Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='fundoColCF navItemMT'>
                                    <Nav.Link eventKey="fourth"><h3 className='fundoColCFFunc'>Funcionalidade 4 </h3> <p className='fundoColCFFunc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda in laboriosam est animi numquam voluptate nulla eligendi itaque optio.</p></Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>
                        
                    </Row>
                </Tab.Container>

                {/* PlaceHolder3 */}
                <div className="fundoCFIMG">
                <img src='/branco.jpg' className='img-fluid shadow-4 placeHolder3' alt='...' />
                </div>

            </div>
            
        </div>
    </>
    )
}