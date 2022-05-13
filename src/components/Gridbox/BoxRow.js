import { useContext, useState, useEffect } from "react";
import GameContext from "../../context";
import Box from "./Box";
import BoxRowResults from "./BoxRowResults";
import './Gridbox.css'

function BoxRow({ cells, maybeHandleFail, reportScore, row }) {
    const {superSecretNumbers} = useContext(GameContext);
    const [rowResults, setRowResults] = useState(new Array(cells).fill('').reduce((agg, cell, i) => ({...agg, [`box${i}`]: ''}), {}));
    const [isActive, setIsActive] = useState(true);

    function handleSelection(boxKey, boxValue) {
        setRowResults({...rowResults, [`${boxKey}`]:boxValue});
    }

    function handleReportScore(scoreStatuses) {
        reportScore(scoreStatuses, row);
    }

    useEffect(()=> {
        if(superSecretNumbers) {
            const values = Object.values(rowResults).filter((rowResult) => rowResult !== '');
            if(values.length !== superSecretNumbers.length) return;
            if(superSecretNumbers.every((superSecretNumber, i) => values[i] === superSecretNumber)) {
                maybeHandleFail(row, true);
            } else {
                maybeHandleFail(row);
            }
            setIsActive(false);
        }
    },[rowResults, maybeHandleFail, superSecretNumbers]);

    return <div  className={`BoxRow${isActive ? '':' failed'}`}>
        <div className={`BoxRowNumbers${isActive ? '':' failed'}`}>
            {Object.keys(rowResults).map((boxKey) => <Box key={boxKey} boxKey={boxKey} handleSelection={handleSelection}/>)}
        </div>
        {superSecretNumbers && superSecretNumbers.length && Object.values(rowResults).length === cells && <BoxRowResults reportScore={handleReportScore} rowResults={Object.values(rowResults)} isActive={isActive} superSecretNumbers={superSecretNumbers}/>}
    </div>
}

export default BoxRow;
