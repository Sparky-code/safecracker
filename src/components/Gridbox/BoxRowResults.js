import Circle from "./Circle";

function BoxRowResults ({ isActive, rowResults, superSecretNumbers }) {
    console.log(superSecretNumbers)
    let secretNumbersCopy = [...superSecretNumbers];
    const correctBucket = [];
    const existsBucket = [];
    const missesBucket = [];
    if (!isActive) {
        for(let i = 0; i < secretNumbersCopy.length; i++) {
            if(!secretNumbersCopy.includes(rowResults[i])) {
                missesBucket.push('miss');
                continue;
            }
            if(secretNumbersCopy[i] === rowResults[i]) {
                correctBucket.push('correct');
                secretNumbersCopy[i] = null;
                continue;
            }
            existsBucket.push('exists');
            for(let j = 0; j < secretNumbersCopy.length; j++) {
                if(secretNumbersCopy[j] === rowResults[i]) {
                    secretNumbersCopy[j] = null;
                    break;
                }
            }
        } 
    }

    return <div className="BoxRowResults">
        {isActive ? <>
            {superSecretNumbers.map((num, i) => <Circle key={`circle-${num}-${i}`} />)}
        </>
        :
        <>
            {[...correctBucket, ...existsBucket, ...missesBucket].map((type, i) => <Circle type={type} key={`circle-${type}-${i}`} />)}
        </>
        }
    </div>
}

export default BoxRowResults;