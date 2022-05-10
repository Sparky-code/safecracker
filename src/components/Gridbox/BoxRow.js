import { useContext, useState, useEffect } from "react";
import GameContext from "../../context";
import Box from "./Box";
import './Gridbox.css'

function BoxRow({ row, handleSubmission }) {
    const {resultsApi:[results], superSecretNumbers} = useContext(GameContext);
    const [rowResults, setRowResults] = useState(results[row] ?? {box0:'', box1:'', box2:'', box3:'',});

    function handleSelection(boxKey, boxValue) {
        setRowResults({...rowResults, [`${boxKey}`]:boxValue});
    }

    useEffect(()=> {
        const values = Object.values(rowResults).filter((rowResult) => rowResult !== '');
        if(values.length === 4) handleSubmission(values);
    },[rowResults, handleSubmission])

    return <div className="BoxRow">
        {Object.keys(rowResults).map((boxKey) => <Box key={boxKey} boxKey={boxKey} handleSelection={handleSelection}/>)}
    </div>
}

export default BoxRow;