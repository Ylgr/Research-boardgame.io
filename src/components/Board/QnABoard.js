import React from 'react';
import quizQuestions from '../Question/quizQuestions'

class QnABoard extends React.Component {
    constructor() {
        super();
        this.state = {
            currentQuestion : 0
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(bool) {
        if (bool) {
            console.log("True");
        } else {
            console.log("False");
        }

        this.props.moves.answer(bool);
        this.props.events.endTurn();
        this.props.events.endPhase();

        if(this.state.currentQuestion === 1) this.setState({currentQuestion: 0});
        else this.setState({currentQuestion: this.state.currentQuestion + 1});
    }

    render() {

        let winner = '';
        if (this.props.ctx.gameover) {
            winner =
                this.props.ctx.gameover.winner !== undefined ? (
                    <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
                ) : (
                    <div id="winner">Draw!</div>
                );
        }

        let QaAs = [];
        QaAs.push(
            <div>
                <h4>{quizQuestions[this.state.currentQuestion].question}</h4>
                <li className="nav-item" onClick={() => this.onClick(true)}>{quizQuestions[this.state.currentQuestion].answers[0].content}</li>
                <li className="nav-item" onClick={() => this.onClick(false)}>{quizQuestions[this.state.currentQuestion].answers[1].content}</li>
            </div>
        );

        return(
            <div>
                <ul className="nav nav-pills flex-column">
                    {QaAs}
                </ul>
                {winner}
            </div>
        );
    }
}


export default QnABoard;