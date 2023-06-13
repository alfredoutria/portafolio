import { Container, Row, Col, Button } from "react-bootstrap";
import imagenAcercaMi from '../img/acercaMi.jpg'


const SobreMiHabilidades = () => {


  return (
    <div style={{ background: 'rgb(10, 10, 39)', color: 'white' }}>
      <a name="acerca"></a>
      <Container className="ContainerSobreMi" style={{ maxWidth: '100%' }} xs={12} md={12}>
        <Row className="RowContenido" >
          <Col className="ColSobreMi" xs={12} md={12} >
            <h1 className="TituloSobreMi" >Sobre mi</h1>
          </Col >
          <Col className="ColimagenSobreMi" xs={12} md={4}>
            <img className="imagenSobreMi" src={imagenAcercaMi} data-aos="flip-right" />
          </Col>
          <Col className="ColContenidoSobreMi" id="ScrollContenidoSobreMi" xs={12} md={8} data-aos="fade-up">
            Soy un desarrollador de software, que en el desarrollo web ha realizado varios proyectos tanto en la parte del Front-End como el Back-End,
            me considero una persona perseverante y tolerante que le gusta los desafios,
            y tambien aprender nuevas tecnologias constantemente

          </Col>
        </Row>
      </Container>

      <Container className="Containerhabilidades" style={{ maxWidth: '100%' }}>
        <Row>
          <Col className="ColButtonIconos" xs={12} md={12}>
            <h1 className="divHabilidades">Habilidades</h1>
            <Button className='botonSobreMi' ><i className="devicon-react-plain" id="etiqueta_i_sobreMi"></i><br></br>React</Button>
            <Button className='botonSobreMi' ><i className="devicon-nodejs-plain" id="etiqueta_i_sobreMi"></i><br></br>Node Js</Button>
            <Button className='botonSobreMi'><i className="devicon-javascript-plain" id="etiqueta_i_sobreMi"></i><br></br>JavaScript</Button>
            <Button className='botonSobreMi'><i className="devicon-csharp-plain" id="etiqueta_i_sobreMi"></i><br></br>c#</Button>
            <Button className='botonSobreMi' ><i className="devicon-python-plain" id="etiqueta_i_sobreMi"></i><br></br>Python</Button>
            <Button className='botonSobreMi' ><i className="devicon-java-plain" id="etiqueta_i_sobreMi"></i><br></br>Java</Button>
            <Button className='botonSobreMi' ><i className="devicon-html5-plain" id="etiqueta_i_sobreMi"></i><br></br>Html5</Button>
            <Button className='botonSobreMi'><i className="devicon-css3-plain" id="etiqueta_i_sobreMi"></i><br></br>Css3</Button>
            <Button className='botonSobreMi'><i className="devicon-bootstrap-plain" id="etiqueta_i_sobreMi"></i><br></br>Bootstrap</Button>
            <Button className='botonSobreMi'><i className="devicon-photoshop-plain" id="etiqueta_i_sobreMi"></i><br></br>Photoshop</Button>
            <Button className='botonSobreMi' ><i className="devicon-flask-plain" id="etiqueta_i_sobreMi"></i><br></br>Flask</Button>
            <Button className='botonSobreMi' ><i className="devicon-firebase-plain" id="etiqueta_i_sobreMi"></i><br></br>Firebase</Button>
            <Button className='botonSobreMi' ><i className="devicon-mysql-plain" id="etiqueta_i_sobreMi"></i><br></br>Mysql</Button>
            <Button className='botonSobreMi' ><i className="devicon-sqlite-plain" id="etiqueta_i_sobreMi"></i><br></br>Sqlite</Button>
            <Button className='botonSobreMi' ><i className="devicon-mongodb-plain" id="etiqueta_i_sobreMi"></i><br></br>MongoDb</Button>
            <Button className='botonSobreMi' ><i className="devicon-jquery-plain" id="etiqueta_i_sobreMi"></i><br></br>Jquery</Button>
            <Button className='botonSobreMi' ><i className="devicon-vscode-plain" id="etiqueta_i_sobreMi"></i><br></br>Visual Studio Code</Button>
            <Button className='botonSobreMi'><i className="devicon-sass-plain" id="etiqueta_i_sobreMi"></i><br></br>Sass</Button>
            <Button className='botonSobreMi'><i className="devicon-github-plain" id="etiqueta_i_sobreMi"></i><br></br>GitHub</Button>
            <Button className='botonSobreMi'><i className="devicon-aos-plain" id="etiqueta_i_sobreMi">Aos</i><br></br>Aos</Button>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default SobreMiHabilidades;