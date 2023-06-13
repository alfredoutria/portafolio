import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

const ImagenAmpliada = ({ imageUrl }) => {

  return <ReactImageMagnify style={{width:'10px'}} {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: imageUrl,
    },
    largeImage: {
        src: imageUrl,
        width: 1200,
        height: 1800
    }
}} />;
};

export default ImagenAmpliada;