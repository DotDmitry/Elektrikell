import { useSelector } from "react-redux";

function LoadingIndicator() {

    const isLoading = useSelector((state) => state.body.isLoading);

    const temp = document.getElementById('busyindicator');
    if (isLoading) {
        temp.style.display = "block";
    } else {
        temp.style.display = "none";
    }

    return (
        <></>
    )
}

export default LoadingIndicator;