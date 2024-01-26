
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';

import { PRICE_BUTTONS, BADGES } from "./constans"

function Info({ activePrice, setActivePrice }) {

    return (
        <>
            <Col>
                <div>
                    <div>The current price of electricity is</div>
                    <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
                    {/*  <Badge bg="danger">HIGH</Badge> */}
                    <div>HIGH</div>
                </div>
            </Col>
            <Col>
                <ButtonGroup>
                    {
                        PRICE_BUTTONS.map(({ name, id }) => (
                            <Button key={id} active={activePrice === id} variant="secondary" onClick={() => setActivePrice(id)}>{name}</Button>
                        ))
                    }

                </ButtonGroup>
            </Col>
            <Col className="text-end">
                <h2>11.23</h2>
                <div>cents / kilowatt-hour</div>
            </Col>
        </>
    );
}

export default Info;
