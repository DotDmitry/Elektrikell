import { useState, useEffect, useMemo, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CustomDot, CustomTick, CustomTooltip } from "./Chart"
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip, Line, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';

import { getPriceData } from "../services/ApiService";
import { chartDataConvertor } from "../utils";
import { getLowPriceInterval } from "../utils/buldIntervals";
import { ERROR_MESSAGE } from "./constans";


function Body(props) {
    const [priceData, setPriceData] = useState(null);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);

    /*  const averagePrice=useMemo(()=>{
         return setMaxPrice(max);
     }, [priceData]); use memory cash */

    /*  useCallback -static cash function */

    useEffect(() => {
        getPriceData(props.filterFrom, props.filterUntil).then(
            ({ data, success }) => {
                if (!success) throw new Error();
                const priceData = chartDataConvertor(data.ee);
                setPriceData(priceData);
            }
        ).catch(() => props.setErrorMessage(ERROR_MESSAGE));

    }, [props.filterFrom, props.filterUntil]);

    useEffect(() => {

        const min = (priceData?.find(item => item.min === true))?.price;
        const max = (priceData?.find(item => item.max === true))?.price;
        setMinPrice(min);
        setMaxPrice(max);
        props.setAveragePrice((parseFloat(min) + parseFloat(max)) / 2);
    }, [priceData]);

    useEffect(() => {
        const result = getLowPriceInterval(priceData, props.activeInterval);

        if (result) {
            setX1(result.x1);
            setX2(result.x2);
            props.setCountdownDataContext(result);
        }
    }, [priceData, props.activeInterval]);

    return (
        <>
            <Row>
                <Col>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={priceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis xAxisId="0" dataKey="hour" />
                            <XAxis xAxisId="1" dataKey="day" tick={<CustomTick data={priceData} />} interval={0} tickLine={false} axisLine={false} />
                            <XAxis xAxisId="2" dataKey="timestamp" hide={true} />
                            <YAxis dataKey="priceF" />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="stepAfter" dataKey="price" stroke="#8884d8" activeDot={false} dot={<CustomDot />} />
                            <ReferenceLine y={maxPrice} label={`Max: ${maxPrice} c/kWh`} stroke="red" strokeDasharray="3 3" />
                            <ReferenceLine y={props.averagePrice} label={`Average: ${props.averagePrice} c/kWh`} stroke="blue" strokeDasharray="3 3" />
                            <ReferenceLine y={minPrice} label={`Min: ${minPrice} c/kWh`} stroke="green" strokeDasharray="3 3" />
                            <ReferenceArea xAxisId="2" x1={x1} x2={x2} stroke="red" strokeOpacity={0.3} />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </>
    );
}

export default Body;