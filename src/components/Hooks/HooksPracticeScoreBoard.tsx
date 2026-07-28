import { useEffect, useState } from "react";

const HooksPracticeScoreBoard = () => {
    const [runs, setRuns] = useState(0);
    const [ballsFaced, setBallsFaced] = useState(0);
    const [isOut, setIsOut] = useState(false);

    const updateScore = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (isOut) {
            return;
        }

        const value = e.target.value;

        switch (value) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "6":
                setRuns(prev => prev + Number(value));
                setBallsFaced(prev => prev + 1);
                break;

            case "wd":
                setRuns(prev => prev + 1);
                break;

            case "nb":
                setRuns(prev => prev + 1);
                break;

            case "out":
                setBallsFaced(prev => prev + 1);
                setIsOut(true);
                break;

            default:
                break;
        }

        // Reset dropdown to "Select"
        e.target.selectedIndex = 0;
    };

    useEffect(() => {
        if (!isOut) return;

        const timer = setTimeout(() => {
            setRuns(0);
            setBallsFaced(0);
            setIsOut(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isOut]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Cricket Batting</h2>

            <label>Batting Dropdown : </label>

            <select onChange={updateScore} defaultValue="">
                <option value="" disabled>
                    Select
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="wd">WD</option>
                <option value="nb">NB</option>
                <option value="out">OUT</option>
            </select>

            <br />
            <br />

            <h3>Runs Scored : {runs}</h3>
            <h3>Balls Faced : {ballsFaced}</h3>

            {isOut && (
                <h2 style={{ color: "red" }}>
                    Batsman is out scoring {runs} runs {ballsFaced} balls faced.
                    <br />
                    Next batsman will start in 5 seconds...
                </h2>
            )}
        </div>
    );
};

export default HooksPracticeScoreBoard;