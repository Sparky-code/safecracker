import { useState } from "react";
import "./Header.css";
import { Award, QuestionMark } from "../../assets";
import Overlay from "../Overlay";
import Leaderboard from "./Leaderboard";
import { instructions } from "./constants";


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayContent, setOverlayContent] = useState('');

    const handleAwardClick = () => {
        const leaders = JSON.parse(window.localStorage.getItem('leaders')) ?? [];
        setOverlayContent(<Leaderboard closeOverlay={() => setIsOpen(false)} leaders={leaders}/>);
        setIsOpen(true)
    } 
    const handleQuestionMarkClick = () => {
        setOverlayContent(instructions);
        setIsOpen(true)
    } 

    return <div className="Header">
        <img src={QuestionMark} alt="question mark symbol" className="instructions" onClick={ handleQuestionMarkClick }/>
        <h1 className="titleText">Safe Cracker</h1>
        <img src={Award} alt="award symbol" className="leaderboard" onClick={ handleAwardClick }/>
       { isOpen && <Overlay closeOverlay={() => {setIsOpen(false)}}>{overlayContent}</Overlay> }
    </div>
}

export default Header;