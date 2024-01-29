import Offcanvas from 'react-bootstrap/Offcanvas';
import Filters from "./Filters";

function SideBar(props) {
    return (
        <>
            <Offcanvas show={props.showFilters} onHide={props.handleFiltersClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Filters />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;