import { Component } from "react";
import ChildName from "./ChildName";

interface Name {
    nm: string,
    dp: string,
    info: { nm: string, dp: string }[]
}

export default class ParentName extends Component {
    state: Name = { nm: '', dp: '', info: [] }

    valUpd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: [value] });
    }

    addInfo = () => {
        const v = { nm: this.state.nm, dp: this.state.dp };
        this.setState({ info: [...this.state.info, v], nm: '', dp: '' });
    }

    render() {
        return (
            <>
                Name :
                <input type="text" name="nm" value={this.state.nm} onChange={this.valUpd} />
                <br />
                Department :
                <input type="text" name="dp" value={this.state.dp} onChange={this.valUpd} />
                <br />
                <button onClick={this.addInfo}>ADD</button>
                <br />
                {
                    (this.state.info.length > 0) ?
                        <ChildName data={this.state.info} /> :
                        <h3>No names added yet..!</h3>
                }
            </>
        )
    }
}