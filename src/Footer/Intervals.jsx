import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { TIME_INTERVALS } from "./constans";
import { useSelector,useDispatch } from "react-redux";
import { setActiveInterval } from "../services/stateService";

function Intervals() {
    const activeInterval=useSelector((state)=> state.main.activeInterval);
    const dispatch=useDispatch();
    return (
        <>
            <Row>
                <Col>
                <Stack className='justify-content-center' direction="horizontal" gap={3}>
                        {TIME_INTERVALS.map((i) =>{
                            return <Button key={i} active={activeInterval === i} variant="outline-warning" onClick={() => dispatch(setActiveInterval(i))}><span>{i} h</span></Button>;
                        })}
                </Stack>
                </Col>
            </Row>
        </>
    );
}

export default Intervals;