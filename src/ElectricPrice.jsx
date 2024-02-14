import { useEffect } from 'react';

import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head from "./Head";
import Footer from "./Footer";
import SideBar from "./SideBar";
import ErrorModal from "./ErrorModal";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveInterval } from "./services/stateService";
import ElectricPriceProvider from "./Contexts/ElectricPriceContext";

function ElectricPrice() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.hours) {
      dispatch(setActiveInterval(+params.hours));
    }

  }, [params]);

  return (
    <>
      <ElectricPriceProvider>
        <Container>
          <Head />
          <Body />
          <Footer />
        </Container>
        <SideBar />
        <ErrorModal />
      </ElectricPriceProvider>
    </>
  );
}

export default ElectricPrice;
