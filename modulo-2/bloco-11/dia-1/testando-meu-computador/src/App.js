import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  render() {
    
    const element = <h1>Hello, JSX</h1>

    function tick() {
      const element = (
        <div>
          <h1 className="hello-world">Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
      ReactDOM.render(element, document.getElementById('root'));
    }
    {setInterval(tick, 1000)}
    
    return (
      <div>
        {element}
        {tick()}
      </div>
    );
  }
}

export default App;
