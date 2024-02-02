

function CustomTick(props) {

    const { x, y, payload, data } = props;
    const backgroundColor = data[payload.index].color;
    const isRender = data[payload.index].hour === "00" || payload.index === 0||payload.index === data.length - 1;
    const textAnchorA = payload.index === data.length - 1 ? "end" : "middle";

    if (!isRender) {
        return null;
    }

    return (
        <g transform={`translate(${x},${y})`}>
            <line orientation="bottom" width="453" height="30" x={0} y={0}
                className="recharts-cartesian-axis-tick-line"
                stroke={backgroundColor} fill="none" x1={0} y1={-2} x2={0} y2={-36}></line>
            <text x={0} y={0} dy={16} textAnchor={textAnchorA} fill="#666">{payload.value}</text>
        </g>
    );
};

export default CustomTick;