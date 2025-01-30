import { useState, useEffect } from 'react';
import { Btn } from './Btn';
import { LapTable } from './LapTable';
import { ShowTimer } from './ShowTimer';
import '../styles/StopWatch.css';

export const StopWatch = () =>{

  const [time, setTime] = useState(0);
  const [lapTime,setLapTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
      let timer = 0; 
      if (isRunning) {
        timer = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
          setLapTime((prevTime) => prevTime + 10);
        }, 10);
      } else {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }, [isRunning]);

  const handleStartStop = () => {
      setIsRunning(!isRunning);
    };
  const handleStop =()=>{
    console.log('de')
  }  

    const handleReset = () => {
      setIsRunning(false);
      setTime(0);
      setLapTime(0);
      setLaps([]);
    };
  
    const handleLap = () => {
      if (isRunning) {
        setLapTime(0);
       if(laps.length === 0){
        setLaps((prevLaps) => [...prevLaps,time])
       
      }else{        
        setLaps((prevLaps) => {
          const lap = time - laps.reduce((prevTime,currTime) => prevTime + currTime, 0);
         

          return [...prevLaps,lap];
        })
        
      }

    }; 
  }
     

  return(
      <div className='container'>
          <h1 className='baner'>Stop Watch</h1>
          <ShowTimer mainTimer={time} secondTimer={lapTime}/>
          <div className='btns__container'>
           <Btn type='start' isRunning={isRunning} onClick={handleStartStop}/>
           <Btn type='stop' onClick={handleStop}/>
           <Btn type='lap' onClick={handleLap}/>
           <Btn type='reset' onClick={handleReset}/>
          </div>
          <LapTable laps={laps}/>
      </div>
  ) 
}