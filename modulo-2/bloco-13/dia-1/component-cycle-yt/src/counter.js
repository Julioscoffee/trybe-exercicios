import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);

    this.state = {
      counter: 0,
    }

    this.increment = () => this.setState({counter: this.state.counter+1})
    this.decrement = () => this.setState({counter: this.state.counter-1})
  }

  componentDidMount() {
    console.log('comp mount');
    console.log('----------------');
  }

  render() {
    console.log('render');
    const { counter } = this.state;

    return(
      <main>
        <button onClick={this.increment}>Aumentar</button>
        <button onClick={this.decrement}>Diminuir</button>
        Contador: { counter }
      </main>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('comp update');
    console.log('---------------');
  }

  componentWillUnmount() {
    console.log('comp unmount');
    console.log('----------------');
  }
}

export default Counter;