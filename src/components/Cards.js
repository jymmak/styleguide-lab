import React from 'react';
import fucsia from './assets/images/fucsia.png';
import './css/cards.css';
import TwoCards from './TwoCards';
import ThreeCards from './ThreeCards';
import FourCards from './FourCards';
import foto1 from './assets/images/foto1.jpg';
import imagen2 from './assets/images/imagen2.png';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';

const Cards = () => (
  <div>
    <div className="container">
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <h1 class="col-md-4">Cards</h1>
          <p class="col-md-8">Las tarjetas te ayudan a plasmar la combinación  de contenido con imágenes y los brackets según las reglas  del branding actual.</p>
        </div>
        <div class="col-md-9 offset-md-3">
          <h2 class="col-md-6">Card Simple</h2>

        </div>

      </div>
    </div>
    <div class="col-md-8 offset-md-4 twocards">
      <TwoCards />
    </div>


    <div>
      <img className='fucsia' src={fucsia} alt='fucsia'></img>
    </div>
    <div class="col-md-8 offset-md-4 twocards">
      <ThreeCards />
    </div>

    <div className="container">
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <p>Falta tarjetas</p>
        </div>
      </div>
    </div>


    <div class="col-md-8 offset-md-4 twocards">
      <FourCards />
    </div>

    <div>
      <img className='fucsia' src={fucsia} alt='fucsia'></img>
    </div>

    <div className="container">
      <div class="row">
        <div class="col-md-6 offset-md-4">
          <Card inverse>
            <img className='foto1' src={foto1} alt='foto1'></img>
            <div className='marc'>
              <CardImgOverlay>
                <CardTitle><b>Este es un título principal</b></CardTitle>
                <CardText>Este es un párrafo de contenido donde  podrás colocar lo que desees  comunicar.</CardText>
              </CardImgOverlay>
            </div>
          </Card>

        </div>

      </div>

    </div>
    <div className="container fluid">
      <div class="row">
        <div class="col-md-6 offset-md-4">
          <Card inverse>
            <img className='imagen2' src={imagen2} alt='imagen2'></img>

            <CardImgOverlay>
              <CardTitle><b>Este es un título principal</b></CardTitle>
              <CardText>Este es un párrafo de contenido donde  podrás colocar lo que desees  comunicar.</CardText>
            </CardImgOverlay>

          </Card>

        </div>

      </div>

    </div>
  </div>
)

export default Cards