import { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';

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
       if(laps.length === 0){
        setLaps((prevLaps) => [...prevLaps,time])
       
      }else{

        const countAllTimeLaps = (laps:number[]):number=>{

          const allTimeLaps = laps.reduce((prevTime,currTime) => prevTime + currTime, 0)

          return allTimeLaps
        } 
        
        setLaps((prevLaps) => {
          console.log(prevLaps);
          console.log(typeof(prevLaps));
          console.log(prevLaps.length)
          const lap = time - countAllTimeLaps(prevLaps);
         

          return [...prevLaps,lap];
        })
        
      }

    }; 
  }
     

  return(
      <>
          <h1 className='main__baner'>Stop Watch</h1>
          {formatTime(time)}
          <button onClick={handleStartStop}>Start</button>
          <button onClick={handleLap}>Lap</button>
          <button onClick={handleReset}>Reset</button>
          <tbody>
            {laps.map((lap, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{
                  index + 1
                }</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  {formatTime(lap)}
                </td>
              </tr>
            ))}
          </tbody>
      </>
  ) 
}