import React, { Component } from 'react';
import './App.css';
import {Button} from './components/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: [232, 25, 180]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(any) {
    return 'rgb(' +any.join(',') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  }

  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }
    
  render() {

    return (
      <div className='center'>
        <h1 className = {this.isLight() ? 'text-white' : 'text-dark'}>
          The color chosen is {this.formatColor(this.state.color)}
        </h1>
        <Button onClick={this.handleClick} light={this.isLight()}/>
      </div>
    );
  }
}

export default App;
