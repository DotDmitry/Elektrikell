
function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-light border border-primary p-2">
                <div className="date">{`${payload[0].payload?.day}`}</div>
                <div className="label">{`${label}:00 - ${Number(label) + 1}:00`}</div>
                <div className="intro">{`${payload[0].value}  c/kWh`}</div>
            </div>
        );
    }

    return null;
};

export default CustomTooltip;