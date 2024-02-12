import { useState, useEffect } from 'react';

import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head from "./Head";
import Footer from "./Footer";
import SideBar from "./SideBar";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveInterval } from "./services/stateService";



function ElectricPrice(props) {
  const params = useParams();

  const [showFilters, setFiltersShow] = useState(false);

  const handleCloseSideBar = () => setFiltersShow(false);
  const handleShowSideBar = () => setFiltersShow(true);

  const [countdownDataContext, setCountdownDataContext] = useState(null);
  const [averagePrice, setAveragePrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.hours) {
      dispatch(setActiveInterval(+params.hours));
    }

  }, [params]);


  return (
    <>
      <Container>
        <Head
          setErrorMessage={setErrorMessage}
          averagePrice={averagePrice}
        />
        <Body
          handleShowSideBar={handleShowSideBar}
          setIsLoading={props.setIsLoading}
          setErrorMessage={setErrorMessage}
          averagePrice={averagePrice}
          setAveragePrice={setAveragePrice}
          setCountdownDataContext={setCountdownDataContext} />
        <Footer
          countdownDataContext={countdownDataContext} />
      </Container>
      <SideBar
        show={showFilters}
        handleClose={handleCloseSideBar} />
      <ErrorModal
        show={!!errorMessage}
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)} />
    </>
  );
}

export default ElectricPrice;
