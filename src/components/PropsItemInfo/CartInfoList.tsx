import { Component } from "react";

interface Cart {
    cartList: {
        itnm: string,
        itpr: number,
        itqt: number,
    }[]
}

export default class CartInfoList extends Component<Cart> {
    constructor(props: Cart) {
        super(props);
    }

    render() {
        return (
            <>
                <h3>Cart Information List</h3>
                <br />
                {this.props.cartList.map((val, index) => {
                    return (
                        <ul key={index}>
                            {/* FIX 3: Explicit Number() cast guards against string values
                                from <select> leaking in despite the number type annotation. */}
                            <li>Name : {val.itnm} | Total Order Price : {Number(val.itpr) * Number(val.itqt)}</li>
                        </ul>
                    );
                })}
            </>
        )
    }
}