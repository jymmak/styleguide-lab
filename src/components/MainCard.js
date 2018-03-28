import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import title2 from './assets/images/title2.png';
import typography from './assets/images/typography.png';
import redfont from './assets/images/redfont.png';

const Example = (props) => {
  return (
    <CardDeck>
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h3 className="title-botones text-center">Botones</h3>
            <Card>
              <CardBody>
                <CardText>Los botones predefinidos, mantienen los colores de Laboratoria, y en tamaños large y small.</CardText>
                <Card>
                  <img className='title2' src={title2} alt='title2'></img>
                </Card>
              </CardBody>
            </Card>
          </div>
         
          <div className="col-md-4">
            <h3 className="title-botones text-center">Tarjetas</h3>
            <Card>
              <CardBody>
                <CardText>Las tarjetas son un medio conveniente  de mostrar  contenido compuesto por diferentes tipos de objetos.</CardText>
                <Card>
                  <img className='redfont' src={redfont} alt='redfont'></img>
                
                </Card>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-8 tipo">
            <h3 className="title-botones text-center">Tipografías</h3>
            <Card>
              <CardBody>
                <CardText>La tipografía mantiene los tamaños predefinidos, tanto para títulos como párrafos utilizando sus propias fuentes.</CardText>
                <Card>
               <img className='typography' src={typography} alt='typography'></img>

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