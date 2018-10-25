import React, {Component} from 'react';
import '../index.css';

export class Button extends Component {
  render() {
    return(
      <button onClick={
        this.props.onClick} 
        className={this.props.light ? 'btn btn-warning' : 'btn btn-primary'}>
        Refresh
      </button>
    );
  }
}