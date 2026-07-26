import { Component } from "react"

interface item {
    itnm: string,
    itpr: number,
    itqty: number,
    cat: string,
    info: string
}

class PriceCalculation extends Component {
    state: item = { itnm: '', itpr: 0, itqty: 0, cat: '', info: '' }

    valupd = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        this.setState({ [name]: [value] });
    }

    display = () => {
        const msg = `Item Name : ${this.state.itnm} | 
                     Item Price : ${this.state.itpr} |
                     Item Quantity : ${this.state.itqty} |
                     Item Catagory : ${this.state.cat}`;
        this.setState({ info: msg });
    }

    render() {
        return (
            <>
                Enter Item Name :
                <input type="text" name="itnm" onChange={this.valupd} />
                <br />
                Enter Item Price :
                <input type="number" name="itpr" onChange={this.valupd} />
                <br />
                <select name="itqty" onChange={this.valupd}>
                    <option value="">Select Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <input type="radio" name="cat" value="Household" onChange={this.valupd} /> Household
                <input type="radio" name="cat" value="Electronics" onChange={this.valupd} /> Electronics
                <input type="radio" name="cat" value="Dress" onChange={this.valupd} /> Dress
                <br />
                <br />
                <button onClick={this.display}>SHOW</button>
                <br />
                <h3>{this.state.info}</h3>
            </>
        );
    }
}

export default PriceCalculation;