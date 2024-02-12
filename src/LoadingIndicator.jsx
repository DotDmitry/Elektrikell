/* import parse from 'html-react-parser'; */

function LoadingIndicator({isLoading}){

    const temp = document.getElementById('busyindicator');
    if(isLoading){
        temp.style.display="block";
    }else{
        temp.style.display="none";
    }

    return(
        <></>
    )
}

export default LoadingIndicator;