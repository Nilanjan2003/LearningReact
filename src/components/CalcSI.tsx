import React, { Component } from "react";


interface Test4 {
    prin: number,
    roi: number,
    time: number,
    msg: string
}

class CalcSI extends Component {
    state: Test4 = {
        prin: 0,
        roi: 0,
        time: 0,
        msg: ""
    }

    valUpd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: [value] });
    }

    calcSi = () => {
        let si = (this.state.prin * this.state.roi * this.state.time) / 100;
        let total = Number(this.state.prin) + Number(si);
        // let total = parseInt(`${this.state.prin}`) + si;
        this.setState({ msg: `Simple interest : ${si} || Total Amount : ${total}` });
    }

    render() {
        return (
            <>
                Enter Principal :
                <input type="number" name="prin" onChange={this.valUpd} />
                <br />
                Enter Rate of Interest :
                <input type="number" name="roi" onChange={this.valUpd} />
                <br />
                Enter time :
                <input type="number" name="time" onChange={this.valUpd} />
                <br />
                <ul>
                    <li>Principal : {this.state.prin}</li>
                    <li>Rate of Interest : {this.state.roi}</li>
                    <li>Time : {this.state.time}</li>
                </ul>
                <br />
                <button onClick={this.calcSi}>RESULT</button>
                <br />
                <h2>{this.state.msg}</h2>
            </>
        );
    }
}

export default CalcSI;