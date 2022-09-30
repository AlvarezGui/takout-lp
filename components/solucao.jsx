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
                    <p> Lorem Lorem LoremLoremLoremLoremLoremLorem</p>
                </div>

                <div>
                    <Row xs={2} md={4} className='cardsSolu g-4'>  
                        <Card style={{ width: '18rem'}}>
                            <div className='placeHolder2'></div>
                            <Card.Body className="cardSoluFundo">
                                <Card.Title className="cardSoluFundo">Benefício 1</Card.Title>
                                <Card.Text className="cardSoluFundo">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                </Card.Text>
                                <a variant="primary"    className="cardSoluFundo">Saiba mais</a>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem'}}>
                            <div className='placeHolder2'></div>
                            <Card.Body className="cardSoluFundo">
                                <Card.Title className="cardSoluFundo">Benefício 2</Card.Title>
                                <Card.Text className="cardSoluFundo">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                </Card.Text>
                                <a variant="primary" className="cardSoluFundo">Saiba mais</a>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem'}}>
                            <div className='placeHolder2'></div>
                            <Card.Body className="cardSoluFundo">
                                <Card.Title className="cardSoluFundo">Benefício 3</Card.Title>
                                <Card.Text className="cardSoluFundo">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                                </Card.Text>
                                <a variant="primary" className="cardSoluFundo">Saiba mais</a>
                            </Card.Body>
                        </Card>

                        <Card style={{ width: '18rem'}}>
                            <div className='placeHolder2'></div>
                            <Card.Body className="cardSoluFundo">
                                <Card.Title className="cardSoluFundo">Benefício 4</Card.Title>
                                <Card.Text className="cardSoluFundo">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
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