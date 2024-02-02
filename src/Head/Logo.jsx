import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Sliders } from 'react-bootstrap-icons';


function Logo(props) {
    return (
        <>
            <Col>
            Logo 
            <Button className='p-2' style={{lineHeight:'0'}} variant="outline-secondary" onClick={props.handleShowSideBar}>
                <Sliders />
            </Button>
            </Col>
        </>
    );
}

export default Logo;