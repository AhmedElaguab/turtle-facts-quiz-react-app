import React, { Component } from "react";
import { Route } from "react-router-dom";
import "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FactsList from "./components/facts-list";
import Quiz from "./components/quiz";

class App extends Component {
  state = {
    goResult: false,
    answeredQuestionsNum: 0,
    activeQuestion: {
      type: "text",
      text: "How much can a loggerhead weigh?",
      possibilities: [
        {
          answer: "Up to 20kg"
        },
        {
          answer: "Up to 115kg"
        },
        {
          answer: "Up to 220kg"
        },
        {
          answer: "Up to 500kg"
        }
      ],
      selected: null,
      correct: null
    },
    activeQuestionIdx: 0,
    correctAnswers: [2, 3, 4, 1, 3, 1, 4, 3, 1, 4],
    quizQuestions: [
      {
        type: "text",
        text: "How much can a loggerhead weigh?",
        possibilities: [
          {
            answer: "Up to 20kg"
          },
          {
            answer: "Up to 115kg"
          },
          {
            answer: "Up to 220kg"
          },
          {
            answer: "Up to 500kg"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "text",
        text: "What is the typical lifespan of a Green Sea Turtle?",
        possibilities: [
          {
            answer: "150 years"
          },
          {
            answer: "10 years"
          },
          {
            answer: "80 years"
          },
          {
            answer: "40 years"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "image",
        text: "Which of these is the Alligator Snapping Turtle?",
        possibilities: [
          {
            answer:
              "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
          },
          {
            answer:
              "https://upload.wikimedia.org/wikipedia/commons/1/18/Lepidochelys_olivacea.jpg"
          },
          {
            answer:
              "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
          },
          {
            answer:
              "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "image",
        text: "Which of these is the Green Turtle?",
        possibilities: [
          {
            answer:
              "https://upload.wikimedia.org/wikipedia/commons/e/e5/Green_turtle_swimming_over_coral_reefs_in_Kona.jpg"
          },
          {
            answer:
              "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
          },
          {
            answer:
              "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
          },
          {
            answer:
              "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "text",
        text: "Where does the Kemp's Ridley Sea Turtle live?'",
        possibilities: [
          {
            answer: "Tropical waters all around the world"
          },
          {
            answer: "Eastern Australia"
          },
          {
            answer: "Coastal North Atlantic"
          },
          {
            answer: "South pacific islands"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "text",
        text: "What is the most common turtle in US waters?",
        possibilities: [
          {
            answer: "Loggerhead turtle"
          },
          {
            answer: "Leatherback turtle"
          },
          {
            answer: "Hawksbill Turtle"
          },
          {
            answer: "Alligator Snapping Turtle"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "text",
        text: "What is the largest sea turtle on earth?",
        possibilities: [
          {
            answer: "Eastern Snake Necked Turtle"
          },
          {
            answer: "Olive Ridley Sea Turtle"
          },
          {
            answer: "Kemp's Ridley Sea Turtle'"
          },
          {
            answer: "Leatherback"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "image",
        text: "Which of these is the Olive Ridley Turtle?",
        possibilities: [
          {
            answer:
              "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg"
          },
          {
            answer:
              "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
          },
          {
            answer:
              "https://upload.wikimedia.org/wikipedia/commons/1/18/Lepidochelys_olivacea.jpg"
          },
          {
            answer:
              "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "text",
        text: "How Heavy can a leatherback turtle be?",
        possibilities: [
          {
            answer: "900kg"
          },
          {
            answer: "40kg"
          },
          {
            answer: "110kg"
          },
          {
            answer: "300kg"
          }
        ],
        selected: null,
        correct: null
      },
      {
        type: "text",
        text: "Which of these turtles are herbivores?",
        possibilities: [
          {
            answer: "Loggerhead Turtle"
          },
          {
            answer: "Hawksbill Turtle"
          },
          {
            answer: "Leatherback Turtle"
          },
          {
            answer: "Green Turtle"
          }
        ],
        selected: null,
        correct: null
      }
    ]
  };

  hundleSelectedAnswer = selectedAnswerIdx => {
    // Declare constants from the state.
    let {
      quizQuestions,
      activeQuestionIdx,
      activeQuestion,
      answeredQuestionsNum
    } = this.state;

    // Increase answered Questions Number
    if (!quizQuestions[activeQuestionIdx].selected) {
      answeredQuestionsNum++;
    }

    // Change the "selected" property value for both "activeQuestion" & "quizQuestions"
    // constants according to the selected answer.
    activeQuestion.selected = selectedAnswerIdx;
    quizQuestions[activeQuestionIdx].selected = selectedAnswerIdx;

    // Change the state with new constants
    this.setState({ quizQuestions, activeQuestion, answeredQuestionsNum });
  };

  hundleNextQuestionClick = theWay => {
    let { activeQuestionIdx, quizQuestions, answeredQuestionsNum } = this.state;
    const maxIdx = this.state.quizQuestions.length - 1;
    let startLoop;

    let i;
    // Go to the result page if the answeredQuestionsNum is greater than maxIdx
    if (answeredQuestionsNum > maxIdx) {
      this.setState({ goResult: true });
    }

    // Check if the answeredQuestionsNum is less than maxIdx
    // && theWay is next
    if (answeredQuestionsNum <= maxIdx && theWay === "next") {
      startLoop = activeQuestionIdx === maxIdx ? 0 : activeQuestionIdx + 1;
      // Loop until you find non-selected question
      for (i = startLoop; i <= maxIdx; i++) {
        if (!quizQuestions[i].selected) {
          // Set activeQuestionIdx value to the first next non-selected question
          activeQuestionIdx = i;
          break;
        }
      }

      // Check if the answeredQuestionsNum is greater than maxIdx
      // && theWay is previous
    } else if (answeredQuestionsNum > 0 && theWay === "previous") {
      startLoop = activeQuestionIdx === 0 ? maxIdx : activeQuestionIdx - 1;
      // Loop until you find non-selected question
      for (i = startLoop; i <= maxIdx; i--) {
        if (!quizQuestions[i].selected) {
          // Set activeQuestionIdx value to the first next or previous non-selected question
          activeQuestionIdx = i;
          break;
        }
      }
    }

    // Declare a constant that holds the the next question object of
    // the previos activeQuestion
    const activeQuestion = quizQuestions[activeQuestionIdx];

    // Change the activeQuestion state by the new activeQuestion
    this.setState({ activeQuestion, activeQuestionIdx });
  };

  hundleSelectedQuestion = selectedQuestIdx => {
    // Declare a constant that holds the the selected question index
    const activeQuestionIdx = selectedQuestIdx;

    // Declare a constant that holds the the selected question object
    const activeQuestion = this.state.quizQuestions[selectedQuestIdx];

    // Change the activeQuestion state by the new activeQuestion
    this.setState({ activeQuestion, activeQuestionIdx });
  };

  hundleResultAnswer = rep => {
    if (rep === "no") {
      this.setState({ goResult: false });
    } else {
      window.location.pathname = "result";
    }
  };

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
        <Route
          path="/quiz"
          render={() => (
            <Quiz
              answeredQuestionsNum={this.state.answeredQuestionsNum}
              activeQuestion={this.state.activeQuestion}
              activeQuestionIdx={this.state.activeQuestionIdx}
              quizQuestions={this.state.quizQuestions}
              hundleSelectedQuestion={this.hundleSelectedQuestion}
              hundleSelectedAnswer={this.hundleSelectedAnswer}
              hundleNextQuestionClick={this.hundleNextQuestionClick}
              goResult={this.state.goResult}
              hundleResultAnswer={this.hundleResultAnswer}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
