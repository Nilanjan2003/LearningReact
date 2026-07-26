import { Component } from "react";

interface Props {
    data: { nm: string, dp: string }[]
}

export default class ChildName extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                <ol>
                    {
                        this.props.data.map((v, i) => {
                            return <li key={i}>Name : {v.nm} | Department : {v.dp}</li>
                        })
                    }
                </ol>
            </>
        )
    }
}