import React from 'react';
import './css/cards.css';
import allcard from './assets/images/allcard.png';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Cards = () => (
  <div>
    <div className="container">
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <h1 class="col-md-4">Card</h1>
        </div>

        <div class="row">
          <div class="col-md-10 offset-md-4">

            <div>
              <CardTitle><b>Opciones: Se modifica el estilo agregando los siguientes atributos: Atributos de tamaño</b></CardTitle>
              <CardText>big small</CardText>
              <CardTitle><b>Atributo de fondo de color</b></CardTitle>
              <CardText>yellow, green o pink</CardText>
             
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10 offset-md-2">
      <div class="col-md-3 offset-md-1"><img className='allcard' src={allcard} alt='allcard'></img></div>
       
      </div>

    </div>


  </div>

)

export default Cards