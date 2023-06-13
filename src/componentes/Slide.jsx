
import imagen from '../img/aaa.jpg'

import React, { useState, useEffect } from 'react';

const MovingImages = () => {
  const [images, setImages] = useState([
    { id: 1, src: imagen, position: 0 },
    { id: 2, src: 'image2.jpg', position: 0 },
    { id: 3, src: 'image3.jpg', position: 0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(prevImages => {
        const updatedImages = prevImages.map(image => ({
          ...image,
          position: image.position + 1, // Incrementa la posición de cada imagen
        }));
        const lastImage = updatedImages[updatedImages.length - 1];
        if (lastImage.position >= window.innerWidth) {
          updatedImages.forEach(image => {
            image.position = -image.position; // Reinicia la posición cuando alcanza el ancho de la ventana
          });
        }
        return updatedImages;
      });
    }, 10); // Intervalo de actualización en milisegundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div style={{ overflow: 'hidden' }}>
      {images.map(image => (
        <img
          key={image.id}
          src={image.src}
          width={'100px'}
          alt="Moving Image"
          style={{ marginLeft: image.position, display: 'inline-block' }}
        />
      ))}
    </div>
  );
};

export default MovingImages;