import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { TIME_INTERVALS } from "./constans"

function Intervals({ activeInterval, setActiveInterval }) {
    return (
        <>
            <Row>
                <Col>
                    <ButtonGroup>

                        {TIME_INTERVALS.map((i) =>{
                            return <Button key={i} active={activeInterval === i} variant="info" onClick={() => setActiveInterval(i)}><span>{i} h</span></Button>;
                        })}
                    </ButtonGroup>
                </Col>
            </Row>
        </>
    );
}

export default Intervals;