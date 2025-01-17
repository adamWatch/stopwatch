import { useState, useEffect } from 'react';

export const StopWatch = () =>{

    const [time, setTime] = useState(0); 
    const [isRunning, setIsRunning] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);

    useEffect(() => {
        let timer = 0; 
        if (isRunning) {
          timer = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else {
          clearInterval(timer);
        }
        return () => clearInterval(timer);
      }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(!isRunning);
      };
    
      const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setLaps([]);
      };
    
      const handleLap = () => {
        if (isRunning) {
          setLaps((prevLaps) => [...prevLaps, time]);
        }
      };
    
  

    const formatTime = (time: number): string => {
        const milliseconds = time % 1000;
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 60000) % 60);
        const hours = Math.floor(time / 3600000);
    
        return `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${Math.floor(
          milliseconds / 10
        )}`;
      };
      

    return(
        <>
            <h1 className='main__baner'>Stop Watch</h1>
            {formatTime(time)}
            <button onClick={handleStartStop}>Start</button>
            <button onClick={handleLap}>Lap</button>
            <button onClick={handleReset}>Reset</button>
        </>
    ) 
}  
