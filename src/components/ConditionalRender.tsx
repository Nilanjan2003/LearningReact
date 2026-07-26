import { Component } from "react";

interface CR {
    nm: "",
    dept: "",
    load: boolean,
    msg: ""
}


class ConditionalRender extends Component {
    state: CR = { nm: '', dept: '', load: false, msg: '' };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: [value] });
    }

    checkVal = () => {
        const m = `Name : ${this.state.nm} | Department : ${this.state.dept}`;
        this.setState({ msg: m, load: !this.state.load });
    }

    render() {
        return (
            <>
                Enter Name :
                <input type="text" name="nm" onChange={this.handleChange} />
                <br />
                Enter Department :
                <input type="text" name="dept" onChange={this.handleChange} />
                <br />
                <input type="button" value={(this.state.load) ? 'HIDE' : 'SHOW'} onClick={this.checkVal} />
                <br />
                {(this.state.load) ? <h3>{this.state.msg}</h3> : null}
            </>
        )
    }
}

export default ConditionalRender;