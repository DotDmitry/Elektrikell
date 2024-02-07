import { useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from "./Intervals";
import Countdown from 'react-countdown';

function TargetLow(props) {

    const countdownRef = useRef(null);

    useEffect(() => {

        if (props.countdownDataContext && !props.countdownDataContext.isNow && countdownRef.current) {
            countdownRef.current.start();
        }

    }, [props.countdownDataContext]);

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
                    {props.countdownDataContext != null ?
                        <>
                            {props.countdownDataContext.isNow ?
                                <>
                                    <div>The best time for that</div>
                                    <div className='fs-1 fw-semibold'>CURRENTLY</div>
                                    <div>Later, all classes are already more expensive</div>
                                </>
                                :
                                <>
                                    <div>The best time for this is {props.countdownDataContext.bestTime}, which is left</div>
                                    <Countdown ref={countdownRef} autoStart={false} className='fs-1' daysInHours={true} date={props.countdownDataContext.countDownMS} >
                                    </Countdown>
                                    <div>Then the price per kilowatt hour will be {props.countdownDataContext.averagePrice} cents, which is {props.countdownDataContext.deltaPercent}% {props.countdownDataContext.isCheap?"cheaper":"more expensive"} than it is now</div>
                                </>}
                        </> : <div></div>
                    }
                </Col>
            </Row>
        </>
    );
}

export default TargetLow;