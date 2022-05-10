import "./Overlay.css";
import { Close } from "../../assets";

function Overlay({ children, closeOverlay }) {
    return <div className="Overlay" onClick={closeOverlay}>
        <div className="overlayContent" onClick={(event) => {event.stopPropagation()}}>
            <img src={Close} alt="close overlay" className="overlayCloseIcon" onClick={closeOverlay}/> 
        { children }
        </div>
    </div>
}

export default Overlay;