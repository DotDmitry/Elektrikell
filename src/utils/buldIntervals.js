import moment from 'moment';

export const removePast = (data) => data?.filter(({ timestamp }) => moment.unix(timestamp).isAfter(moment()));

export const getLowPriceInterval = (data, interval) => {


    const newData = removePast(data);
    if (!newData || newData.length === 0) {
        return [];
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

    let indexF = data.indexOf(result[0]);
    result.forEach((item, i) => {
        item.index = i + indexF;
    });

    return result;
}