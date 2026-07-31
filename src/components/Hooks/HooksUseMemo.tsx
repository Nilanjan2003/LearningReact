import { useState, useMemo } from "react";


const HooksUseMemo = () => {
    const [count, setCount] = useState<number>(1);
    const [task, setTask] = useState<string[]>([]);

    const result = useMemo(() => getsq(count), [count]);

    const addTask = () => {
        console.log("addtask method is called");
        setTask([...task, "new task"]);
    }

    return (
        <>
            <h3>Count : {count}</h3>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <h3>Required Result : {result}</h3>
            <br />
            <button onClick={addTask}>ADD TASK</button>
            <br />
            {
                (task.length > 0) ?
                    <ol>
                        {
                            task.map((v) => {
                                return <li>{v}</li>
                            })
                        }
                    </ol> : <h3>no task added..!</h3>
            }
        </>
    )
}

const getsq = (num: number): number => {
    console.log("getsq method is called")
    return num * num;
}

export default HooksUseMemo;