import Offcanvas from 'react-bootstrap/Offcanvas';
import Filters from "./Filters";

function SideBar(props) {
    return (
        <>
            <Offcanvas show={props.show} onHide={props.handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Filters handleClose={props.handleClose}  />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;