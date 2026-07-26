import { Component } from "react";

interface Props {
    info: { tmc: number, cpm: number, bjp: number }
}

export default class ChildVote extends Component<Props> {
    render() {
        return (
            <>
                <ol>
                    <li>TMC : {this.props.info.tmc}</li>
                    <li>CPIM :{this.props.info.cpm}</li>
                    <li>BJP :{this.props.info.bjp}</li>
                </ol>
            </>
        )
    }
}