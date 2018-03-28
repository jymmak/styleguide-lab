import React from 'react';
import './css/botons.css';
import fucsia from './assets/images/fucsia.png';

const Botons = () => (
  <div>
    <div className="container">
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <h1 class="col-md-4">Buttons</h1>
          <p class="col-md-8">Los botones se usan en elementos para desarrollar una función.</p>
        </div>
        <div class="col-md-9 offset-md-3">
          <h2 class="col-md-6">Large</h2>
          <div class="col-md-8"><p>Son los botones más grandes, usados para elementos que necesitan mayor importancia. Puede usar cualquier boton y crear  su propio estilo.</p></div>
        </div>
        <div class="col-md-9 offset-md-3">
          <h3>Opciones</h3>
        </div>
        <div class="col-md-6  offset-md-3 box">


        </div>
        <div class="col-md-6  offset-md-3 box1">


        </div>

      </div>
    </div>
    <div>
      <img className='fucsia' src={fucsia} alt='fucsia'></img>
    </div>
    <div>
      <div class="col-md-9 offset-md-3">
        <h2 class="col-md-6">Medium</h2>
        <div class="col-md-8"><p>Son los botones más grandes, usados para elementos que necesitan mayor importancia. Puede usar cualquier boton y crear  su propio estilo.</p></div>
      </div>
      <div class="col-md-9 offset-md-3">
        <h3>Opciones</h3>
      </div>
      <div class="col-md-6  offset-md-3 box">


      </div>
      <div class="col-md-6  offset-md-3 box1">


      </div>

    </div>
    <div>
      <img className='fucsia' src={fucsia} alt='fucsia'></img>
    </div>
    <div>
      <div class="col-md-9 offset-md-3">
        <h2 class="col-md-6">Small</h2>
        <div class="col-md-8"><p>Son los botones más pequeños, usados para diseños más densos. Puede usar cualquier boton y crear  su propio estilo.</p></div>
      </div>
      <div class="col-md-9 offset-md-3">
        <h3>Opciones</h3>
      </div>
      <div class="col-md-6  offset-md-3 box">


      </div>
      <div class="col-md-6  offset-md-3 box1">


      </div>

    </div>
    <div>
      <img className='fucsia' src={fucsia} alt='fucsia'></img>
    </div>
    <div>
      <div class="col-md-9 offset-md-3">
        <h2 class="col-md-6">Desabilitado</h2>
        <div class="col-md-8"><p>Estos botones desabilitados,se aplican a todos los  tamaños y estilos. Puede usar cualquier boton y crear  su propio estilo.</p></div>
      </div>
      <div class="col-md-9 offset-md-3">
        <h3>Opciones</h3>
      </div>
      <div class="col-md-6  offset-md-3 box">


      </div>

    </div>





  </div>
)

export default Botons