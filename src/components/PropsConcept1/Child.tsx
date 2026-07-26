import { Component } from "react";

interface childProps {
    l: number,
    b: number,
    h: number
}

export default class Child extends Component<childProps> {

    //initiliase the props in class components
    constructor(props: childProps) {
        super(props);
    }

    render() {
        return (
            <>
                <h3>Area : {this.props.l * this.props.b}</h3>
                <h3>Volume : {this.props.l * this.props.b * this.props.h}</h3>
            </>
        );
    }
}


