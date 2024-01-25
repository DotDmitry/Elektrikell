import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Intervals from "./Intervals";

function TargetLow(props) {



    return (
        <>
            <Row>
                <Col>Want to consume before the morning</Col>
            </Row>
            <Row>
                <Col><Intervals activeInterval={props.activeInterval} setActiveInterval={props.setActiveInterval} ></Intervals></Col>
            </Row>
            <Row>
                <Col>Last Row</Col>
            </Row>
        </>
    );
}

export default TargetLow;