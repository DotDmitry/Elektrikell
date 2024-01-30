import { useState } from 'react';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import moment from "moment/moment"
import { getPriceCurrent } from "../services/ApiService";

import { PRICE_BUTTONS, BADGES } from "./constans"

function Info({ activePrice, setActivePrice }) {

    const [priceCurrent, setPriceCurrent] = useState({price:"",timestamp:""});
    useEffect(() => {
        getPriceCurrent()
            .then(
                ({ data }) => {
                    setPriceCurrent(data[0]);
                }

            )
    }, []);

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
                <h2>{(priceCurrent.price/10).toFixed(2)}</h2>
                <div className='fs-5'>cents / kilowatt-hour</div>
                <div className='fs-6'>updated at {moment.unix(priceCurrent.timestamp).format("DD/MM/yyyy HH:mm")}</div>
            </Col>
        </>
    );
}

export default Info;
