import React, { Component } from "react"


export default class Lifecycle3 extends Component {
    state: { count: number } = { count: 0 }
    ref1 = React.createRef<HTMLHeadingElement>();

    componentDidMount() {
        setTimeout(() => {
            this.ref1.current!.innerText = `Count latest value : ${this.state.count}`;
        }, 5000);
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.ref1.current!.innerText = `Count latest value : ${this.state.count}`;
        }, 5000);
    }

    render() {
        return (
            <>
                <h3>count : {this.state.count}</h3>
                <br />
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
                <br />
                <button onClick={() => { this.setState({ count: this.state.count - 1 }) }}>-</button>
                <br />
                <h3 ref={this.ref1}></h3>
            </>
        )
    }
}