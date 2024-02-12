import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import ElectricPrice from "./ElectricPrice";
import About from "./About"
import Navigation from "./Navigation"
import LoadingIndicator from "./LoadingIndicator"

function App() {

    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<ElectricPrice setIsLoading={setIsLoading} />} >
                    <Route path="lowPrice/:hours" element={<ElectricPrice setIsLoading={setIsLoading} />} />
                </Route>
                <Route path="/about" element={<About />}  >
                    <Route path=":name" element={<About />} />
                </Route>
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
            <LoadingIndicator isLoading={isLoading}/>
        </>
    );
}
export default App;