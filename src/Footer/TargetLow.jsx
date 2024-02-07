import { useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from "./Intervals";
import Countdown from 'react-countdown';

import { currentTimeStamp, currentTimeMinutes } from "../utils/dates";


function TargetLow(props) {

    const countdownRef = useRef(null);

    useEffect(() => {

        if (countdownRef.current) {
            countdownRef.current.start();
        }

    }, []);

    return (
        <>
            <Row>
                <Col className='text-center'>Want to consume before the morning</Col>
            </Row>
            <Row>
                <Col><Intervals activeInterval={props.activeInterval} setActiveInterval={props.setActiveInterval} ></Intervals></Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    <div>The best time for this is from 0: 00 to 1: 00, which is left</div>
                    <Countdown ref={countdownRef} autoStart={false} className='fs-1' daysInHours={true} date={Date.now() + 3600000} >
                        Completed
                    </Countdown>
                    <div>Then the price per kilowatt hour will be 1.22 cents, which is 87% cheaper than it is now</div>
                </Col>
            </Row>
        </>
    );
}

export default TargetLow;