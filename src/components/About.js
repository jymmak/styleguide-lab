import React from 'react';
import './css/about.css';
import CaRout from './CaRout';
import MainCard from './MainCard';
import group from './assets/images/group.png';
import ale from './assets/images/ale.png';
import jymma from './assets/images/jymma.png';
import kari from './assets/images/kari.png';
import mari from './assets/images/mari.png';


const About = () => (
  <div className="container">
    <div class="row">
      <div class="col-md-10 offset-md-2">
        <h1 class="col-md-4">Acerca de:</h1>
        <p class="col-md-8">Aprende sobre Laboratoria y nuestra guía de estilos.</p>
      </div>
      <div class="col offset-md-3">
        <CaRout />
      </div>
      <div class="col-md-10 offset-md-3">
        <h2 class="col-md-6">Principales componentes</h2>
        <MainCard />
      </div>



      <div class="col-md-10 offset-md-3">
        <h2 class="col-md-6">Participantes</h2>
        <div class="col-md-3 offset-md-1"><img className='group' src={group} alt='group'></img></div>
      </div>

      <div class="col-md-10  offset-md-3">
        <div class="row justify-content-around">
          <div class="col-5">
            <img className='ale' src={ale} alt='ale'></img>
            <p className='text'>Alejandra</p>
          </div>
          <div class="col-5">
            <img className='jymma' src={jymma} alt='jymma'></img>
            <p  className='text'>Jymma</p>

          </div>
        </div>

      </div>
      <div class="col-md-10  offset-md-3">
        <div class="row justify-content-around">
          <div class="col-5">
            <img className='kari' src={kari} alt='kari'></img>
            <p  className='text'>Karina</p>

          </div>
          <div class="col-5">
            <img className='mari' src={mari} alt='mari'></img>
            <p  className='text'>Mariela</p>

          </div>
        </div>

      </div>



    </div>

  </div>

)

export default About