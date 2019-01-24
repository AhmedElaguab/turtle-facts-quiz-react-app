import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

class Quiz extends Component {
  render() {
    return !this.props.goResult ? (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className="pt-4 pb-2">Progress</h2>
              {this.props.quizQuestions.map((quizQuest, quizQuestIdx) =>
                quizQuest.selected ? (
                  <button
                    onClick={() =>
                      this.props.hundleSelectedQuestion(quizQuestIdx)
                    }
                    className="btn btn-info mr-2"
                    key={quizQuest.text}
                  >
                    <i className="fas fa-pen" />
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      this.props.hundleSelectedQuestion(quizQuestIdx)
                    }
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
                <h3 className="p-3">{this.props.activeQuestion.text}</h3>
                <div className="row">
                  {this.props.activeQuestion.possibilities.map(
                    (questPoss, questPossIdx) => {
                      questPossIdx++;
                      const answerClassName =
                        this.props.activeQuestion.selected === questPossIdx
                          ? "btn d-block  btn-info"
                          : "btn d-block  btn-secondary";

                      return this.props.activeQuestion.type === "text" ? (
                        <div className="col-6" key={questPoss.answer}>
                          <h4
                            onClick={() =>
                              this.props.hundleSelectedAnswer(questPossIdx)
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
                              this.props.hundleSelectedAnswer(questPossIdx)
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
                      onClick={() =>
                        this.props.hundleNextQuestionClick("previous")
                      }
                      className="btn btn-warning float-left mt-4"
                    >
                      <strong>Previous Question</strong>
                    </button>
                    <button
                      onClick={() => this.props.hundleNextQuestionClick("next")}
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
    ) : (
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card p-3">
                <div className="card-body">
                  <h3 className="mb-5">
                    Are you sure you want to submit your answers?
                  </h3>
                  <Link
                    to="/result"
                    onClick={() => this.props.hundleGoBackToQuiz("no")}
                    className="btn btn-success d-inline mr-2"
                  >
                    Yes
                  </Link>
                  <button
                    onClick={() => this.props.hundleGoBackToQuiz("yes")}
                    className="btn btn-danger d-inline mr-2"
                  >
                    No
                  </button>
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
