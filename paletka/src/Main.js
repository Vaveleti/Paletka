import React, { Component } from 'react';
import Racket from './components/Racket/Racket'
import Background from './components/Background/Background'
import Ball from './components/Ball/Ball'

class Main extends Component {

  render() {
    return (
      <div>
        <Background>
          <Racket />
          <Ball />
        </Background>
      </div>
    );
  }

}

export default Main;

/*
Main.js is used as a manager of components.

*/
