import { useState } from 'react';
import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomDot, CustomTick, CustomTooltip } from "./Chart"
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip, Line, ResponsiveContainer, ReferenceLine } from 'recharts';

import { getPriceData } from "../services/ApiService";
import { chartDataConvertor } from "../utils";


function Body(props) {
    const [priceData, setPriceData] = useState(null);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        getPriceData(props.filterFrom, props.filterUntil).then(
            ({ data }) => {
                setPriceData(chartDataConvertor(data.ee));
            }
        )
    }, [props.filterFrom, props.filterUntil]);

    useEffect(() => {
        setMinPrice((priceData?.find(item => item.min === true))?.price);
        setMaxPrice((priceData?.find(item => item.max === true))?.price);
    }, [priceData]);

    return (
        <>
            <Row>
                <Col>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={priceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis xAxisId="0" dataKey="hour" />
                            <XAxis xAxisId="1" dataKey="day" tick={<CustomTick data={priceData} />} interval={0} tickLine={false} axisLine={false} />
                            <YAxis />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="stepAfter" dataKey="price" stroke="#8884d8" activeDot={false} dot={<CustomDot />} />
                            <ReferenceLine y={maxPrice} label={`Max: ${maxPrice} c/kWh`} stroke="red" strokeDasharray="3 3" />
                            <ReferenceLine y={minPrice} label={`Min: ${minPrice} c/kWh`} stroke="green" strokeDasharray="3 3" />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </>
    );
}

export default Body;