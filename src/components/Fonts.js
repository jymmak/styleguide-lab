import React from 'react';
import fucsia from './assets/images/fucsia.png';
import './css/fonts.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import font1 from './assets/images/font1.png';
import font2 from './assets/images/font2.png';

const Fonts = () => (
  <div>
    <div className="container">
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <h1 class="col-md-4">Tipografía</h1>
          <p class="col-md-8">Demasiados estilos/tamaños de letras pueden arruinar cualquier diseño. Stylelab cuenta con una
          escala tipográfica, tiene un conjunto limitado de tamaños.</p>
        </div>

        <div class="row">
          <div class="col-md-8 offset-md-3">

            <div>
              <CardTitle><b>Opciones: Se modifica el estilo agregando los siguientes atributos: Atributos de tamaño title1: Título principal.</b></CardTitle>
              <CardText>title2: Título secundario.</CardText>
              <CardText>title3: Título terciario.</CardText>
              <CardText>phrase: Usado en frases. body body2</CardText>
              <CardTitle><b>Atributo de colores</b></CardTitle>
              <CardText>yellow, green o pink</CardText>
              <CardTitle><b>Atributo  para subrayado</b></CardTitle>
              <CardText>under</CardText>
              <CardTitle><b>Atributo grosor de fuente</b></CardTitle>
              <CardText>bold</CardText>

            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <div class="col-md-3 offset-md-1"><img className='font1' src={font1} alt='font1'></img></div>

        </div>
        <div class="col-md-10 offset-md-2">
          <div class="col-md-3 offset-md-1"><img className='font2' src={font2} alt='font2'></img></div>

        </div>
      </div>
    

    </div>


  </div>
)

export default Fonts