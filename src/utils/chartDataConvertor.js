import moment from "moment/moment"
import { mwToKw,mwToKwF } from "../utils";

export default function chartDataConvertor(priceData) {

    const uniqDates = new Set();
    const colors = [
        '#3498db', // Blue
        '#2ecc71', // Green
        '#e74c3c', // Red
        '#9b59b6', // Purple
        '#f39c12', // Orange
    ];
    let minIndex = 0;
    let min = 10000000;

    let maxIndex = 0;
    let max = 0;
    const resultArr = priceData.map((data, index) => {
        const thisDate = moment.unix(data.timestamp);
        const hour = thisDate.format("HH");
        const day = thisDate.format("DD/MM/yyyy");
        uniqDates.add(day);
        const color = colors[uniqDates.size % colors.length];
        if (min > data.price) {
            min = data.price;
            minIndex = index;
        }
        if (max < data.price) {
            max = data.price;
            maxIndex = index;
        }

        let result = {
            timestamp: data.timestamp,
            price: mwToKw(data.price),
            priceF:mwToKwF(data.price),
            hour: hour,
            day: day,
            color: color,
            max: false,
            min: false
        }
        return result;
    });

    resultArr[minIndex].min = true;
    resultArr[maxIndex].max = true;

    return resultArr;
}



