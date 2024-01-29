import { useState } from 'react';

import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head, { DEFAULT_ACTIVE_BUTTON } from "./Head";
import Footer from "./Footer";
import SideBar from "./SideBar";




function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeInterval, setActiveInterval] = useState(1);
  const [showFilters, setFiltersShow] = useState(false);

  const handleCloseSideBar = () => setFiltersShow(false);
  const handleShowSideBar = () => setFiltersShow(true);

  return (
    <>
      <Container>
        <Head activePrice={activePrice} setActivePrice={setActivePrice} handleShowSideBar={handleShowSideBar} />
        <Body activeInterval={activeInterval} />
        <Footer activePrice={activePrice} activeInterval={activeInterval} setActiveInterval={setActiveInterval} />
      </Container>
      <SideBar show={showFilters} handleClose={handleCloseSideBar} />
    </>
  );
}

export default App;
