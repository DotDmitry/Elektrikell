import Offcanvas from 'react-bootstrap/Offcanvas';
import Filters from "./Filters";
import { useSelector, useDispatch } from "react-redux";
import { handleCloseSideBar } from "../services/stateService";

function SideBar() {

    const dispatch = useDispatch();
    const show = useSelector((state) => state.body.showFilters);
    const close = () => dispatch(handleCloseSideBar());

    return (
        <>
            <Offcanvas show={show} onHide={close}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Filters handleClose={close} />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default SideBar;