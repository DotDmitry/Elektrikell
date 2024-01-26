import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TargetHigh() {
    return (
        <>
            <Row>
                <Col>
                    <div className="infoText peak text-center">
                        <div>Near future</div>
                        <b>NO PEAK HOURS</b>
                        <div >
                        <span>if you want to consume at the most reasonable time, select <span> Cheap hours from the top</span > and you will find the best time to do so.</span>
                        </div>
                        <span className="peakHoursDescription" >We recommend reducing electricity consumption during peak hours to contribute to the common European goal of reducing electricity consumption by -5% during peak hours and reducing natural gas demand.</span>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default TargetHigh;