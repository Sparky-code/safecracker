import "./Gridbox.css";
import BoxRow from "./BoxRow";


function Gridbox({ rows }) {
    console.log(rows)
    return <div className="GridBox">
        { new Array(rows).fill("").map(() => <BoxRow/>) }
    </div>
}

export default Gridbox