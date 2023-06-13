import { animateScroll as scroll } from 'react-scroll';
import imagenFlechaArriba from '../img/flechaArriba.png'

const FlechaArriba = () => {
  const ScrollArriba = () => {
    scroll.scrollToTop({
      duration: 500, // Duración de la animación en milisegundos
      smooth: 'easeInOutQuart', // Tipo de animación
    });
  };

  return (
    <div className="div_flechaArriba" onClick={ScrollArriba}>
      <img  className="imagenArriba" src={imagenFlechaArriba}/>
    </div>
  );
};

export default FlechaArriba;