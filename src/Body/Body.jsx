import { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Sliders } from 'react-bootstrap-icons';
import { CustomDot, CustomTick, CustomTooltip } from "./Chart"
import { LineChart, CartesianGrid, YAxis, XAxis, Tooltip, Line, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';

import { getPriceData } from "../services/ApiService";
import { chartDataConvertor } from "../utils";
import { getLowPriceInterval } from "../utils/buldIntervals";
import { ERROR_MESSAGE } from "./constans";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage, handleShowSideBar, setCountdownDataContext, setIsLoading } from "../services/stateService";
import { ElectricPriceContext } from "../Contexts/ElectricPriceContext"

function Body() {

    console.log("body");
    const dispatch = useDispatch();
    /*  const averagePrice = useSelector((state) => state.body.averagePrice); */
    const activeInterval = useSelector((state) => state.main.activeInterval);

    const filterFrom = useSelector((state) => state.dates.filterFrom);
    const filterUntil = useSelector((state) => state.dates.filterUntil);

    const [priceData, setPriceData] = useState(null);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);

    const { actions, values } = useContext(ElectricPriceContext);
    const averagePrice = values.averagePrice;

    /*  const averagePrice=useMemo(()=>{
         return setMaxPrice(max);
     }, [priceData]); use memory cash */

    /*  useCallback -static cash function */

    useEffect(() => {
        dispatch(setIsLoading(true));
        getPriceData(filterFrom, filterUntil).then(
            ({ data, success }) => {
                if (!success) throw new Error();
                const priceData = chartDataConvertor(data.ee);
                setPriceData(priceData);
            }
        ).catch(() => dispatch(setErrorMessage(ERROR_MESSAGE)))
            .finally(() => dispatch(setIsLoading(false)));

    }, [filterFrom, filterUntil]);

    useEffect(() => {

        const min = (priceData?.find(item => item.min === true))?.price;
        const max = (priceData?.find(item => item.max === true))?.price;
        setMinPrice(min);
        setMaxPrice(max);
        actions.setAveragePrice((parseFloat(min) + parseFloat(max)) / 2);
    }, [priceData]);

    useEffect(() => {
        const result = getLowPriceInterval(priceData, activeInterval);

        if (result) {
            setX1(result.x1);
            setX2(result.x2);
            dispatch(setCountdownDataContext(result));
        }
    }, [priceData, activeInterval]);

    return (
        <>
            <Row>
                <Col>
                    <Button className='p-2' style={{ lineHeight: '0' }} variant="outline-secondary" onClick={() => dispatch(handleShowSideBar())}>
                        <Sliders />
                    </Button>
                </Col>
            </Row>
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
                            <ReferenceLine y={averagePrice} label={`Average: ${averagePrice.toFixed(2)} c/kWh`} stroke="blue" strokeDasharray="3 3" />
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