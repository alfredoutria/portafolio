import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imagen from '../img/aaa.jpg'

const Carousel = () => {
  const settings = {
    dots: false, // Oculta los puntos de navegación
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={imagen} width={'100px'} alt="Image 1" />
      </div>
      <div>
        <img src={imagen} width={'100px'}  alt="Image 2" />
      </div>
      <div>
        <img src={imagen} width={'100px'} alt="Image 3" />
      </div>
    </Slider>
  );
};

export default Carousel;