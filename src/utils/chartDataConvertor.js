import moment from "moment/moment"

export default function chartDataConvertor (priceData){
return priceData.map((data)=>({...data,hour:moment.unix(data.timestamp).format("hh")}));
} 



