import './App.css';
import { useState } from 'react';
import imagen from './img/imagen.jpg';
import foto from './img/miFoto.jpg';
import fotoAcerca from './img/acerca.png';
import tecnologias from './img/tecnologias.png';
import tecnologias_moviles from './img/tecnologias-moviles.png';
import './animacion.js';
import logoMenu from './img/menu.ico';
function App() {

  const [estilo, setEstilo] = useState();
  const [Estado, setEstado] = useState();
  console.log(Estado);
  const Menu = ()=>{

     

      const cambiarEstilos = {transform: 'translate(300px)', transition:'ease-in .7s'}
      setEstilo(cambiarEstilos);
      setEstado('true');

      if(Estado == 'true'){
      const cambiarEstilos = {transform: 'translate(-300px)', transition:'ease-in .7s'}
      setEstilo(cambiarEstilos);
         setEstado('false');
      }

  }

  return (
    <div className='contenido_app'>
      <a name={'inicioMovil'} ></a>
      <a name={'inicio'} ></a>
      <div className='contenedor'>
      
      <div className='portafolio'>Portafolio<div className='contendor-menu'><img className={'logoMenu'} src={logoMenu}  onClick={Menu} /></div></div>
      <img className='imagen' src={imagen}></img>

        <ul className='menu-escritorio'>
          <ul className='ulE'>
           <li className='li-escritorio'><a className='linkInicio' href='#inicio'>Inicio</a></li>
           <li className='li-escritorio'><a className='linkAcerca' href='#acerca'>Acerca de Mi</a></li>
           <li className='li-escritorio'><a className='linkProyectos' href='#proyectos'>Proyectos</a></li>
           <li className='li-escritorio'><a className='linkContacto' href='#contacto'>Contacto</a></li>
          </ul>
        </ul>

        <div className={'ulMovil'} style={estilo}>
          <ul className='ulM'>
           <li className='ulLi'><a className='linkInicioMovil' href='#inicioMovil' onClick={Menu}>Inicio</a></li>
           <li className='ulLi' ><a className='linkAcercaMovil' href='#acercaMovil' onClick={Menu}>Acerca de Mi</a></li>
           <li className='ulLi'><a className='linkProyectosMovil' href='#proyectos' onClick={Menu}>Proyectos</a></li>
           <li className='ulLi'><a className='linkContactoMovil' href='#contacto' onClick={Menu}>Contacto</a></li>
          </ul>
          </div>

          
          <div className='imagenBase'>
          <img  className='foto' src={foto}></img>
          <p className='textoNombre'>Alfredo Utria Garcia</p>
          <p className='textoProfesion'>Desarrollador Web</p>
          </div>
      
         
      </div>
       <div className='textoAcercademi'><a name={'acerca'}>Acera de mi</a></div>
       <img className='fotoAcerca' src={fotoAcerca}></img>
         <div className='contenido'>
         <p className='textoContenido'>Soy tecnico en analisis y programación de computadores.
         <br></br>Soy una persona proactiva y recursiva que le gusta aprender constantemente y
          he desarrollado varios proyectos en donde he desarrollado
          tanto para la parte del front-end como el back-end
           <br></br>
           Algunas de las tecnologias que manejo son: 
       
        </p>
        <div className='iconos'>
        <img className='tecnologias' src={tecnologias}  title='Html'></img>
        
        </div>
        </div>
        <div className='textoAcercademiMovil'><a name={'acercaMovil'}>Acera de mi</a></div>
        <div className='contenido-movil'>
         <p className='textoContenido-movil'>Soy tecnico en analisis y programación de computadores.
         <br></br>Soy tecnico en analisis y programación de computadores
          Soy una persona proactiva y recursiva que le gusta aprender constantemente y
          he desarrollado varios proyectos en donde he desarrollado
          tanto para la parte del front-end como el back-end
  
           <br></br>
           Algunas de las tecnologias que manejo son: 
       
        </p>
        <div className='iconos-movil'>
        <div><img className='tecnologias_moviles' src={tecnologias_moviles}  title='Html'></img></div>
        <br></br>
        </div>
        </div>
       
        
    </div>

    
    
  );
}

export default App;
