import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExemploSlide1 from '../Servicos/Imagens/ExemploSlide1.jpg';
import ExemploSlide2 from '../Servicos/Imagens/ExemploSlide2.jpg';
import ExemploSlide3 from '../Servicos/Imagens/ExemploSlide3.jpg';

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img src={ExemploSlide1} alt="" srcset="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src={ExemploSlide2} alt="" srcset="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ExemploSlide3} alt="" srcset="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;
