import React from 'react';
import { useEffect } from 'react';
import portada from '../img/PortadaPortafolio.png'
//import AOS from 'aos';
//import 'aos/dist/aos.css';

const Portada = () =>{

 /* useEffect(()=>{
    AOS.init({
      duration: 3000
    });

    const RefrescarScroll = () => {
      AOS.refresh();
    };

    document.addEventListener('scroll', RefrescarScroll);

    return () =>{
      document.removeEventListener('scroll', RefrescarScroll);
    };
  },[]); */

  

    return(
    
     <div className='contenedorPortada'>
     <div className='portada'><a name="inicio"><img src={portada} className='imagenPortada' /></a>
     </div>
     <div className='div_portada'>
         <div className="portadaNombre" id='portadaNombre' data-aos="zoom-out">Alfredo Utria Garcia</div>
          <div className='portadaProfesion' id='portadaProfesion' data-aos="fade-left">Desarrollador de Aplicaciones | Soporte TI</div>
      </div>
      </div>
   
  )

}

export default Portada