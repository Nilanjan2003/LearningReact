import { Component } from "react";

interface Test2 {
    len: number,
    bred: number,
    hgt: number,
    msg: string
}

class Exam4 extends Component {
    state: Test2 = {
        len: 25,
        bred: 10,
        hgt: 20,
        msg: ""
    }

    result = () => {
        let area = this.state.len * this.state.bred;
        let vol = this.state.len * this.state.bred * this.state.hgt;
        this.setState({ msg: `Area : ${area} || Volume : ${vol}` })
    }

    render() {
        return (
            <>
                <ul>
                    <li>Length : {this.state.len}</li>
                    <li>Bredth : {this.state.bred}</li>
                    <li>Height : {this.state.hgt}</li>
                    {/* <h2>Area : {this.state.len * this.state.bred} || Volume : {this.state.len * this.state.bred * this.state.hgt}</h2> */}
                    <br />
                    <button onClick={this.result}>RESULT</button>
                    <h2>{this.state.msg}</h2>
                </ul>
            </>
        );
    }
}

export default Exam4;

