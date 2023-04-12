import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import ServicesInside from "./ServicesInside/ServicesInside";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/moreservices" element={<ServicesInside />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
