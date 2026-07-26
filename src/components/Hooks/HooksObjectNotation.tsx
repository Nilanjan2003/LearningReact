import { useState } from "react";

interface info {
    nm: string,
    age: number,
    loc: string,
    dp: string
}

const HooksObjectNotation = () => {
    const [data, setData] = useState<info>({ nm: "Rahul", age: 30, loc: "Patna", dp: "CSE" });

    const valueUpdate = () => {
        setData({ ...data, loc: "Delhi", dp: "IT" })
    }
    return (
        <>
            <ul>
                <li>Name : {data.nm}</li>
                <li>Age : {data.age}</li>
                <li>Location  : {data.loc}</li>
                <li>Dept : {data.dp}</li>
            </ul>
            <br />
            <button onClick={valueUpdate}>UPDATE</button>
        </>
    )
}

export default HooksObjectNotation;