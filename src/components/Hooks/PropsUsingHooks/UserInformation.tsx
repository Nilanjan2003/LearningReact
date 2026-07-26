import React, { useState } from "react"
import Display from "./Display";


interface User {
    nm: string,
    dp: string,
    info: { nm: string, dp: string }[]
}

const UserInformation = () => {
    const [data, setData] = useState<User>({ nm: '', dp: '', info: [] });

    const valupd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const addInfo = () => {
        const v = { nm: data.nm, dp: data.dp };
        setData({ ...data, info: [...data.info, v], nm: '', dp: '' });
    }

    return (
        <>
            Enter Name :
            <input type="text" name="nm" value={data.nm} onChange={valupd} /> <br />
            Enter Department :
            <input type="text" name="dp" value={data.dp} onChange={valupd} /> <br />
            <button onClick={addInfo}>SHOW</button>
            {
                (data.info.length > 0) ? <Display result={data.info} />
                    :
                    <h3>
                        No info added yet..!
                    </h3>
            }
        </>
    )
}

export default UserInformation