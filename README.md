<p align="center">
  <a href="https://www.laboratoria.la/" rel="noopener" target="_blank"><img width="200" src="assets/l-amarilloblanco.png" alt="Laboratoria logo"></a></p>
</p>

<h1 align="center">stylelab</h1>

Presentamos la guía de estilos, la cual te ayudará con el desarrollo de los diferentes productos digitales propios de la marca Laboratoria, dónde podrás realizar piezas de manera rápida con todos los elementos del branding actual.

<div align="">

## Soporte de Stylelab

Stylelab es un proyecto de Laboratoria open source. Es un proyecto desarrollado como parte del Bootcamp 2017-II, un trabajo colaborativo entre desarrolladoras Front-End y UX Designers.  

## Tabla de contenido  

- [Instalación](#instalación)

### Documentación  

- [Uso de componente](#uso-de-componente)
- [Componente Button](#componente-button)
- [Componente Typography](#componente-typography)
- [Componente Card](#componente-card)

## Instalación

stylelab está disponible en [npm package](https://www.npmjs.com/package/stylelab).

```sh
npm install stylelab
```

## Uso de componente  

```jsx
import React from 'react';
import { Button } from 'stylelab';

function App() {
  return (
    <Button yellow bold>
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```  

#### Importando varios componentes  

```jsx
import { Button, Typography, Card } from 'stylelab';

}

```
## Componente Button  

Opciones: Se modifica el estilo del botón agregando los siguientes atributos:  
  `Colores de fondo:` yellow, green o pink.  
  `Tamaño:` big, medium o small.  
  `Color de Fuente:` white.  
  *El color negro de la fuente ya esta predetermiando.  
  `Grosor de fuente:` bold.  

**Ejemplo**  

<img width="150px" height='47px' src="assets/btn-small.png" alt="Laboratoria logo">

```jsx
import React from 'react';
import { Button } from 'stylelab';

function App() {
  return (
    <Button yellow small>
      Laboratoria
    </Button>
    <Button pink medium bold>
      Laboratoria
    </Button>
    <Button green big white>
      Laboratoria
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```   








## Sobre el Uso

Aquí hay un ejemplo rápido para que puedas empezar, **Esto es lo que necesitas**:

```jsx
import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';

function App() {
  return (
    <Button variant="raised" color="primary">
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
```

## Documentación

Revisa nuestra [documentación website](https://material-ui-next.com/).

## Del Desarrollo

#### Benchmarking

Nos basamos en la estructura de flujo de los frameworks reconocidos(Bootstrap, Materialize, Foundation, Pure )

#### De la Definición

Se define los componentes principales para ésta primera versión de desarrollo:

* Botones
* Tipografías
* Tarjetas simples y con fotografías
* Encabezados

#### Del Flujo de Desarrollo

Se define de acuerdo al Benchmarking el flujo más óptimo para el desarrollo y visualización para el usuario.

![pizarra](https://user-images.githubusercontent.com/32303418/38009272-fc747602-3218-11e8-8f9c-f982fc522957.jpeg)

![flujo](https://user-images.githubusercontent.com/32303418/38009273-fc9488fc-3218-11e8-9297-71d00fb1aba5.jpeg)

#### Del Diseño

Como parte del reto se utiliza el manual del [branding actual]("assets/manual.pdf") para diseño, tipografía, logos, paleta de color y brackets.

![branding](https://user-images.githubusercontent.com/32303418/38009569-8431ea92-321a-11e8-9bd9-e5eb0234e202.png)

## Integrantes

* Alejandra Cabrera(Developer Front-End)
* Jymma Mogollón(Developer Front-End)
* Karina Buhezo(UX Designer)
* Mariela Cerna(UX Designer)


## Agradecimientos

Se agradece el soporte de Laboratoria y el reto de llevar a cabo éste producto con un entregable realizable y siguiendo los lineamientos de la marca.

## Licencia

Este proyecto se realiza bajo los términos y condiciones propias de [Laboratoria](http://www.laboratoria.la/).
