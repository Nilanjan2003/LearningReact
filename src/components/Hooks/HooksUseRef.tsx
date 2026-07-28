import { useRef, useLayoutEffect } from "react";

const HooksUseRef = () => {
    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLHeadingElement>(null);


    const checkInfo = () => {
        const v = ref1.current?.value;
        alert("Input value is : " + v);
        ref2.current!.innerText = "Thank You. Have a nice day..!";

    }

    useLayoutEffect(() => {
        alert("welcome my component is loading now..!");
    }, [])

    return (
        <>
            Type Here :
            <input type="text" ref={ref1} />
            <br />
            <h3 ref={ref2}>Welcome to useRef concept</h3>
            <button onClick={checkInfo}>CHECK</button>
        </>
    )
}

export default HooksUseRef;