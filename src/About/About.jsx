import { useLocation,useParams,useNavigate } from "react-router-dom";
import { useEffect } from "react";

import AboutMe from "./AboutMe";
import AboutGamma from "./AboutGamma";

function About() {
/* const location=useLocation(); */
const params=useParams();
/* const nav=useNavigate();

console.log(location);
console.log(params);

useEffect(()=>{
    if(params.name==="999"){
        nav("/");
    }
},[params,nav]); */

    return (
        <>
        {params.name==="gamma"? <AboutGamma />:<AboutMe />}
        </>
    );
}
export default About;