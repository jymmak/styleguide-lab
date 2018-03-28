import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Example = (props) => {
  return (
    <Row>
    
        <Col sm="4">
          <Card body>
            <CardTitle><b>Este es un título principal</b></CardTitle>
            <CardText>Este es un párrafo de contenido donde  podrás colocar lo que desees  comunicar.</CardText>

          </Card>
        </Col>
        <Col sm="4">
          <Card body>
            <CardTitle><b>Este es un título principal</b></CardTitle>
            <CardText>Este es un párrafo de contenido donde  podrás colocar lo que desees  comunicar.</CardText>

          </Card>
        </Col>
    
    </Row>
  );
};

export default Example;