const cargar = () => {
   let animado = document.querySelectorAll('.textoContenido');

	const mostrarScroll = ()=>{
   let scrollTop = document.documentElement.scrollTop;
   for(var i = 0; i < animado.length; i++){
      let alturaAnimado = animado[i].offsetTop;
      if(alturaAnimado - 500 < scrollTop){
          animado[i].style.opacity = 1;
          animado[i].style.transition = "2s";
          animado[i].classList.add('mostrarArriba');
        console.log("scrollTop " + scrollTop);

      }
   }
}

window.addEventListener('scroll', mostrarScroll);
}

window.onload = cargar;