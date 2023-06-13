import {Container, Row, Col, Button} from 'react-bootstrap';

const piePagina = () =>{

    return(
        <>
        <Container className='ContainerPiePagina' style={{maxWidth:'100%'}}>
            <Row className='RowPiePagina' >
                <Col className='ColPiePagina' xs={12} md={12}>
                    Diseñado y desarrollado por Alfredo Utria
                </Col>
                <Col className='ColContacto' xs={12} md={12}>
                <Button className='botonPiePagina' style={{background:'transparent', border:'none'}}><a  href='https://www.linkedin.com/in/alfredo-utria-garcia-790a13192' style={{textDecoration:'none', color:'white'}}><i className="devicon-linkedin-plain" id="etiqueta_i_piePagina"></i></a></Button>
                <Button className='botonPiePagina' style={{background:'transparent', border:'none'}}><a  href='https://github.com/alfredoutria' style={{textDecoration:'none', color:'white'}}><i className="devicon-github-plain" id="etiqueta_i_piePagina"></i></a></Button>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default piePagina;