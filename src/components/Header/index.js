import "./Header.css";
import QuestionMark from "./questionMark.svg";
import Award from "./award.svg";


function Header() {
    return <div className="Header">
        <img src={QuestionMark} alt="question mark symbol" className="instructions"/>
        <img src={Award} alt="award symbol" className="leaderboard"/>
        <h1>Safe Cracker</h1>
    </div>
}

export default Header;