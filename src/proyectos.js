import './proyectos.css';
import stylo from './img/stylo.jpg';
import heladeria from './img/heladeria.jpg';
import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import ajax from './img/ajax.png';
import mysql from './img/mysql.png';
import php from './img/php.png';
import react from './img/reactjs.png';
import firebase from './img/firebase.png';
import python from './img/python.png';
import flask from './img/flask.png';
import sqlite from './img/sqlite.png';
import cinemas from './img/cinemas.png';
import javascript from './img/js.png';

const Proyectos = ()=>{

    return(
        <div className='proyectos'>
          <div className='textoProyectos'><a name={'proyectos'} >Proyectos</a></div>
          <div className='contenidoProyectos'>

          <div className='div_pagina1'>
          <a className='textoPagina1'  href='http://stylocolombiano.lovestoblog.com/'><img alt='Stylo Colombia'className='pagina1' name={'pagina1'} src={stylo}></img>y</a>   
          </div>
          <div className='informacion1'> 
          <div className='div_tecnologias1'><b>Tecnologias Utilizadas:</b>
            <p><img className='img' width={'50px'} src={html}/> <b>Html</b></p>
            <p><img className='img' width={'50px'} src={css}/> <b>Css</b> </p>
            <p><img className='img' width={'50px'} src={php}/> <b>Php</b> </p>
            <p><img className='img' width={'50px'} src={ajax}/> <b> Ajax</b></p>
            <p><img className='img' width={'50px'} src={mysql}/> <b> Mysql</b></p>
          </div>
          </div>
          
          <div className='div_pagina2'>
            <a className='textoPagina2' href='https://heladeria-5ee03.web.app/'><img alt='Heladeria Villa del Caribe' className='pagina2' src={heladeria}></img></a>
          </div>
          <div className='informacion2'>
          <div className='div_tecnologias2'><b>Tecnologias Utilizadas:</b>
           <p><img className='img' width={'50px'} src={html}/> <b>Html</b></p>
            <p><img className='img' width={'50px'} src={css}/> <b>Css</b> </p>
            <p><img className='img' width={'40px'} src={js}/> <b>JavaScript</b> </p>
            <p><img className='img' width={'50px'} src={react}/> <b> React Js</b></p>
            <p><img className='img' width={'50px'} src={firebase}/> <b> Firebase</b></p>
          </div>
          </div>

          <div className='div_pagina3'>
          <a className='textoPagina3'  href='https://starkcinemas.herokuapp.com/'><img alt='StarkCinemas'className='pagina3' name={'pagina3'} src={cinemas}></img></a>   
          </div>
          <div className='informacion3'> 
          <div className='div_tecnologias3'><b>Tecnologias Utilizadas:</b>
            <p><img className='img' width={'50px'} src={html}/> <b>Html</b></p>
            <p><img className='img' width={'50px'} src={css}/> <b>Css</b> </p>
            <p><img className='img' width={'50px'} src={javascript}/> <b>Javascript</b></p>
            <p><img className='img' width={'50px'} src={python}/> <b>Python</b></p>
            <p><img className='img' width={'50px'} src={flask}/> <b>Flask</b> </p>
            <p><img className='img' width={'50px'} src={sqlite}/> <b> Sqlite</b></p>
          </div>
          </div>
           
          </div>
          <div className='containerContacto'>
          <p className='contacto1'><a name={'contacto'} >Puedes contactarme mediante mi correo electronico</a></p>
          <p className='contacto2'>alfredoutria@hotmail.com</p>
          </div>
          <div className='final'>
              <p>Portafolio Desarrollado Por</p>
              <p>Alfredo Utria Garcia</p>
          </div>
        </div>
        

    );
}

export default Proyectos;