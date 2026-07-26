import { Component, type ChangeEvent } from "react";
import StudentResult from "./StudentResult";


interface StdData {
    name: string,
    dept: string,
    roll: number,
    phy: number,
    chem: number,
    bio: number,
    flag: boolean
}

export default class StudentData extends Component {
    state: StdData = {
        name: '',
        dept: '',
        roll: 0,
        phy: 0,
        chem: 0,
        bio: 0,
        flag: false
    }

    valUpd = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: [value] });
    }

    disp = () => {
        this.setState({ flag: true })
    }


    render() {
        return (
            <>
                Enter Name :
                <input type="text" name="name" onChange={this.valUpd} />
                <br />
                Enter Dept :
                <input type="text" name="dept" onChange={this.valUpd} />
                <br />
                Enter Roll No :
                <input type="number" name="roll" onChange={this.valUpd} />
                <br />
                Enter Physics Number :
                <input type="number" name="phy" onChange={this.valUpd} />
                <br />
                Enter Chemistry Number :
                <input type="number" name="chem" onChange={this.valUpd} />
                <br />
                Enter Biology Number :
                <input type="number" name="bio" onChange={this.valUpd} />
                <br />
                <button onClick={this.disp}>SHOW</button>
                {
                    (this.state.flag) ?
                        <StudentResult nm={this.state.name} dpt={this.state.dept} r={this.state.roll} p={this.state.phy} c={this.state.chem} b={this.state.bio} />
                        : null
                }
            </>
        )
    }
}