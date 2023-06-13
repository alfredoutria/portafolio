import imagenDescargarCV from '../img/iconoCV.png'
import HojaVida from '../cv/CV.pdf';

const DescargarCV = () => {
 

  return (
    <div className="div_descargarCV" >
     <a className='a_descargarCV' href={HojaVida} download={'HojaVidaAlfredoUtria'}><img  className="imagenDescargarCV" src={imagenDescargarCV}/></a>
    </div>
  );
};

export default DescargarCV;