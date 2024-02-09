import { useLocation,useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";

function About() {
const location=useLocation();
const params=useParams();
const nav=useNavigate();

console.log(location);
console.log(params);

useEffect(()=>{
    if(params.id==="999"){
        nav("/");
    }
},[params,nav]);

    return (
        <>About</>
    );
}
export default About;