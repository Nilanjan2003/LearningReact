import React, { Component } from "react";


interface Result {
    nm: string,
    dpt: string,
    r: number,
    p: number,
    c: number,
    b: number
}

export default class StudentResult extends Component<Result> {
    constructor(props: Result) {
        super(props);
    }

    ref1 = React.createRef<HTMLHeadingElement>();

    componentDidMount() {
        setTimeout(() => {
            const msg =
                   `Name : ${this.props.nm} |
                    Dept : ${this.props.dpt} |
                    Roll No : ${this.props.r} |
                    Total Marks : ${Number(this.props.p) + Number(this.props.c) + Number(this.props.b)}`;
            this.ref1.current!.innerHTML = msg;
        },5000);
    }

    render() {
        return (
            <>
                <h3 ref={this.ref1}>Plz wait for 5 sec...!</h3>
            </>
        )
    }
}