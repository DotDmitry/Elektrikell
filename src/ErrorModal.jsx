import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "./services/stateService";

function ErrorModal() {

    const dispatch=useDispatch();
    const handleClose=() => dispatch(setErrorMessage(null));
    const errorMessage = useSelector((state) => state.main.errorMessage);

    return (
        <Modal show={!!errorMessage} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{errorMessage}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal;