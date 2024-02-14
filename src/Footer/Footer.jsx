
import TargetLow from "./TargetLow";
import TargetHigh from "./TargetHigh";
import { DEFAULT_ACTIVE_BUTTON } from "../Head";
import { useSelector } from "react-redux";


function Footer() {

    const activePrice = useSelector((state) => state.main.activePrice);
    return (
        <>
            {activePrice === DEFAULT_ACTIVE_BUTTON ? <TargetLow /> : <TargetHigh />}
        </>
    );
}

export default Footer;