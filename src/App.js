import { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head,{ DEFAULT_ACTIVE_BUTTON } from "./Head";
import Footer from "./Footer";


function App() {
  const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
  const [activeInterval, setActiveInterval] = useState(1);

  return (
    <Container>
      <Head activePrice={activePrice} setActivePrice={setActivePrice}/>
      <Body activeInterval={activeInterval}/>
      <Footer activePrice={activePrice} activeInterval={activeInterval} setActiveInterval={setActiveInterval} />
    </Container>
  ); 
}

export default App;
