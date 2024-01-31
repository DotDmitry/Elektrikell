import lodash from "lodash";


export const mwToKw=(price)=>lodash.round(1.22*(parseFloat(price)/10),2);