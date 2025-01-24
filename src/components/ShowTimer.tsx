import { formatTime } from '../utils/formatTime';


interface ShowTimeProps{
    mainTimer:number,
    secondTimer:number
}

export const ShowTimer = (props:ShowTimeProps)=>{

    const {mainTimer,secondTimer} = props;

    return (
        <div className="timer__container">
            <div className="main__timer">{formatTime(mainTimer)}</div>
            <div className="lap__timer">{formatTime(secondTimer)}</div>
        </div>
    )
}