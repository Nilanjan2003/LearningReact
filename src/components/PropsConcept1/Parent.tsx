import { Component } from "react";
import Child from "./Child";

interface parentProps {
    len: number,
    bred: number,
    hgt: number
}

export default class Parent extends Component {
    state: parentProps = { len: 25, bred: 10, hgt: 15 }

    render() {
        return (
            <>
                <h3>Props passing concept</h3>
                <Child l={this.state.len} b={this.state.bred} h={this.state.hgt} />
            </>
        );
    }
}