import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Moreworks from "./pages/works/moreworks/Moreworks";
import Workinside from "./pages/works/moreworks/workinside/Workinside";
import Screen from "./Screen";
import ServicesInside from "./pages/services/ServicesInside/ServicesInside";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/screenspages" element={<Screen />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/*" element={<Moreworks />}></Route>
            <Route path="/moreservices/" element={<ServicesInside />}></Route>
            <Route path="/WorkInside/" element={<Workinside />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
