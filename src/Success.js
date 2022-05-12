import Confetti from 'react-confetti'


function Success() {

    return (
        <div className="confetti-wrap" style={{position:'fixed', top: 0, right:0, bottom:0, left:0}}>
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