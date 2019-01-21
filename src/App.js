import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "./App.css";
import FactsList from "./components/facts-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Main App Header */}
        <header>
          <div className="container">
            <h1 className="mt-4">Turtle Facts Quiz</h1>
            <p className="lead">
              Learn about all the turtles below before you decide to take on the{" "}
              <strong>TURTLE QUIZ</strong>
            </p>
            <hr />
          </div>
        </header>

        {/* Facts list Component */}
        <FactsList />
      </div>
    );
  }
}

export default App;
