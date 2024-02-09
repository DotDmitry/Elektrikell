import { useState, useEffect } from 'react';

import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head";
import Footer from "./Footer";
import SideBar from "./SideBar";
import ErrorModal from "./ErrorModal";
import { getDefaultFrom, getDefaultUntil } from "./utils/dates"

import { useParams } from "react-router-dom";



function ElectricPrice() {
  const params = useParams();

  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeInterval, setActiveInterval] = useState(1);
  const [showFilters, setFiltersShow] = useState(false);

  const handleCloseSideBar = () => setFiltersShow(false);
  const handleShowSideBar = () => setFiltersShow(true);

  const [filterFrom, setfilterFrom] = useState(getDefaultFrom);
  const [filterUntil, setfilterUntil] = useState(getDefaultUntil);
  const [countdownDataContext, setCountdownDataContext] = useState(null);
  const [averagePrice, setAveragePrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.hours) {
      setActiveInterval(+params.hours);
    }

  }, [params]);


  return (
    <>
      <Container>
        <Head setErrorMessage={setErrorMessage} activePrice={activePrice} setActivePrice={setActivePrice} averagePrice={averagePrice} handleShowSideBar={handleShowSideBar} />
        <Body setIsLoading={setIsLoading} setErrorMessage={setErrorMessage} activeInterval={activeInterval} averagePrice={averagePrice} setAveragePrice={setAveragePrice} filterFrom={filterFrom} filterUntil={filterUntil} setCountdownDataContext={setCountdownDataContext} />
        <Footer activePrice={activePrice} activeInterval={activeInterval} setActiveInterval={setActiveInterval} countdownDataContext={countdownDataContext} />
      </Container>
      <SideBar show={showFilters} handleClose={handleCloseSideBar} filterFrom={filterFrom} setfilterFrom={setfilterFrom} filterUntil={filterUntil} setfilterUntil={setfilterUntil} />
      <ErrorModal show={!!errorMessage} errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
      {isLoading && <h1>Loading</h1>}
    </>
  );
}

export default ElectricPrice;
