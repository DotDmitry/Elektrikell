import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import {DATA} from './constants';
import {LineChart,CartesianGrid,YAxis,XAxis,Tooltip,Legend,Line,Bar,ResponsiveContainer} from 'recharts';

import {getPriceData} from"../services/ApiService";
import {chartDataConvertor} from "../utils";


function Body() {
const[priceData,setPriceData]=useState(null);
    useEffect(()=>{
        getPriceData().then(
            ({data})=>{setPriceData(chartDataConvertor(data.ee));}
            )
    },[]);

    return (
        <>
            <Row>
                <Col>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart  data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                        <Line type="stepAfter" dataKey="price" stroke="#8884d8" />
                        
                       {/*  <Line type="stepAfter" dataKey="uv" stroke="#82ca9d" /> */}
                    </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </>
    );
}

export default Body;