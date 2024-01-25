
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { PRICE_BUTTONS } from "./constans"

function Info({ activePrice, setActivePrice }) {

    return (
        <>
            <Col>
                <div>
                    <div>The price of electricity at the moment is
                    </div>
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
            <Col><div className="priceElement"><b>11.23</b><div>cents / kilowatt-hour</div></div></Col>
        </>
    );
}

export default Info;
