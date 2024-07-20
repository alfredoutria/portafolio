import { useState } from 'react';
import imagenMenu from '../img/menu.png';

function MenuNavBarMovil() {

  const [estilo, setEstilo] = useState();
  const [Estado, setEstado] = useState(true);

  

  const Menu = ()=>{

   

    if(Estado == 'true'){                         // X    Y
    const cambiarEstilos = {transform: 'translate(550px, -700px)', transition:'ease-in .7s', }
    setEstilo(cambiarEstilos);
       setEstado('false');
       console.log("segundo " + Estado);

    }else{

      const cambiarEstilos = {transform: 'translate(-500px, 90px)', transition:'ease-in .7s',}
      setEstilo(cambiarEstilos);
      setEstado('true');
      console.log("primero " + Estado);

    }

}
      
  return (
    <>
    <div className='divMenu' onClick={Menu}>
      <img className='imagenbotonMenu' src={imagenMenu}/>
      <div className='nombreMenu' data-aos="fade-right" >Alfredo Utria Garcia</div>
      <div className='profesionMenu' data-aos="fade-left">Desarrollador de Aplicaciones</div>
      <div className='profesionMenu' data-aos="fade-left"> Soporte TI</div>
    </div>
    <nav className='navMovil'  style={estilo} >
      <div className='iconoCerrar' onClick={Menu} >X</div>
          <ul className="ulMovil" >
            <li className='liMovil'><a className='a_liMovil' href="#acerca">Inicio</a></li>
            <li className='liMovil' ><a className='a_liMovil' href="#acerca">Acerca de mi</a></li>
            <li className='liMovil' ><a className='a_liMovil' href="#proyectos">Proyectos</a></li>
            <li className='liMovil' ><a className='a_liMovil' href="#contacto">Contacto</a></li>
          </ul>
    </nav>
    </>
  );
}

export default MenuNavBarMovil;