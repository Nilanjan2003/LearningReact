import { Component } from "react";

interface Item {
    itnm: string,
    itpr: number,
    itqty: number,
    itcat: string,
    info: {
        itnm: string,
        itpr: number,
        itqty: number,
        itcat: string,
    }[]
}

export default class ItemInfo extends Component {
    state: Item = {
        itnm: '',
        itpr: 0,
        itqty: 0,
        itcat: '',
        info: []
    }


    addInfo = () => {
        const data = {
            itnm: this.state.itnm,
            itpr: this.state.itpr,
            itqty: this.state.itqty,
            itcat: this.state.itcat
        };

        this.setState({ info: [...this.state.info, data] });
    }

    render() {

        return (
            <>
                Enter Item Name :
                <input type="text" name="itnm"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ itnm: e.target.value }) }} value={this.state.itnm} />
                <br />
                Enter Item Price :
                <input type="number" name="itpr"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ itpr: e.target.value }) }} value={this.state.itpr} />
                <br />
                <select name="itqty" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { this.setState({ itqty: e.target.value }) }}>
                    <option value="">Select the Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <input type="radio" name="itcat"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ itcat: e.target.value }) }}
                    value="Dress" /> Dress
                <input type="radio" name="itcat"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ itcat: e.target.value }) }}
                    value="Kitchen" /> Kitchen
                <input type="radio" name="itcat"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ itcat: e.target.value }) }}
                    value="Electronics" /> Electronics
                <input type="radio" name="itcat"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ itcat: e.target.value }) }}
                    value="Cosmetics" /> Cosmetics
                <br />
                <button onClick={this.addInfo}>ADD</button>
                <br />
                {(this.state.info.length > 0) ?
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Total Order Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.info.map((val, index) => (
                                <tr key={index}>
                                    <td>{val.itnm}</td>
                                    <td>{val.itcat}</td>
                                    <td>{val.itpr * val.itqty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    : <h3>No item in the list..!</h3>}
            </>
        );
    }
}