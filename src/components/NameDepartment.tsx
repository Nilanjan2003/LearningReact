import { Component, type ChangeEvent } from "react";

interface Name {
    stnm: string,
    dept: string
    cse: string[],
    it: string[],
    me: string[]
    res: string
}

export default class NameDepartment extends Component {

    state: Name = { stnm: '', dept: 'cse', cse: [], it: [], me: [], res: "" }

    handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    updVal = () => {
        let cse = [...this.state.cse];
        let it = [...this.state.it];
        let me = [...this.state.me];

        if (this.state.dept === "cse")
            cse.push(this.state.stnm);

        if (this.state.dept === "it")
            it.push(this.state.stnm);

        if (this.state.dept === "me")
            me.push(this.state.stnm);

        const m =
            `CSE : ${cse.join(", ")} ||
             IT : ${it.join(", ")} || 
             ME : ${me.join(", ")}`; 

        this.setState({
            cse,
            it,
            me,
            stnm: "",
            res: m
        });
    }

    render() {
        return (
            <>
                Enter Student Name:
                <input type="text" name="stnm" value={this.state.stnm} onChange={this.handleChange} />
                <br />
                Enter Department:
                <select name="dept" onChange={this.handleChange}>
                    <option value="cse">CSE</option>
                    <option value="it">IT</option>
                    <option value="me">ME</option>
                </select>
                <br />
                <input type="button" value={'ADD'} onClick={this.updVal} />
                <br />
                <h4>{this.state.res}</h4>
            </>
        )
    }
}