import { useState } from 'react';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import moment from "moment/moment"
import { getPriceCurrent } from "../services/ApiService";
import { mwToKw } from "../utils";

import { PRICE_BUTTONS, BADGES } from "./constans"

function Info({ activePrice, setActivePrice, averagePrice }) {

    const [priceCurrent, setPriceCurrent] = useState({ price: 0, timestamp: 0 });
    const [isLow, setIsLow] = useState(false);

    useEffect(() => {
        getPriceCurrent()
            .then(
                ({ data }) => {
                    setPriceCurrent(data[0]);
                }

            )
    }, []);

    useEffect(() => {
        setIsLow(parseFloat(mwToKw(priceCurrent.price)) < averagePrice);
    }, [priceCurrent, averagePrice]);

    return (
        <>
            <Col>
                <div>
                    <div>The current price of electricity is</div>
                    {isLow ? <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge> : <Badge bg={BADGES[1].name}>{BADGES[1].id}</Badge>}

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
                <h2>{mwToKw(priceCurrent.price)}</h2>
                <div className='fs-5'>cents / kilowatt-hour</div>
                <div className='fs-6'>updated at {moment.unix(priceCurrent.timestamp).format("DD/MM/yyyy HH:mm")}</div>
            </Col>
        </>
    );
}

export default Info;
