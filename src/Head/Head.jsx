
import Row from 'react-bootstrap/Row';
import Logo from "./Logo";
import Info from "./Info";

function Head() {
    
    return (
        <>
            <Row>
                <Logo/>
            </Row>
            <Row>
                <Info />
            </Row>
        </>
    );
}

export default Head;