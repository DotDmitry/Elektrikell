import moment from "moment/moment"
import {mwToKw} from "../utils";

export default function chartDataConvertor(priceData) {

    const uniqDates = new Set();
    const colors = [
        '#3498db', // Blue
        '#2ecc71', // Green
        '#e74c3c', // Red
        '#9b59b6', // Purple
        '#f39c12', // Orange
    ];

    return priceData.map((data) => {

        const currentDate = moment.unix(data.timestamp);
        const hour = currentDate.format("HH");
        const day = currentDate.format("DD/MM/yyyy");
        uniqDates.add(day);
        const color = colors[uniqDates.size % colors.length];

        let result = {
            price:mwToKw(data.price),
            hour: hour,
            day: day,
            color: color
        }
        return result;
    });
}



