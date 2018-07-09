import React, { Component } from 'react';
import './Ball.css'

class Ball extends Component {
  constructor(props){
    super(props);

    this.state = {
      x_ball_position: 50,
      y_ball_position: 50,
      speed_vector: {
        x: 2,
        y: 2
      }

    }
  }

  componentDidMount(){
    this.timer = setInterval( () => this.initateBallMovement(), 10);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  initateBallMovement(){
    this.checkBallHitBoxes();
    this.ballMovementTick();
  }

  ballMovementTick(){
    this.setState( prevState => {
      return {
        x_ball_position: prevState.x_ball_position + this.state.speed_vector.x,
        y_ball_position: prevState.y_ball_position + this.state.speed_vector.y
      }
    });

  }

  checkBallHitBoxes(){
    let x_racket_position = document.getElementById("playerRacket").style.left;
    x_racket_position = x_racket_position.substring(0, x_racket_position.length - 2);
    let y_racket_position = (document.getElementById("playerRacket").style.top);
    y_racket_position = y_racket_position.substring(0, y_racket_position.length - 2);

    let y_ball_position = this.state.y_ball_position;
    let x_ball_position = this.state.x_ball_position;

    const RADIUS_BALL = 10;
    const BACKGROUND_RIGHT_X_END = 300;
    const BACKGROUND_LEFT_X_END = 0;
    const BACKGROUND_DOWN_Y_END = 400;
    const BACKGROUND_UP_Y_END = 0;
    const RACKET_WIDTH = 50;

    console.log(y_ball_position + '\n' + y_racket_position);

    if( y_ball_position + RADIUS_BALL/2 >= y_racket_position
      && x_ball_position + RADIUS_BALL/2 >= x_racket_position
      && x_ball_position + RADIUS_BALL/2 <= x_racket_position + RACKET_WIDTH
    ){
      this.setState( prevState => {
        return {
          speed_vector: {
              x: prevState.speed_vector.x,
              y: prevState.speed_vector.y * (-1)
            }
          }
        })

      }

      else if(y_ball_position <= BACKGROUND_UP_Y_END || y_ball_position + RADIUS_BALL >= BACKGROUND_DOWN_Y_END){
        this.setState( prevState => {
          return {
            speed_vector: {
                x: prevState.speed_vector.x,
                y: prevState.speed_vector.y * (-1)
              }
            }
          })

      }

      else if(x_ball_position <= BACKGROUND_LEFT_X_END || x_ball_position + RADIUS_BALL >= BACKGROUND_RIGHT_X_END){
        this.setState( prevState => {
          return {
            speed_vector: {
                x: prevState.speed_vector.x * (-1),
                y: prevState.speed_vector.y
              }
            }
          })

      }

  }





  render(){
      const ball_pos = {
        top: this.state.y_ball_position,
        left: this.state.x_ball_position
      }


      return(
        <div className="ball" style={ball_pos}></div>
      )
  }
}


export default Ball;
