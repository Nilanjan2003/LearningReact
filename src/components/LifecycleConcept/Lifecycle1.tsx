import { Component } from "react";


interface Test {
    nm: string,
    age: number,
    dept: string
}

interface Props { }

export default class Lifecycle1 extends Component<Props, Test> {

    constructor(props: Props) {
        super(props);
        console.log("constructor is called...");
        this.state = { nm: "Nil", age: 23, dept: "IT" }
    }

    componentWillMount() {
        console.log("componentWillMount is called...");
        alert("Welcome, My component is loading now..!");
    }

    valUpd = () => {
        this.setState(
            { nm: "Nilanjan", age: 25, dept: "CSE" }
        );
    }

    render() {
        return (
            <>
                <ul>
                    <li>Name : {this.state.nm}</li>
                    <li>Age : {this.state.age}</li>
                    <li>Dept : {this.state.dept}</li>
                </ul>
                <br />
                <button onClick={this.valUpd}>UPDATE</button>
            </>
        )
    }

    componentDidMount() {
        console.log("componentDidMount is called...");
    }

    shouldComponentUpdate(): boolean {
        console.log("shouldComponentUpdate is called...");
        return true;
    }

    componentWillUpdate() {
        console.log("ComponentWillUpdate is called...");
        alert("Update will be done soon..!");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate is called...");
    }
}