import './Gridbox.css';

function Box({ number }) {
    return <div className='Box'>
        <input value={ number }/>
    </div>
}

export default Box;