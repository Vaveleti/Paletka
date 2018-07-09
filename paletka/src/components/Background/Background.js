import React, { Component } from 'react';
import './Background.css'

class Background extends Component {

  constructor(props){
    super(props);
    this.state = {
      children: props.children,
      height_Window: window.innerHeight,
      width_Window: window.innerWidth,
    }
  }

  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({
      height_Window: window.innerHeight,
      width_Window: window.innerWidth
    })
  }


  render() {

    const { children, height_Window, width_Window} = this.state;

    return(
      <div className='background'>
        {children}
        <p>
          {height_Window} {width_Window}
        </p>
      </div>
    );
  }

}

export default Background;
