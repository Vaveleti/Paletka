import React, { Component } from 'react';
import Racket from './components/Racket/Racket'
import Background from './components/Background/Background'

class Main extends Component {

  render() {
    return (
      <div>
        <Background>
          <h1>DUPO CZORNO</h1>
          <Racket />
          <Racket />
        </Background>
      </div>
    );
  }

}

export default Main;

/*
Main.js is used as a manager of components.

*/
