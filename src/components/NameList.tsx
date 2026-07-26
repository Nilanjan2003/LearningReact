import { Component } from "react";

interface Name {
    nm: string
    all: string[]
}

export default class NameList extends Component {
    state: Name = {
        nm: "",
        all: []
    }

    addName = () => {
        this.setState({ all: [...this.state.all, this.state.nm], nm: "" })
    }

    delName = (id: number) => {
        this.state.all.splice(id, 1);
        this.setState({ all: this.state.all });
    }

    render() {
        return (
            <>
                <input type="text" name="nm"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ nm: e.target.value }) }} value={this.state.nm} />
                <br />
                <button onClick={this.addName}>ADD NAME</button>
                <br />
                {(this.state.all.length > 0) ?
                    <ol>
                        {
                            this.state.all.map((val, index) => {
                                return <li key={index}>{val}
                                    <button onClick={() => { this.delName(index) }}>DELETE</button>
                                </li>
                            })
                        }
                    </ol> : <h3>No names added yet..!</h3>}
            </>
        );
    }
}