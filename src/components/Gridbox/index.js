import { useContext } from "react";
import GameContext from "../../context";
import "./Gridbox.css";
import BoxRow from "./BoxRow";


function Gridbox({ rows }) {
    const {resultsApi:[results, setResults]} = useContext(GameContext);
    
    function handleSubmission(submission) {
        console.log(submission)
    }

    return <div className="GridBox">
        { new Array(rows).fill("").map((row, i) => <BoxRow key={`rowKey-${i}`} row={i} handleSubmission={handleSubmission}/>) }
    </div>
}

export default Gridbox