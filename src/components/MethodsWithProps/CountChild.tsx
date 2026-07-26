import { Component } from "react";

interface Props {
    c: number,
    functionIncrease: () => void,
    functionDecrease: () => void,
}

export default class CountChild extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <h3>Counter using Props Example</h3>
                <h3>Counter : {this.props.c}</h3>
                <button onClick={this.props.functionIncrease}>+</button>
                <br /> <br />
                <button onClick={this.props.functionDecrease}>-</button>
            </>
        )
    }
}