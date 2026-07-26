import { Component } from "react";
import Profile from "./Profile";

interface Test {
    nm: string,
    em: string,
    loc: string,
    flag: boolean
}

export default class UserInfo extends Component {
    state: Test = { nm: '', em: '', loc: '', flag: false }

    valupd = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: [e.target.value] });
    }

    disp = () => {
        this.setState({ flag: true });
    }

    render() {
        return (
            <>
                Enter Name :
                <input type="text" name="nm" onChange={this.valupd} />
                <br />
                Enter Email :
                <input type="email" name="em" onChange={this.valupd} />
                <br />
                Enter Location :
                <input type="text" name="loc" onChange={this.valupd} />
                <br />
                <button onClick={this.disp}>SHOW</button>
                {
                    (this.state.flag) ?
                        <Profile n={this.state.nm} e={this.state.em} l={this.state.loc} /> : null
                }
            </>
        );
    }
}