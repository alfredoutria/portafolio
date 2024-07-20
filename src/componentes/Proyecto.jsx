import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import tabletHeladeria from '../img/tabletHeladeria.png';
import tabletStarkCinemas from '../img/tabletStarkCinemas.png';
import tabletNatuColombia from '../img/tabletNatuColombia.png';
import tabletEdufinanza from '../img/tabletEdufinanza.png'
import { useState } from 'react';


const Proyecto = () => {

    const [showNatucolombia, setShowNatucolombia] = useState(false);
    const [showEdufinanza, setShowEdufinanza] = useState(false);

    const cerrarNatucolombia = () => setShowNatucolombia(false);
    const mostrarNatucolombia = () => setShowNatucolombia(true);
    
    const cerrarEdufinanza = () => setShowEdufinanza(false);
    const mostrarEdufinanza = () => setShowEdufinanza(true);

    return (
        <>

            <Modal
                show={showNatucolombia}
                onHide={cerrarNatucolombia}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Proyecto: NatuColombia</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Button className='botonModal' variant='primary' style={{ fontSize: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/FrontendNatucolombia' target='_blanck'>GitHub Front-End Natucolombia</a></Button><br></br><br></br>
                    <Button className='botonModal' variant='primary' style={{ fontSize: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/BackendNatucolombia' target='_blanck'>GitHub Back-End Natucolombia</a></Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarNatucolombia}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showEdufinanza}
                onHide={cerrarEdufinanza}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Proyecto: Edufinanza</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: 'center' }}>
                    <Button className='botonModal' variant='primary' style={{ fontSize: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/FrontendEdufinanza' target='_blanck'>GitHub Front-End Edufinanza</a></Button><br></br><br></br>
                    <Button className='botonModal' variant='primary' style={{ fontSize: '20px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/BackendEdufinanza' target='_blanck'>GitHub Back-End Edufinanzas</a></Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarEdufinanza}>
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
                    <Col className='ColimagenProyecto' xs={12} md={6}><div className='div_imagenProyecto' data-aos="flip-left"><img className='imagenProyecto' src={tabletEdufinanza} /></div></Col>
                    <Col xs={12} md={6} className='ColContenidoProyecto' data-aos="zoom-in-up">
                        <h2 className='tituloProyecto'>Edufinanza</h2>
                        <p className='p_proyecto'>Sitio web destinado para dar información valiosa sobre los conceptos de ahorro, credito e inversión</p>
                        <Col className='ColTecnologiasUtilizadas' >Tecnologias Utilizadas:</Col>
                        <Col className="ColIconos" xs={15} md={12}>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-angularjs-plain" id="etiqueta_i_proyecto"></i><br></br>Angular</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-python-plain" id="etiqueta_i_proyecto"></i><br></br>Python</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-django-plain" id="etiqueta_i_proyecto"></i><br></br>Django</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-typescript-plain" id="etiqueta_i_proyecto"></i><br></br>Typescript</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-postgresql-plain" id="etiqueta_i_proyecto"></i><br></br>Postgresql</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-css3-plain" id="etiqueta_i_proyecto"></i><br></br>Css3</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-bootstrap-plain" id="etiqueta_i_proyecto"></i><br></br>Bootstrap</Button>
                        </Col>
                        <Button className='botonVisitar' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://edufinanza.onrender.com' target='_blanck'>Vistar</a></Button>
                        <Button className='botonGithub' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} onClick={mostrarEdufinanza} target='_blanck'>GitHub</a></Button>
                    </Col>
                </Row>
            </Container>

            <Container className='ContainerProyecto'>
                <Row className='RowProyecto order-md-2'>
                    <Col className='ColimagenProyecto order-md-1' xs={12} md={6}><div className='div_imagenProyecto' data-aos="flip-left"><img className='imagenProyecto' src={tabletHeladeria} /></div></Col>
                    <Col xs={12} md={6} className='ColContenidoProyecto' data-aos="zoom-in-up">
                        <h2 className='tituloProyecto'>Heladeria Villas del Caribe</h2>
                        <p className='p_proyecto'>Sitio web destinado a la venta de helados en donde el cliente puede solicitar su pedidos através de WhatsApp</p>
                        <Col className='ColTecnologiasUtilizadas' >Tecnologias Utilizadas:</Col>
                        <Col className="ColIconos" xs={15} md={12}>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-react-plain" id="etiqueta_i_proyecto"></i><br></br>React</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-javascript-plain" id="etiqueta_i_proyecto"></i><br></br>Javascript</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-firebase-plain" id="etiqueta_i_proyecto"></i><br></br>Firebase</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-css3-plain" id="etiqueta_i_proyecto"></i><br></br>Css3</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-bootstrap-plain" id="etiqueta_i_proyecto"></i><br></br>Bootstrap</Button>
                            <Button className='botonProyecto' variant='secondary'><i className="devicon-aos-plain" id="etiqueta_i_proyecto">Aos</i><br></br>Aos</Button>
                        </Col>
                        <Button className='botonVisitar' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://heladeria-5ee03.web.app' target='_blanck'>Vistar</a></Button>
                        <Button className='botonGithub' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/heladeria' target='_blanck'>GitHub</a></Button>
                    </Col>
                </Row>
            </Container>

            <Container className='ContainerProyecto'>
                <Row className='RowProyecto'>
                    <Col className='ColimagenProyecto order-md-1' xs={12} md={6} ><div className='div_imagenProyecto' data-aos="flip-left"><img className='imagenProyecto' src={tabletStarkCinemas} /></div></Col>
                    <Col className='ColProyectoContenido order-md-2' xs={12} md={6} data-aos="zoom-in-up">
                        <h2 className='tituloProyecto'>Stark Cinemas</h2>
                        <p className='p_proyecto'>Sitio web destinado para dar a conocer el mejor entretenimiento de la industria del cine, y fue desarrollado para el reto 3 de la universidad del norte con MisionTic2022 del Ministerio de Tecnologias, Información y Comunicaciones de Colombia</p>
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
                        <Button className='botonVisitar' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://starkcinemas.onrender.com' target='_blanck'>Vistar</a></Button>
                        <Button className='botonGithub' variant='primary' style={{ fontSize: '25px' }}><a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/alfredoutria/starkcinemas' target='_blanck'>GitHub</a></Button>
                    </Col>
                </Row>
            </Container>

            <Container className='ContainerProyecto'>
                <Row className='RowProyecto'>
                    <Col className='ColimagenProyecto order-md-2' xs={12} md={6}><div className='div_imagenProyecto' data-aos="flip-left"><img className='imagenProyecto' src={tabletNatuColombia} /></div></Col>
                    <Col className='ColProyectoContenido order-md-1' xs={12} md={6} data-aos="zoom-in-up">
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
                        <Button className='botonVisitar' variant='primary' style={{ fontSize: '25px' }}  ><a style={{ textDecoration: 'none', color: 'white' }} href='https://natucolombia.onrender.com' target='_blanck'>Visitar</a></Button>
                        <Button className='botonGithub' variant='primary' style={{ fontSize: '25px' }} onClick={mostrarNatucolombia}>GitHub</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )

}
export default Proyecto