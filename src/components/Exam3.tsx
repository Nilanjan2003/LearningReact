import { Component } from "react";

interface Test1 {
    name: string,
    age: number,
    dept: string,
    email: string,
    skills: string[]
}

class Exam3 extends Component {
    state: Test1 = {
        name: "Rahul",
        age: 25,
        dept: "IT",
        email: "rahuljoshi123@gmail.com",
        skills: ["HTML", "CSS", "JS", "React"]
    }

    valueUpdate=()=>{
        console.log("update function is called");
        this.setState({age:35,dept:"CSE",email:"rj123@gmail.com"});
    }

    render() {
        return (
            <>
                <ul>
                    <li>Nmae : {this.state.name}</li>
                    <li>Age : {this.state.age}</li>
                    <li>Department : {this.state.dept}</li>
                    <li>Email : {this.state.email}</li>
                    <li>Skills : {this.state.skills.join(",")}</li>
                </ul>
                <br />
                <button onClick={this.valueUpdate}>UPDATE</button>
            </>
        );
    }
}

export default Exam3;

