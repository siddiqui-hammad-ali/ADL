// import "./App.scss";

import Footer from "./components/footer/footer";
import Screen1 from "./screenpages/screen1/Screen1";
import Screen2 from "./screenpages/screen2/Screen2";
import Screen3 from "./screenpages/screen3/Screen3";
import Screen4 from "./screenpages/screen4/Screen4";
import Screen5 from "./screenpages/screen5/Screen5";
import Screen6 from "./screenpages/screen6/Screen6";
import Screen7 from "./screenpages/screen7/Screen7";
import Screen8 from "./screenpages/screen8/Screen8";
function Screen() {
  return (
    <>
      <div className="App wrapper">
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Screen4 />
        <Screen5/>
        <Screen6 />
        <Screen7 />
        <Screen8/>
      </div>
    </>
  );
}
export default Screen;
