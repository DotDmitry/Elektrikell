
import TargetLow from "./TargetLow";
import TargetHigh from "./TargetHigh";
import { DEFAULT_ACTIVE_BUTTON } from "../Head";


function Footer(props) {
    return (
        <>
            {props.activePrice === DEFAULT_ACTIVE_BUTTON ? <TargetLow activeInterval={props.activeInterval} setActiveInterval={props.setActiveInterval} /> : <TargetHigh/>}
        </>
    );
}

export default Footer;