import React, { Component } from 'react';
import './Racket.css'
class Racket extends Component {

  constructor(props){
    super(props);

    this.state = {
      x_racket_position: 125,
      y_racket_position: 370
    }
  }

  componentDidMount(){
    window.addEventListener(  "keydown" , this.set_racket_position.bind(this) );
  }


  componentWillUnmount(){
    window.removeEventListener( "keydown" , this.set_racket_position.bind(this) );
  }

  set_racket_position( event ){
    console.log(event.keyCode);

    const RACKET_WIDTH = 50
    const BACKGROUND_RIGHT_X_END = 300;

    const RIGHT_LIMIT = BACKGROUND_RIGHT_X_END - RACKET_WIDTH;
    const LEFT_LIMIT = 0;

    let x_racket_position = this.state.x_racket_position;

    if( ( event.keyCode === 39 || event.keyCode === 68 ) && x_racket_position < RIGHT_LIMIT ){
      this.setState( prevState => {
        return {
          x_racket_position: prevState.x_racket_position + 5
        }
      });

    }

    else if ( ( event.keyCode === 37 || event.keyCode === 65 ) && x_racket_position > LEFT_LIMIT ) {
      this.setState( prevState => {
        return {
          x_racket_position: prevState.x_racket_position - 5
        }
      });
    }

  }

  render(){
    const racket_pos = {
      top: this.state.y_racket_position,
      left: this.state.x_racket_position
    }

    return(
      <div className='racket' style={racket_pos} id='playerRacket'></div>
    );
  }

}

export default Racket;
