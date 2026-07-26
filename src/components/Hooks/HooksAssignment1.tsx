import { useState, type ChangeEvent } from "react";

interface Info {
    nm: string,
    phy: number,
    chem: number,
    math: number
    res: number
}

const HooksAssignment1 = () => {
    const [data, setData] = useState<Info>({ nm: "", phy: 0, chem: 0, math: 0, res: 0 });
    const [students, setStudents] = useState<{ stnm: string; total: number }[]>([]);

    const valUpd = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const result = () => {
        const totalMarks = Number(data.phy) + Number(data.chem) + Number(data.math);
        setStudents([...students, { stnm: data.nm, total: totalMarks }])
    }

    return (
        <>
            Enter Name :
            <input type="text" name="nm" onChange={valUpd} /> <br />
            Enter Physics Marks :
            <input type="number" name="phy" onChange={valUpd} /> <br />
            Enter Chemistry Marks :
            <input type="number" name="chem" onChange={valUpd} /> <br />
            Enter Math Marks :
            <input type="number" name="math" onChange={valUpd} /> <br />
            <button onClick={result}>RESULT</button>

            <h4>Student List</h4>

            <ol>
                {students.map((val, index) => (
                    <li key={index}>
                        Student Name : {val.stnm} || Total Marks : {val.total}
                    </li>
                ))}
            </ol>
        </>
    )
}

export default HooksAssignment1;