import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


export default function solucao(){
    return(
        <>     
        
            <div className="fundoSolu">

                {/* titulo */}
                <div className="tituloSolu" id='solucao'>
                    <h1>Nossa solução para o seu negócio</h1>
                    <p> Algumas das soluções que o nosso projeto proporciona para o seu negócio</p>
                </div>

                <div className='divCard'>
                    <Row xs={1} md={3} className='cardsSolu g-0'>  
                        <Card style={{ width: '16rem'}} className='cardSoluMargin'>
                            <div className='placeHolder2'></div>
                            <Card.Body className="cardSoluFundo">
                                <Card.Title className="cardSoluFundo">Organização</Card.Title>
                                <Card.Text className="cardSoluFundo">
                                melhor organização para seu negócio. 
                                </Card.Text>
                                <a variant="primary" className="cardSoluFundo">Saiba mais</a>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '16rem'}} className='cardSoluMargin'>
                            <div className='placeHolder2'></div>
                            <Card.Body className="cardSoluFundo">
                                <Card.Title className="cardSoluFundo">Visibilidade</Card.Title>
                                <Card.Text className="cardSoluFundo">
                            Seu negócio terá uma maior visibilidade para os clientes. 
                                </Card.Text>
                                <a variant="primary" className="cardSoluFundo">Saiba mais</a>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '16rem'}} className='cardSoluMargin'>
                            <div className='placeHolder2'></div>
                            <Card.Body className="cardSoluFundo">
                                <Card.Title className="cardSoluFundo">Fácilidade</Card.Title>
                                <Card.Text className="cardSoluFundo">
                            Nossa interface é intuitiva. 
                                </Card.Text>
                                <a variant="primary" className="cardSoluFundo">Saiba mais</a>
                            </Card.Body>
                        </Card>

                    </Row>
                </div>
            </div>
        </>
    )
}