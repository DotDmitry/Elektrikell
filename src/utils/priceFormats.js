import lodash from "lodash";


export const mwToKw=(price)=>lodash.round(parseFloat(price)/10,2);