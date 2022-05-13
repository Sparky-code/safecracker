import { useState } from 'react';
import './Gridbox.css';

function Box({ boxKey, handleSelection }) {
    const [editing, setEditing] = useState(false);
    const [boxValue, setBoxValue] = useState();
    const availableNumbers = ['0','1','2','3','4','5','6','7'];
    
    function handleChange({ target:{ value } }) {
        if(!availableNumbers.includes(value)) {
            setBoxValue('');
            return
        }
        setEditing(false);
        setBoxValue(value);
        handleSelection(boxKey, value);
    }

    function handleBlur() {
        setEditing(false)
    }

    return <div className={`Box${editing ? ' active':''}`} onClick={() => {
        if(!boxValue) setEditing(true);
    }}>
        <span className='boxValue'>{boxValue}</span>
        {editing && <input className='boxInput' autoFocus value={boxValue} onChange={handleChange} onBlur={handleBlur}/>}
    </div>
}

export default Box;