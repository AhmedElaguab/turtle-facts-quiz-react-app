import React, { Component } from "react";

// import PropTypes from "prop-types";

class Quiz extends Component {
  state = {
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

  hundleNextQuestionClick = () => {
    let { activeQuestionIdx, quizQuestions, answeredQuestionsNum } = this.state;
    const maxIdx = this.state.quizQuestions.length - 1;

    // Go to the result page if the answeredQuestionsNum is great than maxIdx
    if (answeredQuestionsNum > maxIdx) {
      window.location.pathname = "result";
    }

    // Check the currnet activeQuestion index
    if (answeredQuestionsNum <= maxIdx && activeQuestionIdx !== maxIdx) {
      // Increase the "activeQuestionIdx" by one
      for (let i = activeQuestionIdx + 1; i <= maxIdx; i++) {
        if (!quizQuestions[i].selected) {
          activeQuestionIdx = i;
          break;
        }
      }

      // Declare a constant that holds the the next question object of
      // the previos activeQuestion
      const activeQuestion = quizQuestions[activeQuestionIdx];

      // Change the activeQuestion state by the new activeQuestion

      this.setState({ activeQuestion, activeQuestionIdx });
    } else if (answeredQuestionsNum <= maxIdx && activeQuestionIdx === maxIdx) {
      // Increase the "activeQuestionIdx" by one
      // Increase the "activeQuestionIdx" by one
      for (let i = 0; i <= maxIdx; i++) {
        if (!quizQuestions[i].selected) {
          activeQuestionIdx = i;
          break;
        }
      }

      // Declare a constant that holds the the next question object of
      // the previos activeQuestion
      const activeQuestion = quizQuestions[activeQuestionIdx];

      // Change the activeQuestion state by the new activeQuestion

      this.setState({ activeQuestion, activeQuestionIdx });
    }
  };

  hundleSelectedQuestion = selectedQuestIdx => {
    // Declare a constant that holds the the selected question index
    const activeQuestionIdx = selectedQuestIdx;

    // Declare a constant that holds the the selected question object
    const activeQuestion = this.state.quizQuestions[selectedQuestIdx];

    // Change the activeQuestion state by the new activeQuestion
    this.setState({ activeQuestion, activeQuestionIdx });
  };

  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className="pt-4 pb-2">Progress</h2>
              {this.state.quizQuestions.map((quizQuest, quizQuestIdx) =>
                quizQuest.selected ? (
                  <button
                    onClick={() => this.hundleSelectedQuestion(quizQuestIdx)}
                    className="btn btn-info mr-2"
                    key={quizQuest.text}
                  >
                    <i className="fas fa-pen" />
                  </button>
                ) : (
                  <button
                    onClick={() => this.hundleSelectedQuestion(quizQuestIdx)}
                    className="btn btn-danger mr-2"
                    key={quizQuest.text}
                  >
                    <i className="fas fa-question" />
                  </button>
                )
              )}
            </div>
            <div className="col-4">
              <h2 className="pt-4 pb-2">Legend</h2>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-danger">
                    <i className="fas fa-question  mr-2" />{" "}
                    <strong>Unanswered</strong>
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-info mr-2">
                    <i className="fas fa-pen  mr-2" /> <strong>Answered</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <h2 className="mt-4 mb-5">Question</h2>
              <div className="card p-2">
                <h3 className="p-3">{this.state.activeQuestion.text}</h3>
                <div className="row">
                  {this.state.activeQuestion.possibilities.map(
                    (questPoss, questPossIdx) => {
                      questPossIdx++;
                      const answerClassName =
                        this.state.activeQuestion.selected === questPossIdx
                          ? "btn d-block  btn-info"
                          : "btn d-block  btn-secondary";

                      return this.state.activeQuestion.type === "text" ? (
                        <div className="col-6" key={questPoss.answer}>
                          <h4
                            onClick={() =>
                              this.hundleSelectedAnswer(questPossIdx)
                            }
                            className={answerClassName}
                          >
                            {questPoss.answer}
                          </h4>
                        </div>
                      ) : (
                        <div className="col-6" key={questPoss.answer}>
                          <h4
                            onClick={() =>
                              this.hundleSelectedAnswer(questPossIdx)
                            }
                            className={answerClassName}
                          >
                            <img src={questPoss.answer} alt="" />
                          </h4>
                        </div>
                      );
                    }
                  )}
                </div>
                <div className="row">
                  <div className="col">
                    <button
                      onClick={this.hundleNextQuestionClick}
                      className="btn btn-warning float-right mt-4"
                    >
                      <strong>Next Question</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Quiz;
