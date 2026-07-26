import { Component } from "react";
import './CssExOne.css';
export default class CssExOne extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h3 style={{ color: 'red', backgroundColor: 'lightblue', fontFamily: 'cursive', border: '2px solid green', width: '40%', textAlign: 'center' }}>
                        Welcome to my css Example
                    </h3>
                    <ol style={{ color: 'blue', backgroundColor: 'lightgrey', fontFamily: 'cursive', border: '2px solid green', width: '40%', textAlign: 'left' }}>
                        <li>Hallo php</li>
                        <li>Hallo Java</li>
                        <li>Hallo C</li>
                    </ol>
                    <br />
                    <div id="d1">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Quae nesciunt aut, dolores quaerat ipsum aliquid labore
                            distinctio esse recusandae, pariatur modi repellat corrupti
                            culpa ad deleniti? Ad ipsum vero ipsam blanditiis sint accusantium
                            quis officia. Cupiditate ipsa aliquid quis expedita unde hic quisquam
                            similique, quam praesentium. Adipisci numquam architecto eos?
                        </p>
                    </div>
                    <br />
                    <span className="test">Thank You Have a nice day..!</span>
                    <div className="bg-warning text-primary p-3 mt-2 mb-2">
                        <p className="text-center">Welcome to my bootstrap example</p>
                        <button className="btn btn-outline-danger">TEST</button>
                    </div>
                </div>
            </>
        )
    }
}