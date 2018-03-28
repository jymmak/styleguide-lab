import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/maincard.css';
import foto1 from './assets/images/foto1.jpg';

const Example = (props) => {
  return (
    <CardDeck>
      <div className="container">
        <div class="row">

          <div class="col-md-4">
            <h3 class="title-botones text-center">Botones</h3>
            <Card>
              <CardBody>
                <CardText>Los botones predefinidos, mantienen los colores de Laboratoria, y en tamaños large y small.</CardText>
                <Card>
                  <img className='foto1' src={foto1} alt='foto1'></img>


                </Card>
              </CardBody>
            </Card>
          </div>
          <div class="col-md-4">
            <h3 class="title-botones text-center">Tipografías</h3>
            <Card>
              <CardBody>
                <CardText>La tipografía mantiene los tamaños predefinidos, tanto para títulos como párrafos utilizando sus propias fuentes.</CardText>
                <Card>
                  <img className='foto1' src={foto1} alt='foto1'></img>


                </Card>
              </CardBody>
            </Card>
          </div>
          <div class="col-md-4">
            <h3 class="title-botones text-center">Tarjetas</h3>
            <Card>
              <CardBody>
                <CardText>Las tarjetas son un medio conveniente  de mostrar  contenido compuesto por diferentes tipos de objetos.</CardText>
                <Card>
                  <img className='foto1' src={foto1} alt='foto1'></img>
                  <CardText>Este es un título principal.</CardText>

                </Card>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>


    </CardDeck>
  );
};

export default Example;