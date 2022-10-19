import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';

export default function comoFunciona(){
    return(
    <>
        <div className="fundoCF">

            {/* titulo */}
            <div className="tituloCF" id='CF'>
                <h1>Tudo que você precisa</h1>
                <p>Diversas funções para deixar seu uso prático</p>
            </div>
            

            <div>

                
                {/* Tabs com FAlA */}                
                <Tab.Container id="Tabelinhas_funcionamento" defaultActiveKey="first" className='CFtab'>
                    <Row className='fundoColCF flexiona g-0'>
                        <Col sm={3} className="fundoColCF ladinhoTab">
                            <Nav variant="pills" className="flex-column fundoColCF">
                                <Nav.Item className='fundoColCF'>
                                    <Nav.Link eventKey="first" href="#IMG1"><h3 className='fundoColCFFunc'>Funcionalidade 1 </h3> <p className='fundoColCFFunc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda in laboriosam est animi numquam voluptate nulla eligendi itaque optio.</p></Nav.Link>
                                    
                                </Nav.Item>

                                <Nav.Item className='fundoColCF navItemMT'>
                                    <Nav.Link eventKey="second" href="#IMG1"><h3 className='fundoColCFFunc'>Funcionalidade 2 </h3> <p className='fundoColCFFunc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda in laboriosam est animi numquam voluptate nulla eligendi itaque optio.</p></Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='fundoColCF navItemMT'>
                                    <Nav.Link eventKey="third"><h3 className='fundoColCFFunc'>Funcionalidade 3 </h3> <p className='fundoColCFFunc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda in laboriosam est animi numquam voluptate nulla eligendi itaque optio.</p></Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='fundoColCF navItemMT'>
                                    <Nav.Link eventKey="fourth"><h3 className='fundoColCFFunc'>Funcionalidade 4 </h3> <p className='fundoColCFFunc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda in laboriosam est animi numquam voluptate nulla eligendi itaque optio.</p></Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>

                        <Col sm={5} className='fundoColCF ladinhoTabIMG'>
                            <Tab.Content className='fundoColCF'>
                                <Tab.Pane eventKey="first" className='fundoColCF' id='IMG1'>
                                    <Image
                                        src=
                                        "/branco.jpg"
                                        className='img-fluid shadow-4 placeHolder3'
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="second" className='fundoColCF'>
                                    <Image
                                        src=
                                        "/teste.jpg"
                                        className='img-fluid shadow-4 placeHolder3'
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="third" className='fundoColCF'>
                                    <Image
                                        src=
                                        "/Takout.png"
                                        className='img-fluid shadow-4 placeHolder3'
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth" className='fundoColCF'>
                                    <Image
                                        src=
                                        "/favicon.ico"
                                        className='img-fluid shadow-4 placeHolder3'
                                    />
                                </Tab.Pane>
            
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>

                {/* PlaceHolder3 */}
                {/*
                <div className="fundoCFIMG">
                <img src='/branco.jpg' className='img-fluid shadow-4 placeHolder3' alt='...' />
                </div>*/}

            </div>
            
        </div>
    </>
    )
}