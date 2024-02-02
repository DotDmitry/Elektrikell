import { Dot, Label } from 'recharts';
import { currentTimeStamp, currentTimeMinutes } from "../../utils/dates";


function CustomDot(props) {
    const { cx, cy, payload, value } = props;
    const currentDay = currentTimeStamp();
    const { ...newProps } = props;

    const isSpecialDot = payload.timestamp === currentDay;
    if (!isSpecialDot) {
        return null;
    }
    const deltaX = (currentTimeMinutes() / 60) * (cx / (props.index + 2));

    newProps.cx = cx + deltaX;
    newProps.cy = cy;

    return (
        <>
            <Dot {...newProps} r={6} fill="white" strokeWidth={1} stroke="red" />
            <Dot {...newProps} r={4} fill="red" strokeWidth={1} stroke="none" />
            <text x={newProps.cx} y={newProps.cy - 20} textAnchor="middle" fill="#666">{`${value} c/kWh`}</text>
        </>
        /*  <g>
             <circle cx={cx + 10} cy={cy} r={6} fill='red' />
             
         </g> */
    );
};

export default CustomDot;