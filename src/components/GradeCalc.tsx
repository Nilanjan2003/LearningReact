import { Component, type ChangeEvent } from "react";

interface Grade {
    stnm: string,
    phy: number,
    chem: number,
    math: number,
    res: string,
    load: boolean
}

class GradeCalc extends Component {
    state: Grade = { stnm: '', phy: 0, chem: 0, math: 0, res: '', load: false };

    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: [value] });
    }

    updateValue = () => {
        let totalMarks = Number(this.state.phy) + Number(this.state.chem) + Number(this.state.math);
        let avgMarks = totalMarks / 3;
        let grade = '';
        if (avgMarks >= 75) {
            grade = "Excellent";
        }
        else if (avgMarks >= 60 && avgMarks < 75) {
            grade = "Very Good";
        }
        else if (avgMarks >= 40 && avgMarks < 60) {
            grade = "Good";
        }
        else if (avgMarks < 40) {
            grade = "Fail";
        }

        const m = `Name : ${this.state.stnm} | Total Marks : ${totalMarks} / 300 | Grade : ${grade}`;

        this.setState({ res: m, load: !this.state.load })
    }

    render() {
        return (
            <>
                Enter Student Name :
                <input type="text" name="stnm" onChange={this.handleChange} />
                <br />
                Enter Physics Marks:
                <input type="text" name="phy" onChange={this.handleChange} />
                <br />
                Enter Chemistry Marks:
                <input type="text" name="chem" onChange={this.handleChange} />
                <br />
                Enter Maths Marks:
                <input type="text" name="math" onChange={this.handleChange} />
                <br />
                <input type="button" value={(this.state.load) ? 'HIDE RESULT' : 'SHOW RESULT'} onClick={this.updateValue} />
                <br />
                {(this.state.load) ? <h3>{this.state.res}</h3> : null}
            </>
        );
    }
}

export default GradeCalc;