import { useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from "./Intervals";
import Countdown from 'react-countdown';
import { useSelector } from "react-redux";

function TargetLow() {

    const countdownRef = useRef(null);
    const countdownDataContext = useSelector((state) => state.body.countdownDataContext);

    useEffect(() => {

        if (countdownDataContext && !countdownDataContext.isNow && countdownRef.current) {
            countdownRef.current.start();
        }

    }, [countdownDataContext]);

    return (
        <>
            <Row>
                <Col className='text-center'>Want to consume before the morning</Col>
            </Row>
            <Row>
                <Col><Intervals ></Intervals></Col>
            </Row>
            <Row>
                <Col className='text-center'>
                    {countdownDataContext != null ?
                        <>
                            {countdownDataContext.isNow ?
                                <>
                                    <div>The best time for that</div>
                                    <div className='fs-1 fw-semibold'>CURRENTLY</div>
                                    <div>Later, all classes are already more expensive</div>
                                </>
                                :
                                <>
                                    <div>The best time for this is {countdownDataContext.bestTime}, which is left</div>
                                    <Countdown ref={countdownRef} autoStart={false} className='fs-1' daysInHours={true} date={countdownDataContext.countDownMS} >
                                    </Countdown>
                                    <div>Then the price per kilowatt hour will be {countdownDataContext.averagePrice} cents, which is {countdownDataContext.deltaPercent}% {countdownDataContext.isCheap ? "cheaper" : "more expensive"} than it is now</div>
                                </>}
                        </> : <div></div>
                    }
                </Col>
            </Row>
        </>
    );
}

export default TargetLow;