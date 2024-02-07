import lodash from "lodash";

export const mwToKwF = (price) => lodash.round(1.22 * (parseFloat(price) / 10), 2);

export const mwToKw = (price) => (mwToKwF(price)).toFixed(2);