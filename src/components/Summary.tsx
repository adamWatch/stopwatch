import { formatTime } from '../utils/formatTime';
import '../styles/Summary.css';

interface SummaryProps {
    mainTime: number;
    laps: number[];
}

export const Summary = (props:SummaryProps) =>{

    const {mainTime,laps} = props;

    const averageLapTime = laps.reduce((prev,curr)=> prev + curr,0) / laps.length ;

    const bestLapTime = Math.min(...laps);
    const worstLapTime = Math.max(...laps);

    return (
        <div className="summary__container">
            <h2 className='summary__baner'>Main Timer:</h2>
            <div className="timer main">{formatTime(mainTime)}</div>
            <h3>Average lap time:</h3>
            <div className='summary__item'>{formatTime(averageLapTime)}</div>
            <h3>Best lap Time:</h3>
            <div className='summary__item best'>{formatTime(bestLapTime)}</div>
            <h3>Worst lap Time:</h3>
            <div className='summary__item worst'>{formatTime(worstLapTime)}</div>
            <h3>Amount of laps:</h3>
            <div className='summary__item'>{laps.length}</div>
            
        </div>

    )

}