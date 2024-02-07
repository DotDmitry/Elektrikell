import { useState } from 'react';

import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head";
import Footer from "./Footer";
import SideBar from "./SideBar";
import ErrorModal from "./ErrorModal";
import {getDefaultFrom,getDefaultUntil} from "./utils/dates"




function App() {
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
  

  return (
    <>
      <Container>
        <Head setErrorMessage={setErrorMessage} activePrice={activePrice} setActivePrice={setActivePrice} averagePrice={averagePrice} handleShowSideBar={handleShowSideBar} />
        <Body setErrorMessage={setErrorMessage} activeInterval={activeInterval} averagePrice={averagePrice} setAveragePrice={setAveragePrice} filterFrom={filterFrom} filterUntil={filterUntil} setCountdownDataContext={setCountdownDataContext}/>
        <Footer activePrice={activePrice} activeInterval={activeInterval} setActiveInterval={setActiveInterval} countdownDataContext={countdownDataContext} />
      </Container>
      <SideBar show={showFilters} handleClose={handleCloseSideBar} filterFrom={filterFrom} setfilterFrom={setfilterFrom} filterUntil={filterUntil} setfilterUntil={setfilterUntil}/>
      <ErrorModal show={!!errorMessage} errorMessage={errorMessage} handleClose={()=>setErrorMessage(null)}/>
    </>
  );
}

export default App;
