
import TargetLow from "./TargetLow";
import TargetHigh from "./TargetHigh";
import { PRICE_BUTTONS } from "../Head";


function Footer(props) {
    return (
        <>
            {props.activePrice === PRICE_BUTTONS[0].id ? <TargetLow activeInterval={props.activeInterval} setActiveInterval={props.setActiveInterval} /> : <TargetHigh/>}
        </>
    );
}

export default Footer;