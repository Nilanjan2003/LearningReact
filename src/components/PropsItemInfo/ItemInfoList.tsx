import { Component } from "react";
import CartInfoList from "./CartInfoList";

interface Item {
    itnm: string,
    itpr: number,
    itqt: number,
    itList: Item[],
    cartList: Item[]
}

export default class ItemInfoList extends Component {
    state: Item = { itnm: '', itpr: 0, itqt: 0, itList: [], cartList: [] }

    valUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        // FIX 3: Parse numeric fields as numbers to avoid string/number type mismatch
        const value = e.target.type === "number" || e.target.name === "itqt"
            ? Number(e.target.value)
            : e.target.value;
        this.setState({ [e.target.name]: value });
    }

    addItem = () => {
        this.setState({
            itList: [
                ...this.state.itList,
                { itnm: this.state.itnm, itpr: this.state.itpr, itqt: 1, itList: [] }
            ],
            itnm: '',
            itpr: 0,
            itqt: 0
        });
    }

    // FIX 2: Accept explicit quantity so the correct per-row quantity is used,
    // not the shared this.state.itqt which reflects the last touched dropdown.
    addToCart = (item: Item, quantity: number) => {
        this.setState({
            cartList: [...this.state.cartList, { ...item, itqt: quantity }]
        });
    }

    render() {
        return (
            <>
                <h3>Item Information List</h3>
                Enter Item Name :
                <input type="text" name="itnm" value={this.state.itnm} onChange={this.valUpdate} />
                <br />
                Enter Item Price :
                <input type="number" name="itpr" value={this.state.itpr} onChange={this.valUpdate} />
                <br />
                <button onClick={this.addItem}>ADD ITEM</button>
                <br />

                {/* FIX 1: Separated into two independent ternaries so the cart section
                    is not incorrectly nested inside the item-list ternary expression. */}
                {this.state.itList.length > 0 ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Serial No.</th>
                                <th>Item Name</th>
                                <th>Item Price</th>
                                <th>Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.itList.map((val, index) => {
                                // FIX 2: Track selected quantity per row in local state
                                // via a closure variable updated by the select's onChange.
                                let selectedQty = 1;
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{val.itnm}</td>
                                        <td>{val.itpr}</td>
                                        <td>
                                            <select
                                                name="itqt"
                                                defaultValue="1"
                                                onChange={(e) => { selectedQty = Number(e.target.value); }}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </td>
                                        <td>
                                            <button onClick={() => this.addToCart(val, selectedQty)}>
                                                ADD TO CART
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <p>No items added yet..!</p>
                )}

                {this.state.cartList.length > 0 ? (
                    <CartInfoList cartList={this.state.cartList} />
                ) : (
                    <p>No items in cart yet..!</p>
                )}
            </>
        )
    }
}