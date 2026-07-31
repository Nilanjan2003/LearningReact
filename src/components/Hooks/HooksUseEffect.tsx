import { useEffect, useLayoutEffect, useRef, useState } from "react";


interface User {
    nm: string,
    dp: string,
    age: number,
    loc: string
}

const HooksUseEffect = () => {
    const [info] = useState<User>({ nm: 'Avishek', dp: 'Developer', age: 26, loc: 'Kolkata' })
    const ref1 = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        setTimeout(() => {
            ref1.current!.innerText = `Name : ${info.nm} | Designation : ${info.dp} | Age : ${info.age} | Location : ${info.loc}`
        }, 5000)
    }, [info])

    useEffect(() => {
        return (
            () => {
                alert("Goodbye all ... Component is unloading now..!")
            }
        )
    }, [])

    useLayoutEffect(() => {
        alert("Welcome, My component is loading now..!")
    }, [])

    return (
        <>
            <h3 ref={ref1}>Plz wait for 5 sec.....Loading...!</h3>
        </>
    )
}

export default HooksUseEffect;