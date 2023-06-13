import iconowhatsapp from '../img/iconoWhatsapp.png';

const IconoWhatsapp = () => {

    const numero = '3045737977';
    const mensaje = 'Hola!%20estoy%20interesado%20en%20tus%20habilidades%20de%20desarrollo%20web!';

    const linkWhatsapp = {

        link: `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`
    }

    return (
        <>
            <div ><a  className='divIconoEscribirWhatsapp' href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer"><img className='iconoEscribirWhatsapp' src={iconowhatsapp} /></a></div>
        </>
    )
}

export default IconoWhatsapp;