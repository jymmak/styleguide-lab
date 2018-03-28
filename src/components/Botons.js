import React from 'react';
import './css/botons.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import allboton from './assets/images/allboton.png';

const Botons = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-10 offset-md-2">
          <h1 className="col-md-4">Buttons</h1>
          <p className="col-md-8">Los botones se usan en elementos para desarrollar una función.</p>
        </div>

        <div className="row">
          <div className="col-md-10 offset-md-4">

            <div>
              <CardTitle><b>Opciones: Se modifica el estilo del botón agregando los siguientes atributos:</b></CardTitle>
              <CardText>Colores de fondo: yellow, green o pink..</CardText>
              <CardText>Tamaño: big, medium o small.</CardText>
              <CardText>Color de Fuente: white.</CardText>
              <CardText>*El color negro de la fuente ya esta predetermiando.</CardText>
              <CardText>Grosor de fuente: bold..</CardText>
             
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-10 offset-md-2">
      <div class="col-md-3 offset-md-1"><img className='allboton' src={allboton} alt='allboton'></img></div>
       
      </div>

    </div>


  </div>






)

export default Botons