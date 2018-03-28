import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Example = (props) => {
  return (
    <Row>
      <Col sm="10">
        <div body>
          <CardTitle>Lab-Style</CardTitle>
          <CardText>Creado y diseñado por Lasthackatom, Laboratoria Design es un lenguaje de diseño que
            combina los principios clásicos del diseño exitoso junto con la innovación y la tecnología.
            El objetivo de Lasthackatom es desarrollar un sistema de diseño  que permita una experiencia
             de usuario  unificada en todos sus productos en las diversas  plataformas tech. </CardText>

        </div>
      </Col>

    </Row>
  );
};

export default Example;