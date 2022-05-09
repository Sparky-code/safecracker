import "./Overlay.css";
import Instructions from "./Instructions";
import Leaderboard from './Leaderboard';

function Overlay() {
    return <div className="Overlay">
        <Instructions/>
        <Leaderboard/>
    </div>
}

export default Overlay;