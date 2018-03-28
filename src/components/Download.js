import React from 'react';
import './css/botons.css';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import EndDown from './EndDown';



const Download = () => (
  <div>
    <div className="container">
      <div class="row">
        <div class="col-md-8 offset-md-3">
          <h1>Guía de estilos Laboratoria, Stylelab</h1>
        </div>
      </div>
    </div>

    <div className="container">
      <div class="row">
        <div class="col offset-md-3">

          <Row>

            <Col sm="10">

              <div>
                Encontraras una serie de  ayudas para utilizar de manera óptima los recursos  y generar productos
               de calidad  al mejor estilo  Laboratoria. Crea proyectos de nivel  en web  con la biblioteca  de componentes
             front-end, con herramientas HTML, CSS, JS y REACT.
                </div>
              <div class="col offset-md-4">
                <Button><b>Descargar</b></Button>
              </div>

            </Col>


          </Row>
        </div>
      </div>


      <div className="container">
        <div class="row">
          <div className="col-md-10 offset-md-3 end">
            <EndDown />
          </div>
        </div>
      </div>

    </div>

  </div>



);
export default Download