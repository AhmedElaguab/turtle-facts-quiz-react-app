import React, { Component } from "react";
import PropTypes from "prop-types";

class Result extends Component {
  static propTypes = {
    quizQuestions: PropTypes.array.isRequired,
    correctAnswers: PropTypes.array.isRequired,
    activeQuestion: PropTypes.object.isRequired,
    activeQuestionIdx: PropTypes.number.isRequired,
    hundleSelectedQuestion: PropTypes.func.isRequired
  };

  render() {
    let correctAnswersNum = 0;
    return (
      <section className="result">
        <div className="container">
          <div className="row">
            <div className="col-12  col-lg-7 order-2 order-lg-1">
              <h2 className="pt-4 pb-2">Progress</h2>
              {this.props.quizQuestions.map((quizQuest, quizQuestIdx) => {
                if (
                  quizQuest.selected === this.props.correctAnswers[quizQuestIdx]
                ) {
                  correctAnswersNum++;
                  return (
                    <button
                      onClick={() =>
                        this.props.hundleSelectedQuestion(quizQuestIdx)
                      }
                      className="btn btn-success mr-2 mb-2"
                      key={quizQuest.text}
                    >
                      <i className="fas fa-check-circle" />
                    </button>
                  );
                } else {
                  return (
                    <button
                      onClick={() =>
                        this.props.hundleSelectedQuestion(quizQuestIdx)
                      }
                      className="btn btn-danger mr-2 mb-2"
                      key={quizQuest.text}
                    >
                      <i className="fas fa-times-circle" />
                    </button>
                  );
                }
              })}
            </div>
            <div className="col-12  col-lg-5 order-1 order-lg-2">
              <h2 className="pt-4 pb-2">Legend</h2>
              <div className="row">
                <div className="col">
                  <button className="btn btn-success mr-3 mb-2">
                    <i className="fas fa-check-circle  mr-2" />{" "}
                    <strong>Correct</strong>
                  </button>
                  <button className="btn btn-danger mb-2">
                    <i className="fas fa-times-circle  mr-2" />{" "}
                    <strong>Wrong</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2 className="mt-5">
                You Scored {correctAnswersNum} / 10 <br />
                <strong>{correctAnswersNum * 10}.00%</strong>
              </h2>
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
                      let answerClassName;
                      if (
                        questPossIdx ===
                        this.props.correctAnswers[this.props.activeQuestionIdx]
                      ) {
                        answerClassName = "btn d-block  btn-success";
                      } else if (
                        questPossIdx === this.props.activeQuestion.selected &&
                        questPossIdx !==
                          this.props.correctAnswers[
                            this.props.activeQuestionIdx
                          ]
                      ) {
                        answerClassName = "btn d-block  btn-info";
                      } else {
                        answerClassName = "btn d-block  btn-secondary";
                      }

                      return this.props.activeQuestion.type === "text" ? (
                        <div className="col-12 col-md-6" key={questPoss.answer}>
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
                        <div className="col-12 col-md-6" key={questPoss.answer}>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Result;
