import {Container, Row, Col} from 'react-bootstrap';
import imagenWhatsapp from '../img/iconoWhatsapp.png';

const Contacto = () =>{

    const numero = '3045737977';
    const mensaje = 'Hola!%20estoy%20interesado%20en%20tus%20habilidades%20de%20desarrollo%20web!';

    const linkWhatsapp = {

        link: `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`
    }

    return(
        <>
        <a name="contacto"></a>
        <Container className='ContainerContacto' style={{maxWidth:'100%'}} >
            <Row className='RowContacto'>
                <Col className='TituloContacto' xs={12} md={12}>Contacto</Col>
                <Col className='ColContacto' xs={12} md={12} data-aos="fade-right">
                    alfredoutria@hotmail.com <br></br>
                    <a  href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:'white'}}><img src={imagenWhatsapp} width={'30px'}/> 3045737977</a>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default Contacto;