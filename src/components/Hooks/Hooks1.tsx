import { useState } from "react";

const Hooks1 = () => {
    const [nm, setNm] = useState<string>("Nil");
    const [loc, setLoc] = useState<string>("Kolkata");
    const [age, setAge] = useState<number>(30);

    const valUpd = () => {
        setNm("Nilanjan Ghosh");
        setLoc("Pune");
        setAge(35);
    }

    return (
        <>
            <ul>
                <li>Name : {nm}</li>
                <li>Location : {loc}</li>
                <li>Age : {age}</li>
            </ul>
            <br />
            <button onClick={valUpd}>UPDATE</button>
        </>
    )
}
export default Hooks1;