import React from "react";
import Navbar from "../../components/navbar/navbar";
import TAIFVILLA from "../../adlpicture/07-MAKI.webp";
import SOUQ from "../../adlpicture/01-TAIF VILLA.webp";
import JCC from "../../adlpicture/02-SOUQ.webp";
import NINA from "../../adlpicture/03-JCC.webp";
import LION from "../../adlpicture/04-NINA.webp";
import BAZAN from "../../adlpicture/05-LION SHARE.webp";
import MAKI from "../../adlpicture/06-BAZAN.webp";
import "./works.scss";
import { useNavigate } from "react-router-dom";
import Screen2 from "../../screenpages/screen2/Screen2";

const working = [
  {
    img: "../../adlpicture/01-TAIF VILLA.webp",
    img1: "../../adlpicture/02-SOUQ.webp",
  },
  {
    img1: "../../adlpicture/04-NINA.webp",
    img: "../../adlpicture/03-JCC.webp",
  },
];

function WorksA() {
  const navigate = useNavigate();
  return (
    <>
      <div id="Work" className="d-none d-md-block Works sections">
        <div className="container-fluid pe-0">
          <div
            className="row"
            style={{ paddingBottom: "3vh", paddingTop: "3vh" }}
          >
            <div className="col-md-4">
              <div className="mt-5">
                <Navbar active={"work"} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className={"col-md-5"}>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url('../../adlpicture/01-TAIF VILLA.webp')`,
                    }}
                  ></div>
                </div>
                <div className={"col-md-7"}>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url('../../adlpicture/02-SOUQ.webp')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="text-dark">
                <h1 className="fontHeadingWorks fontClass font-italic ">
                  PLACE <br /> MAKERS <br /> /
                </h1>
                <h1 className="fontHeadingWorks fontClass font-italic ">
                  NARRATIVE <br /> DESIGNERS
                </h1>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className={"col-md-7"}>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url('../../adlpicture/03-JCC.webp')`,
                    }}
                  ></div>
                </div>
                <div className={"col-md-5"}>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url('../../adlpicture/04-NINA.webp')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <Screen2 />
      </div>
    </>
  );
}

export default WorksA;
