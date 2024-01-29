
import Row from 'react-bootstrap/Row';
import Logo from "./Logo";
import Info from "./Info";

function Head(props) {
    return (
        <>
            <Row>
                <Logo handleShowSideBar={props.handleShowSideBar} />
            </Row>
            <Row>
                <Info {...props}/>
            </Row>
        </>
    );
}

export default Head;