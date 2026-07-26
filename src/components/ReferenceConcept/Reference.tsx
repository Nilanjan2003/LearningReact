import React, { Component } from "react";

export default class Reference extends Component {

    ref1 = React.createRef<HTMLInputElement>();
    ref2 = React.createRef<HTMLParagraphElement>();
    ref3 = React.createRef<HTMLHeadingElement>();

    disp = () => {
        const v = this.ref1.current?.value;
        alert(`Name : ${v}`);
        this.ref2.current!.innerHTML = "Thank You visit again";
        this.ref3.current!.innerText = "Good Bye";
    }

    render() {
        return (
            <>
                Enter Name :
                <input type="text" ref={this.ref1} />
                <br />
                <p ref={this.ref2}>This is a testing paragraph for my case.</p>
                <br />
                <h3 ref={this.ref3}></h3>
                <br />
                <button onClick={this.disp}>CHECK</button>
            </>
        )
    }
}