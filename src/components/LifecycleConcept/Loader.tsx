import { Component } from "react";
import Lifecycle2 from "./Lifecycle2";

export default class Loader extends Component {
    state: { load: boolean } = { load: false }

    render() {
        return (
            <>
                <input type="button" value={this.state.load ? 'UNLOAD' : 'LOAD'}
                    onClick={() => { this.setState({ load: !this.state.load }) }} />
                <br />
                {
                    (this.state.load) ? <Lifecycle2 /> : null
                }
            </>
        )
    }
}