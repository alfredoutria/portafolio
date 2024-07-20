import MenuNavBar from "./componentes/MenuNavBar";
import MenuNavBarMovil from "./componentes/MenuNavBarMovil";
import IconoWhatsapp from "./componentes/IconoWhatsapp";
import Portada from "./componentes/Portada";
import SobreMiHabilidades from "./componentes/SobreMiHabilidades";
import Proyecto from "./componentes/Proyecto";
import Contacto from "./componentes/contacto";
import PiePagina from "./componentes/piePagina";
import { useEffect } from 'react';
import DescargarCV from "./componentes/descargarHojaVida";
import FechaArriba from "./componentes/fechaArriba";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Principal = () => {

    useEffect(() => {
        AOS.init({
          duration: 3000,
        });
    
        window.addEventListener('scroll', RefrescarScroll);
    
        return () => {
          window.removeEventListener('scroll', RefrescarScroll);
        };
      }, []);
    
      const RefrescarScroll = () => {
        // Calcula el offset desde la parte superior de la ventana hasta el elemento objetivo
        const targetOffset = document.getElementById('ScrollContenidoSobreMi').offsetTop;
    
        // Calcula la posición actual del scroll en la ventana
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
        // Calcula la altura visible de la ventana
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
        // Comprueba si el elemento objetivo está dentro del rango de visualización
        if (scrollPosition + windowHeight > targetOffset) {
          // Reinicia AOS para volver a activar la animación
          AOS.refresh();
        }
      };

    return (
        <>
        <MenuNavBar/>
        <MenuNavBarMovil/>
         <Portada/>
         <SobreMiHabilidades/>
         <Proyecto/>
         <Contacto/>
          <PiePagina/>
         { /*<DescargarCV/>*/}
          <FechaArriba/>
          <IconoWhatsapp/>
    
        </>
    )

}

export default Principal;
