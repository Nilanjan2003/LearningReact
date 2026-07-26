import { Component } from "react";
import CountChild from "./CountChild";

export default class countParent extends Component {
    state: { count: number } = { count: 0 };

    increase = () => {
        this.setState({ count: this.state.count + 1 });
    }
    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render(){
        return(
            <>
            <CountChild c={this.state.count} functionIncrease={this.increase} functionDecrease={this.decrease}/>
            </>
        )
    }
}