import './Header.css'

function Leaderboard({ closeOverlay, leaders }) {
    function handleClearLeaderboard () {
        window.localStorage.removeItem('leaders');
        closeOverlay();
    }

    return <div className="Leaderboard">
        {leaders.length === 0 ? <div>No Current High Scores</div> : <table>
            <tbody  className='leaderboardColumns'>
            <tr>
                <th>User Name</th>
                <tr>
                {leaders.map(({userName}, i) => <td className='leaderData' key={`userName-${i}-key`}>{userName}</td>)}
            </tr>
            </tr>
            <tr>
                <th>Score</th>
                <tr>
                {leaders.map(({score}, i) => <td className='leaderData' key={`score-${i}-key`}>{score}</td>)}
            </tr>
            </tr>
            </tbody>
        </table>}
        {leaders.length > 0 && <button className='clearLeaderboardButton' onClick={handleClearLeaderboard}>Clear Leaderboard</button>}
    </div>
}


export default Leaderboard;