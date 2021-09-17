import React from 'react';
import Counter from './counter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clock: false,
    }
    this.mountCounter = () => this.setState({clock: true});
    this.unmountCounter = () => this.setState({clock: false});
  }

  render() {
    const {
      mountCounter,
      unmountCounter,
    } = this;

    const {
      clock,
    } = this.state;

    return(
      <main>
        <button onClick={ mountCounter } disabled={clock}>Liga</button>
        <button onClick={ unmountCounter } disabled={!clock}>Desliga</button>
        { clock ? <Counter /> : null }
      </main>
    );
  }
}

export default App;
