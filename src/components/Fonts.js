import React from 'react';
import fucsia from './assets/images/fucsia.png';
import './css/fonts.css';

const Fonts = () => (
  <div>
    <div className="container">
      <div class="row">
        <div class="col-md-10 offset-md-2">
          <h1 class="col-md-4">Tipografías</h1>
          <p class="col-md-8">Las tipografías son para dar tamaño al texto o párrafos.</p>
        </div>
        <div class="col-md-9 offset-md-3">
          <h2 class="col-md-6">Title</h2>
          <div class="col-md-8"><p>Proporcionamos un estilo básico en las etiquetas de encabezado. En el ejemplo,
            puede  ver los diferentes tamaños  de  las 6 etiquetas de encabezado. La fuente  es <b>Bitter</b> Regular, que
           se utilizará para títulos y otros mensajes que merecen  ser desctacados como pueden ser sumillas o testimoniales</p></div>
        </div>
        <div class="col-md-9 offset-md-3">
          <h3>Opciones</h3>
        </div>
        <div class="col-md-6  offset-md-3 box">


        </div>

      </div>
    </div>
    <div>
      <img className='fucsia' src={fucsia} alt='fucsia'></img>
    </div>
    <div>
      <div class="col-md-9 offset-md-3">
        <h2 class="col-md-6">Paragraph</h2>
        <div class="col-md-8"><p>La otra tipografía  de Laboratoria es la <b>Open Sans Regular</b>, que se utilizará para  números que sean titulares y cuerpos de texto .</p></div>
      </div>
      <div class="col-md-9 offset-md-3">
        <h3>Opciones</h3>
      </div>
      <div class="col-md-6  offset-md-3 box">


      </div>

    </div>
  
    <div className="br">
      <div class="col-md-9 offset-md-3">
        <h2 class="col-md-6">Bold</h2>
        <div class="col-md-8"><p>Para enfatizar un fragmento de texto con un peso de fuente más pesado.</p></div>
      </div>
      <div class="col-md-9 offset-md-3">
        <h3>Ejemplo:</h3>
      </div>
      <div class="col-md-5  offset-md-4 box3">

      </div>
    </div>
 
    <div className="br">
      <div class="col-md-9 offset-md-3">
        <h2 class="col-md-6">Italic</h2>
        <div class="col-md-8"><p>Para enfatizar un fragmento de texto con cursiva.</p></div>
      </div>
      <div class="col-md-9 offset-md-3">
        <h3>Ejemplo:</h3>
      </div>
      <div class="col-md-5  offset-md-4 box3">

      </div>
     
    </div>

    
    <div className="br">
      <div class="col-md-9 offset-md-3">
        <h2 class="col-md-6">Subrayado</h2>
        <div class="col-md-8"><p>Para enfatizar un  texto o fragmento de texto, con subrayado.</p></div>
      </div>
      <div class="col-md-9 offset-md-3">
        <h3>Ejemplo:</h3>
      </div>
      <div class="col-md-5  offset-md-4 box3">

      </div>
    </div>




  </div>
)

export default Fonts