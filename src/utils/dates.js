import moment from 'moment';

export const getDefaultFrom = () => moment().subtract(10, 'hours').format();

export const getDefaultUntil = () => moment().add(1, 'day').format();

export const convertToInputFormat = (datetime) => moment(datetime).format("YYYY-MM-DDTHH:mm");

export const convertToRequstFormat = (datetime) => moment(datetime).format();
