import React from "react";
import About from "./About";
import { Route } from "react-router-dom";

class Home extends React.Component {
  render() {
    return(
      <main>
        <h1>Homepage</h1>
        <Route path="/about" component={ About } />
      </main>
    );
  }
}

export default Home;
