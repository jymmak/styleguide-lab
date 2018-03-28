import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import foto1 from './assets/images/foto1.jpg';

const Example = (props) => {
  return (
    <Row>

      <Col sm="4">
        <Card body>
          <img className='foto1' src={foto1} alt='foto1'></img>
          <CardTitle><b>Este es un título principal</b></CardTitle>
          <CardText>Este es un párrafo de contenido donde  podrás colocar lo que desees  comunicar.</CardText>

        </Card>
      </Col>

      <Col sm="4">
        <Card body>
          <img className='foto1' src={foto1} alt='foto1'></img>
          <CardTitle><b>Este es un título principal</b></CardTitle>
          <CardText>Este es un párrafo de contenido donde  podrás colocar lo que desees  comunicar.</CardText>
          <Button><b>Soy un Botón</b></Button>
        </Card>
      </Col>

    </Row>
  );
};

export default Example;