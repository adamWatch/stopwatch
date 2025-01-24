import { formatTime } from '../utils/formatTime';

interface LapTableProps {
    laps:number[];
}


export const LapTable = (props:LapTableProps)=>{

    const {laps} = props

    return(
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
    )
}