import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Filters() {

    const currentDate = new Date();

    const twoDaysLater = new Date(currentDate);
    twoDaysLater.setDate(currentDate.getDate() + 2);

    const [formData, setFormData] = useState({
        filtersFrom: currentDate.toISOString().split('T')[0],
        filtersUntil: twoDaysLater.toISOString().split('T')[0],
    });

    // Handle form input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform any actions with the form data, such as sending it to a server
        console.log('Form data submitted:', formData);
        const from=event.target.filtersFrom.value;
        const until=event.target.filtersUntil.value;

        console.log('from:', from);
    };



    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="filtersFrom">
                    <Form.Label>From</Form.Label>
                    <Form.Control value={formData.filtersFrom} name="filtersFrom"
                        onChange={handleInputChange} type="date" placeholder="Enter start date" />
                    {/*<Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="filtersUntil">
                    <Form.Label>Until</Form.Label>
                    <Form.Control value={formData.filtersUntil} name="filtersUntil"
                        onChange={handleInputChange} type="date" placeholder="Enter last date" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </>
    );
}

export default Filters;