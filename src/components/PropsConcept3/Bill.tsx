import { Component } from "react";

interface newItem {
    n: string,
    q: number,
    p: number
}

export default class Bill extends Component<newItem> {
    constructor(props: newItem) {
        super(props);
    }

    render() {
        return (
            <>
                <h3>Name : {this.props.n} | Total Price : {this.props.q * this.props.p}</h3>
            </>
        )
    }
}