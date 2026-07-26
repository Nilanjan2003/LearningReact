import React, { Component } from "react";


interface Info {
    nm: string,
    age: Number,
    dept: string,
    loc: string
}

export default class Lifecycle2 extends Component {
    state: Info = { nm: "Nil", age: 20, dept: "CSE", loc: "Kolkata" }
    ref1 = React.createRef<HTMLHeadingElement>();

    componentDidMount() {
        setTimeout(() => {
            const msg = `Name : ${this.state.nm} | Age : ${this.state.age} | Dept : ${this.state.dept} | Location : ${this.state.loc}`;
            this.ref1.current!.innerHTML = msg;
        }, 5000);
    }

    componentWillMount() {
        alert("Welcome, all component is loading now...!");
    }

    componentWillUnmount() {
        alert("Goodbye all component is getting unloaded now...!");
    }

    render() {
        return (
            <>
                <h3 ref={this.ref1}>Plz wait for 5 sec...!</h3>
            </>
        )
    }
}