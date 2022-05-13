import Confetti from 'react-confetti'

function Success() {
    return (
        <div style={{position:'fixed', top: 0, right:0, bottom:0, left:0, backgroundColor: '#00000080'}}>
            <Confetti
                recycle={true}
                numberOfPieces={200}
                width={window.innerWidth}
                height={window.innerHeight}
            />
        </div>
    )
}

export default Success