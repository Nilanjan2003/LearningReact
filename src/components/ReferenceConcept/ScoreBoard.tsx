import React, { Component } from "react";

interface Test {
    run: number,
    ball: number
}

export default class ScoreBoard extends Component {
    state: Test = { run: 0, ball: 0 }

    ref1 = React.createRef<HTMLSelectElement>();

    scoreDisp = () => {
        const v = this.ref1.current?.value;
        const r = this.state.run;
        const b = this.state.ball;
        if (v === "1") {
            this.setState({ run: r + 1, ball: b + 1 });
        }
        else if (v === "2") {
            this.setState({ run: r + 2, ball: b + 1 })
        }
        else if (v === "3") {
            this.setState({ run: r + 3, ball: b + 1 })
        }
        else if (v === "4") {
            this.setState({ run: r + 4, ball: b + 1 })
        }
        else if (v === "6") {
            this.setState({ run: r + 6, ball: b + 1 })
        }
        else if (v === "WD") {
            this.setState({ run: r + 1, ball: b })
        }
        else if (v === "NB") {
            this.setState({ run: r + 1, ball: b })
        }
    }

    render() {
        return (
            <>
                <h3>Batting Scoreboard</h3>
                <select ref={this.ref1} onChange={this.scoreDisp}>
                    <option value="">Select Score</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="WD">WD</option>
                    <option value="NB">NB</option>
                </select>
                <h4>Run Scored : {this.state.run} | Ball Faced : {this.state.ball}</h4>
            </>
        )
    }
}
