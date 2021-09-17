import React, { Component } from "react";

class ComponentJoke extends Component {
  constructor() {
    super();
    console.log('constructor');

    this.setState = {
      piada: 'Minha piada',
    }
  }

  componentDidMount() {
    console.log('mount');
  }

  render() {
    console.log('render');
    return (
      <span>{this.setState.piada}</span>
    )
  }
}

export default ComponentJoke;
