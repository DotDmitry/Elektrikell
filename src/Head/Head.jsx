
import Row from 'react-bootstrap/Row';
import Logo from "./Logo";
import Info from "./Info";

function Head(props) {
    return (
        <>
            <Row>
                <Logo/>
            </Row>
            <Row>
                <Info {...props}/>
            </Row>
        </>
    );
}

export default Head;