
import { Route, Routes } from "react-router-dom";
import ElectricPrice from "./ElectricPrice";
import About from "./About"
import Navigation from "./Navigation"
import LoadingIndicator from "./LoadingIndicator"

function App() {



    return (
        <>
            <Navigation />


            <Routes>
                <Route exact path="/" element={<ElectricPrice />} >

                    
                    <Route exact path="lowPrice/:hours" element={<ElectricPrice />} />
                </Route>
                <Route exact path="/about" element={<About />}  >
                    <Route exact path=":name" element={<About />} />
                </Route>
                <Route exact path="*" element={<h1>404</h1>} />
            </Routes>
            <LoadingIndicator />
        </>
    );
}
export default App;