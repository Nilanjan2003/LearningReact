import { useEffect, useState } from "react";

const HooksPracticeScoreBoard = () => {

    const [runs, setRuns] = useState(0);
    const [ballsFaced, setBallsFaced] = useState(0);

    const [isOut, setIsOut] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const updateScore = (e: React.ChangeEvent<HTMLSelectElement>) => {

        if (isOut) return;

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
        }
    };

    useEffect(() => {

        if (isOut) {

            const timer = setTimeout(() => {
                setShowResult(true);
            }, 5000);

            return () => clearTimeout(timer);
        }

    }, [isOut]);

    return (
        <div style={{ padding: "20px" }}>

            <h2>Cricket Batting</h2>

            <select onChange={updateScore} disabled={isOut}>
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="wd">WD</option>
                <option value="nb">NB</option>
                <option value="out">OUT</option>
            </select>

            <h3>
                Runs Scored : {runs}
                &nbsp;&nbsp;&nbsp;
                Balls Faced : {ballsFaced}
            </h3>

            {isOut && !showResult && (
                <h3>Batsman is out... Showing result in 5 seconds.</h3>
            )}

            {showResult && (
                <h2>
                    Batsman is out scoring {runs} runs {ballsFaced} balls faced.
                </h2>
            )}

        </div>
    );
};

export default HooksPracticeScoreBoard;