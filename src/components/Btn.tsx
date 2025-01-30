import { faPlay, faStop,faPause } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Btn.css';
interface BtnProps{
    type: string;
    isRunning?:boolean
    onClick: ()=> void;
}

export const Btn = (props:BtnProps)=>{

    const {type,onClick ,isRunning} = props;

    if(type === 'start'){
       if(!isRunning){
        return <button className={type} onClick={onClick}><FontAwesomeIcon icon={faPlay}/></button>
       }
       return <button className={type} onClick={onClick}><FontAwesomeIcon icon={faPause}/></button>
    }
    if(type === 'stop'){
        return <button className={type} onClick={onClick}><FontAwesomeIcon icon={faStop}/></button>
    }
    if(type === 'lap'){
        return <button className={type} onClick={onClick}>Lap</button>
    }
    if(type === 'reset'){
        return <button className={type} onClick={onClick}>Reset</button>
    }

    
}