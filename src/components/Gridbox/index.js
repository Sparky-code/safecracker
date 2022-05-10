import { useContext } from "react";
import GameContext from "../../context";
import "./Gridbox.css";
import BoxRow from "./BoxRow";


function Gridbox({ rows }) {
    const {resultsApi:[results, setResults]} = useContext(GameContext);
    
    function handleSuccess() {
        console.log('success!')
    }

    return <div className="GridBox">
        { new Array(rows).fill("").map((row, i) => <BoxRow key={`rowKey-${i}`} row={i} handleSuccess={handleSuccess}/>) }
    </div>
}

export default Gridbox