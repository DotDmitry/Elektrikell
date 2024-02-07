import moment from 'moment';

export const getDefaultFrom = () => moment().subtract(10, 'hours').format();

export const getDefaultUntil = () => moment().add(1, 'day').format();

export const convertToInputFormat = (datetime) => moment(datetime).format("YYYY-MM-DDTHH:mm");

export const convertToRequstFormat = (datetime) => moment(datetime).format();

export const currentTimeStamp = () => moment().minutes(0).seconds(0).unix();

export const currentTimeMinutes = () => moment().minutes();

export const currentTimeML = () => +moment();
