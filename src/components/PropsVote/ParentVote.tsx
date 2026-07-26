import { Component } from "react";
import ChildVote from "./ChildVote";

interface Vote {
    party: string,
    pass: boolean,
    result: { tmc: number, cpm: number, bjp: number }
}

export default class ParentVote extends Component {
    state: Vote = { party: '', pass: false, result: { tmc: 0, cpm: 0, bjp: 0 } }

    valupd = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ party: e.target.value });
    }

    chkvote = () => {
        if (this.state.party == 'TMC') {
            this.setState({ result: { ...this.state.result, tmc: this.state.result.tmc + 1 } });
        }
        else if (this.state.party == 'CPM') {
            this.setState({ result: { ...this.state.result, cpm: this.state.result.cpm + 1 } });
        }
        else if (this.state.party == 'BJP') {
            this.setState({ result: { ...this.state.result, bjp: this.state.result.bjp + 1 } });
        }
        this.setState({ pass: true, party: "" });
    }

    render() {
        return (
            <>
                <h3>Cast Your vote plz : </h3>
                <ul>
                    <li>
                        TMC :
                        <input type="radio" name="party" value="TMC" checked={this.state.party === "TMC"} onChange={this.valupd} />
                    </li>
                    <li>
                        CPIM :
                        <input type="radio" name="party" value="CPM" checked={this.state.party === "CPM"} onChange={this.valupd} />
                    </li>
                    <li>
                        BJP :
                        <input type="radio" name="party" value="BJP" checked={this.state.party === "BJP"} onChange={this.valupd} />
                    </li>
                    <br />
                    <button onClick={this.chkvote}>VOTE SUBMIT</button>
                    {
                        (this.state.pass) ? <ChildVote info={this.state.result} /> : <h3>No votes casted yet..!</h3>
                    }
                </ul>
            </>
        )
    }
}
