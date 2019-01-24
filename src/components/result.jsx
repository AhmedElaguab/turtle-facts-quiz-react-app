import React, { Component } from "react";

class Result extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h2 className="pt-4 pb-2">Progress</h2>
              {this.props.quizQuestions.map((quizQuest, quizQuestIdx) =>
                quizQuest.selected ===
                this.props.correctAnswers[quizQuestIdx] ? (
                  <button
                    onClick={() =>
                      this.props.hundleSelectedQuestion(quizQuestIdx)
                    }
                    className="btn btn-success mr-2"
                    key={quizQuest.text}
                  >
                    <i className="fas fa-check-circle" />
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      this.props.hundleSelectedQuestion(quizQuestIdx)
                    }
                    className="btn btn-danger mr-2"
                    key={quizQuest.text}
                  >
                    <i className="fas fa-times-circle" />
                  </button>
                )
              )}
            </div>
            <div className="col-4">
              <h2 className="pt-4 pb-2">Legend</h2>
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-success">
                    <i className="fas fa-check-circle  mr-2" />{" "}
                    <strong>Correct</strong>
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-danger mr-2">
                    <i className="fas fa-times-circle  mr-2" />{" "}
                    <strong>Wrong</strong>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Result;
