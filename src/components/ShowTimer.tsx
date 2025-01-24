import { formatTime } from '../utils/formatTime';
import '../styles/ShowTimer.css';


interface ShowTimeProps{
    mainTimer:number,
    secondTimer:number
}

export const ShowTimer = (props:ShowTimeProps)=>{

    const {mainTimer,secondTimer} = props;

    return (
        <div className="timer__container">
            <h3>Main Timer:</h3>
            <div className="timer main">{formatTime(mainTimer)}</div>
            <h3>Lap Timer:</h3>
            <div className="timer">{formatTime(secondTimer)}</div>
        </div>
    )
}