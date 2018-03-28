import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/end.css';
import desk from './assets/images/desk.jpg';


const Example = (props) => {
  return (
    <CardDeck>
      <div className="container">
        <div class="row end">
          <div className="col-md-4 ">
            <Card>
              <CardBody>
                <CardTitle>Instalación</CardTitle>
                <p>$ npm install Stylelab</p>
                <p>$ npm install Stylelab -v1.0.0.</p>

              </CardBody>
              <Button>Ver README de instalación</Button>

            </Card>

          </div>


          <div class="col-md-4">
            <Card>
              <CardBody>
                <CardTitle>Tips</CardTitle>
                <p className="document">El npm incluye los estilos de CSS, así que sólo debes preocuparte  por crear un excelente producto</p>

              </CardBody>
              <Button>Ir a la documentación </Button>
            </Card>
          </div>

          <div class="col-md-4">
            <Card>
              <CardBody>
                <CardTitle>Ejemplos</CardTitle>
                <img className='desk' src={desk} alt='desk'></img>

              </CardBody>
              <Button>Ir a los ejemplos</Button>
            </Card>
          </div>





        </div>
      </div>


    </CardDeck>
  );
};

export default Example;