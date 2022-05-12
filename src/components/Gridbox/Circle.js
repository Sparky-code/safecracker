import './Gridbox.css';
// import { Circle as CircleSvg } from '../../assets'; 

function Circle({ type = 'miss' }) {
    const colorMap = {
         exists: '#fcea70',
         correct: '#8df59a',
         miss: 'none',
    }
    // return <img src={CircleSvg} alt='Circle component' className={`Circle ${type}`} />
    return <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={colorMap[type]}
                stroke={type !== 'miss' ? colorMap[type] : 'black'}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-circle Circle"
            >
        <circle cx="12" cy="12" r="10">
        </circle>
    </svg>
}

export default Circle;