import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import tabletHeladeria from '../img/tabletHeladeria.png';
import tabletStarkCinemas from '../img/tabletStarkCinemas.png';
import tabletNatuColombia from '../img/tabletNatuColombia.png';
import { useState } from 'react';


const Proyecto = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Proyecto: NatuColombia</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Button className='botonVisitar' variant='primary' style={{ fontSize: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/FrontendNatucolombia'>GitHub Front-End Natucolombia</a></Button><br></br><br></br>
                    <Button className='botonVisitar' variant='primary' style={{ fontSize: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/BackendNatucolombia'>GitHub Back-End Natucolombia</a></Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <a name="proyectos"></a>
            <Col className='ColTituloPrincipal' xs={12} md={12}>
                <label className='TituloPrincipal'>Proyectos</label>
            </Col>
            <Container className='ContainerProyecto'>
                <Row className='RowProyecto'>
                    <Col className='ColimagenProyecto' xs={12} md={6}><div className='div_imagenProyecto' data-aos="flip-left"><img className='imagenProyecto' src={tabletHeladeria} /></div></Col>
                    <Col xs={12} md={6} className='ColContenidoProyecto' data-aos="zoom-in-up">
                        <h2 className='tituloProyecto'>Heladeria Villas del Caribe</h2>
                        <p className='p_proyecto'>Sitio web destinado a la venta de helados en donde el cliente puede solicitar susu pedidos atraves de Whatsapp</p>
                        <Col className='ColTecnologiasUtilizadas' >Tecnologias Utilizadas:</Col>
                        <Col className="ColIconos" xs={15} md={12}>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-react-plain" id="etiqueta_i_proyecto"></i><br></br>React</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-javascript-plain" id="etiqueta_i_proyecto"></i><br></br>Javascript</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-firebase-plain" id="etiqueta_i_proyecto"></i><br></br>Firebase</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-css3-plain" id="etiqueta_i_proyecto"></i><br></br>Css3</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-bootstrap-plain" id="etiqueta_i_proyecto"></i><br></br>Bootstrap</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-aos-plain" id="etiqueta_i_proyecto">Aos</i><br></br>Aos</Button>
                        </Col>
                        <Button className='botonVisitar' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://heladeria-5ee03.web.app'>Vistar</a></Button>
                        <Button className='botonGithub' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/heladeria'>GitHub</a></Button>
                    </Col>
                </Row>
            </Container>

            <Container className='ContainerProyecto'>
                <Row className='RowProyecto'>
                    <Col className='ColimagenProyecto order-md-2' xs={12} md={6} ><div className='div_imagenProyecto' data-aos="flip-left"><img className='imagenProyecto' src={tabletStarkCinemas} /></div></Col>
                    <Col className='ColProyectoContenido order-md-1' xs={12} md={6} data-aos="zoom-in-up">
                        <h2 className='tituloProyecto'>Stark Cinemas</h2>
                        <p className='p_proyecto'>Sitio web destinado al dar a conocer el mejor entretenimiento de la industria del cine, y fué desarrollado para el reto 3 de la universidad del norte con MisionTic2022 del minsiterio de las Tics</p>
                        <Col className='ColTecnologiasUtilizadas' >Tecnologias Utilizadas:</Col>
                        <Col className="ColIconos" xs={12} md={12}>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-flask-plain" id="etiqueta_i_proyecto"></i><br></br>Flask</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-python-plain" id="etiqueta_i_proyecto"></i><br></br>Python</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-javascript-plain" id="etiqueta_i_proyecto"></i><br></br>Javascript</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-mysql-plain" id="etiqueta_i_proyecto"></i><br></br>Mysql</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-jquery-plain" id="etiqueta_i_proyecto"></i><br></br>Jquery</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-html5-plain" id="etiqueta_i_proyecto"></i><br></br>Html5</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-css3-plain" id="etiqueta_i_proyecto"></i><br></br>Css3</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-bootstrap-plain" id="etiqueta_i_proyecto"></i><br></br>Bootstrap</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-aos-plain" id="etiqueta_i_proyecto">Aos</i><br></br>Aos</Button>

                        </Col>
                        <Button className='botonVisitar' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://starkcinemas.onrender.com'>Vistar</a></Button>
                        <Button className='botonGithub' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/starkcinemas'>GitHub</a></Button>
                    </Col>
                </Row>
            </Container>

            <Container className='ContainerProyecto'>
                <Row className='RowProyecto'>
                    <Col className='ColimagenProyecto' xs={12} md={6}><div className='div_imagenProyecto' data-aos="flip-left"><img className='imagenProyecto' src={tabletNatuColombia} /></div></Col>
                    <Col className='ColProyectoContenido' xs={12} md={6} data-aos="zoom-in-up">
                        <h2 className='tituloProyecto'>NatuColombia</h2>
                        <p className='p_proyecto'>Este proyecto es personal y es destinado para informar sobre los sitios turisticos y naturales más importantes de colombia</p>
                        <Col className='ColTecnologiasUtilizadas' >Tecnologias Utilizadas:</Col>
                        <Col className="ColIconos" xs={15} md={12}>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-react-plain" id="etiqueta_i_proyecto"></i><br></br>React.Vite</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-javascript-plain" id="etiqueta_i_proyecto"></i><br></br>Javascript</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-nodejs-plain" id="etiqueta_i_proyecto"></i><br></br>NodeJs</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-express-original" id="etiqueta_i_proyecto"></i><br></br>Express</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-mongodb-plain" id="etiqueta_i_proyecto"></i><br></br>MongoDb</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-bootstrap-plain" id="etiqueta_i_proyecto"></i><br></br>Bootstrap</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-aos-plain" id="etiqueta_i_proyecto">Aos</i><br></br>Aos</Button>
                        </Col>
                        <Button className='botonVisitar' variant='primary' style={{ fontSize: '25px' }}  ><a style={{ textDecoration: 'none', color: 'white' }} href='https://natucolombia.onrender.com'>Visitar</a></Button>
                        <Button className='botonGithub' variant='primary' style={{ fontSize: '25px' }} onClick={handleShow}>GitHub</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )

}
export default Proyecto