import { useState } from 'react';
import './Gridbox.css';

function Box({ boxKey, handleSelection }) {
    const [editing, setEditing] = useState(false);
    const [boxValue, setBoxValue] = useState();
    const availableNumbers = ['0','1','2','3','4','5','6'];
    
    function handleChange({ target:{ value } }) {
        if(!availableNumbers.includes(value)) {
            setBoxValue('');
            return
        }
        setEditing(false);
        setBoxValue(value);
        handleSelection(boxKey, value);
    }

    return <div className='Box' onClick={() => {
        if(!boxValue) setEditing(true);
    }}>
        <span className='boxValue'>{boxValue}</span>
        {editing && <input className='boxInput' autoFocus value={boxValue} onChange={handleChange}/>}
    </div>
}

export default Box;