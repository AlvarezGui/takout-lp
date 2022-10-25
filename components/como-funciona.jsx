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
                                    <Nav.Link eventKey="first" href="#IMG1"><h3 className='fundoColCFFunc'>Estatísticas</h3> <p className='fundoColCFFunc'>Você poderá ver as estatísticas do seu comércio no fim do mês e ver como foram suas vendas.</p></Nav.Link>
                                    
                                </Nav.Item>

                                <Nav.Item className='fundoColCF navItemMT'>
                                    <Nav.Link eventKey="second"><h3 className='fundoColCFFunc'>Região</h3> <p className='fundoColCFFunc'>Detectamos onde o cliente está e de acordo com suas preferéncias identifica os comércios em sua volta.</p></Nav.Link>
                                </Nav.Item>

                                <Nav.Item className='fundoColCF navItemMT'>
                                    <Nav.Link eventKey="third"><h3 className='fundoColCFFunc'>Organização</h3> <p className='fundoColCFFunc'>
                                    O aplicativo tem um sistema de organização de produtos que tem o objetivo de ajudar os comerciantes.</p></Nav.Link>
                                </Nav.Item>

                            </Nav>
                        </Col>

                        <Col sm={5} className='fundoColCF'>
                            <Tab.Content className='fundoColCF'>
                                <Tab.Pane eventKey="first" className='fundoColCF' id='IMG1'>
                                    <Image
                                        src=
                                        "/estaImg.png"
                                        className='img-fluid shadow-4 imgCF2'
                                        alt='Imagem estatística takout'
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="second" className='fundoColCF'>
                                    <Image
                                        src=
                                        "/regiao.png"
                                        className='img-fluid shadow-4 imgCF2'
                                        alt='Imagem região takout'
                                    />
                                </Tab.Pane>

                                <Tab.Pane eventKey="third" className='fundoColCF'>
                                    <Image
                                        src=
                                        "/orgImg.png"
                                        className='img-fluid shadow-4 imgCF2'
                                        alt='Imagem organização celular takout'
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