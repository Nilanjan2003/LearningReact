import React, { Component } from "react";

interface Test3 {
    nm: string,
    dept: string,
    age: number
}

class UserInput extends Component {

    state: Test3 = { nm: '', dept: '', age: 0 }

    valUpd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: [value] });
    }

    render() {
        return (
            <>
                Enter Name :
                <input type="text" name="nm" onChange={this.valUpd} />
                <br />
                Enter Department :
                <input type="text" name="dept" onChange={this.valUpd} />
                <br />
                Enter Age :
                <input type="number" name="age" onChange={this.valUpd} />
                <br />
                <ul>
                    <li>Name : {this.state.nm}</li>
                    <li>Dept : {this.state.dept}</li>
                    <li>Age : {this.state.age}</li>
                </ul>
            </>
        )
    }
}

export default UserInput;