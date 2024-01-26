import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { TIME_INTERVALS } from "./constans"

function Intervals({ activeInterval, setActiveInterval }) {
    return (
        <>
            <Row>
                <Col>
                <Stack className='justify-content-center' direction="horizontal" gap={3}>
                        {TIME_INTERVALS.map((i) =>{
                            return <Button key={i} active={activeInterval === i} variant="outline-warning" onClick={() => setActiveInterval(i)}><span>{i} h</span></Button>;
                        })}
                </Stack>
                </Col>
            </Row>
        </>
    );
}

export default Intervals;