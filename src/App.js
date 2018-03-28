import React from 'react';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import './App.css';


// Components
import Header from './components/Header';
import About from "./components/About";
import Botons from "./components/Botons";
import Fonts from "./components/Fonts";
import Cards from "./components/Cards";


const App = () => (

  <div className="App">
    <Header />
    <div>
      <nav class="grupo menu lateral">

        <ul class="menu grupo archivos publicos">
          <li class="item acerca">
            <a class="enlace icon-fa" href="#"><Link to='/about'>Acerca de</Link></a>
          </li>
          <li class="item botones">
            <a class="enlace icon-fa " href="#"><Link to='/botons'>Botones</Link></a>
          </li>

          <li class="item tipografias">
            <a class="enlace icon-fa" href="#"><Link to='/fonts'>Tipografías</Link></a>
          </li>
          <li class="item tarjetas">
            <a class="enlace icon-fa focus" href="#"><Link to='/cards'>Tarjetas</Link></a>
          </li>


        </ul>

      </nav>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/botons" component={Botons} />
        <Route path="/fonts" component={Fonts} />
        <Route path="/cards" component={Cards} />
     
      </Switch>
    </div>


  </div>

);


export default App;
