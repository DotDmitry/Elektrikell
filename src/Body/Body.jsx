import { useState } from 'react';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from "moment/moment"
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';

import { getPriceData } from "../services/ApiService";
import { chartDataConvertor } from "../utils";


function Body(props) {
    const [priceData, setPriceData] = useState(null);
    useEffect(() => {
        getPriceData(props.filterFrom, props.filterUntil).then(
            ({ data }) => {
                setPriceData(chartDataConvertor(data.ee));
                console.log(priceData);
            }
        )
    }, [props.filterFrom, props.filterUntil]);

    const CustomTick = ({ x, y, payload, data }) => {
        const backgroundColor = data[payload.index].color;

        return (
            <g transform={`translate(${x},${y})`}>
                <line orientation="bottom" width="453" height="30" x={0} y={0}
                    className="recharts-cartesian-axis-tick-line"
                    stroke={backgroundColor} fill="none" x1={0} y1={-2} x2={0} y2={-36}></line>
                <text x={0} y={0} dy={16} textAnchor="middle" fill="#666">{payload.value}</text>
            </g>
        );
    };

    const CustomTooltip = ({ active, payload, label }) => {
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

    const CustomDot = (props) => {
        const { cx, cy, payload, value } = props;
        const currentDay = moment(payload.day, "DD/MM/yyyy");
        currentDay.hour(parseInt(payload.hour));
        const now = moment();

        const isSpecialDot = currentDay.isSame(now, 'day') && currentDay.isSame(now, 'hour');
        if (!isSpecialDot) {
            return null;
        }

        return (
            <g>
                <circle cx={cx + 10} cy={cy} r={6} fill='red' />
                <text x={cx + 10} y={cy - 10} textAnchor="middle" fill="#666">{value}</text>
            </g>
        );
    };

    return (
        <>
            <Row>
                <Col>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={priceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis xAxisId="0" dataKey="hour" />
                            <XAxis xAxisId="1" dataKey="day" tick={<CustomTick data={priceData} />} /> {/* interval={23} */}
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="stepAfter" dataKey="price" stroke="#8884d8" dot={<CustomDot />} />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </>
    );
}

export default Body;