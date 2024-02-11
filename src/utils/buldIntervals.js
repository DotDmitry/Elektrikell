import moment from 'moment';
import { currentTimeStamp } from "./dates";

export const removePast = (data) => data?.filter(({ timestamp }) => currentTimeStamp() <= parseInt(timestamp));

export const getLowPriceInterval = (data, interval) => {

    if (!data || data.length === 0) {
        return null;
    }
    const newData = removePast(data);
    if (!newData || newData.length === 0) {
        return null;
    }
   
    let min = Number.POSITIVE_INFINITY;
    let result = [];
    newData.forEach((_, i) => {

        const dataInterval = newData.slice(i, interval + i);
        if (dataInterval.length < interval) {
            return;
        }

        const sumInerval = dataInterval.reduce((acc, { price }) => {
            return acc + parseFloat(price);
        }, 0);
        if (min > sumInerval) {
            min = sumInerval;
            result = dataInterval;
        }
    });

    const indexX1 = data.indexOf(result[0]);

    let indexX2 = data.indexOf(result[result.length - 1]) + 1;

    indexX2 = indexX2 < data.length ? indexX2 : data.length - 1;

    const x1 = data[indexX1].timestamp;
    const x2 = indexX1 < indexX2 ? data[indexX2].timestamp : x1;
    const bestTime = `from ${data[indexX1].hour}:00 to ${data[indexX2].hour}:00`;
    const averagePrice = (min / interval).toFixed(2);
    const currPrice = parseFloat(newData[0].price);
    const isCheap = currPrice > averagePrice;
    const isNow = currentTimeStamp() >= x1 && currentTimeStamp() < x2;
    const deltaPercent = Math.abs(((currPrice - averagePrice) / (currPrice / 100)).toFixed(0));

    const countDownMS = +moment.unix(x1);

    /* console.log("currPrice: " + currPrice);
    console.log("averagePrice: " + averagePrice);
    console.log("deltaPercent: " + deltaPercent);
    console.log("isCheap: " + isCheap);
 */

    return {
        x1: x1,
        x2: x2,
        averagePrice: averagePrice,
        bestTime: bestTime,
        currPrice: currPrice,
        isCheap: isCheap,
        isNow: isNow,
        deltaPercent: deltaPercent,
        countDownMS: countDownMS
    };
}