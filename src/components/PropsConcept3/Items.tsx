import { Component } from "react";
import Bill from "./Bill";

interface Item {
    nm: string,
    qty: number,
    price: number,
    flag: boolean
}

export default class Items extends Component {
    state: Item = { nm: '', qty: 0, price: 0, flag: false }

    valUpd = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.name]: [e.target.value] });
    }

    disp = () => {
        this.setState({ flag: true });
    }

    render() {
        return (
            <>
                Enter Item Name :
                <input type="text" name="nm" onChange={this.valUpd} />
                <br />
                Enter Quantity :
                <input type="number" name="qty" onChange={this.valUpd} />
                <br />
                Enter Price :
                <input type="number" name="price" onChange={this.valUpd} />
                <br />
                <button onClick={this.disp}>INVOICE</button>
                {
                    (this.state.flag) ?
                        <Bill n={this.state.nm} q={this.state.qty} p={this.state.price} /> : null
                }
            </>

        );
    }
}