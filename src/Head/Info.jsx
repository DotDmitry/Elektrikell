import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { PRICE_BUTTONS } from "./constans"

function Info({activePrice, setActivePrice}) {

    return (
        <>
            <Col>1 of 3</Col>
            <Col>
                <ButtonGroup>
                    {
                        PRICE_BUTTONS.map(({ name, id }) => (
                            <Button key={id} active={activePrice === id} variant="secondary" onClick={() => setActivePrice(id)}>{name}</Button>
                        ))
                    }

                </ButtonGroup>
            </Col>
            <Col>3 of 3</Col>
        </>
    );
}

export default Info;
