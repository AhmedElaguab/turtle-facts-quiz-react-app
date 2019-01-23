import React, { Component } from "react";
import { Route } from "react-router-dom";
import "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FactsList from "./components/facts-list";
import Quiz from "./components/quiz";

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
            <hr className="mb-0" />
          </div>
        </header>

        {/* Facts list Component */}

        <Route exact path="/" component={FactsList} />
        <Route path="/quiz" render={() => <Quiz />} />
      </div>
    );
  }
}

export default App;
