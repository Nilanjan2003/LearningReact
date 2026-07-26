import { Component } from "react";

interface Props {
    n: string,
    e: string,
    l: string
}

export default class Profile extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <ul>
                    <li>Name : {this.props.n}</li>
                    <li>Email : {this.props.e}</li>
                    <li>Location : {this.props.l}</li>
                </ul>
            </>
        );
    }
}