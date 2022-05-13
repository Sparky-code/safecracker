import "./Gridbox.css";
import BoxRow from "./BoxRow";

function Gridbox({ gameSettings: { rows, cells }, maybeHandleFail, reportScore }) {
    return <div id="gridbox" className="GridBox">
        { new Array(rows).fill("").map((row, i) => <BoxRow reportScore={reportScore} cells={cells} key={`rowKey-${i}`} row={i} maybeHandleFail={maybeHandleFail} />)}
    </div>
}

export default Gridbox