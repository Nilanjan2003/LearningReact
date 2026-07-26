import { useState, type ChangeEvent } from "react";

interface Info {
    nm: string,
    email: string,
    dp: string
}

const HooksUserInput = () => {
    const [data, setData] = useState<Info>({ nm: "", email: "", dp: "" });

    const valUpd = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    return (
        <>
            Enter Name :
            <input type="text" name="nm" onChange={valUpd} />
            <br />
            Enter Email :
            <input type="text" name="email" onChange={valUpd} />
            <br />
            Enter Department :
            <input type="text" name="dp" onChange={valUpd} />
            <br />
            Name is : {data.nm} <br />
            Email is : {data.email} <br />
            Department is :{data.dp}
        </>
    )
}

export default HooksUserInput;