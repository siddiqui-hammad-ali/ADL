import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Moreworks from "./pages/moreworks/Moreworks";
import Workinside from "./moreworks/workinside/Workinside";

function App() {
  return (
    <>
      <div className="App" style={{ overflowX: "hidden" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Home />}></Route>
            <Route path="/morework" element={<Moreworks />}></Route>
            <Route path="/WorkInside" element={<Workinside />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
