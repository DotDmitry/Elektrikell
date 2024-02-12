import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { convertToInputFormat, convertToRequstFormat } from "../utils/dates"
import { useSelector, useDispatch } from "react-redux";
import { setfilterFrom, setfilterUntil } from "../services/stateService";

function Filters(props) {

    const filterFrom = useSelector((state) => state.dates.filterFrom);
    const filterUntil = useSelector((state) => state.dates.filterUntil);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const from = convertToRequstFormat(event.target.filtersFrom.value);
        dispatch(setfilterFrom(from));

        const until = convertToRequstFormat(event.target.filtersUntil.value);
        dispatch(setfilterUntil(until));

        console.log('from:', from);
        props.handleClose();
    };

    //console.log('from:', props.filterFrom);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="filtersFrom">
                    <Form.Label>From</Form.Label>
                    <Form.Control defaultValue={convertToInputFormat(filterFrom)} name="filtersFrom"
                        type="datetime-local" placeholder="Enter start date" />
                    {/*<Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="filtersUntil">
                    <Form.Label>Until</Form.Label>
                    <Form.Control defaultValue={convertToInputFormat(filterUntil)} name="filtersUntil"
                        type="datetime-local" placeholder="Enter last date" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </>
    );
}

export default Filters;