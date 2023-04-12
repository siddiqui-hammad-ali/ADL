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
import Screen3 from "../../screenpages/screen3/Screen3";

// const working = [
//   {
//     img: '../../adlpicture/05-LION SHARE.webp',
//     img1: '../../adlpicture/06-BAZAN.webp',
//   },
//   {
//     img1: '../../adlpicture/01-TAIF VILLA.webp',
//     img: '../../adlpicture/07-MAKI.webp',
//   },
// ]

function WorksB() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="WorkB" className="d-none d-md-block Works sections">
        <div className="container-fluid pe-0">
          <div
            className="row flex-row-reverse"
            style={{ paddingTop: "3vh", paddingBottom: "3vh" }}
          >
            <div className="col-md-8">
              <div className="row">
                <div className={"col-md-5"}>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url('../../adlpicture/05-LION SHARE.webp')`,
                    }}
                  ></div>
                </div>
                <div className={"col-md-7"}>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url('../../adlpicture/06-BAZAN.webp')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="fontText details">
                Not just Architects! <br />
                We strive to help our clients achieve the best value for their
                projects through our bespoke design and build services. Being a
                multidisciplinary firm, we specialize in creating visual and
                spatial narratives through imaginative speculations. The essence
                of our studio stems from a deep understanding of our contextual
                complexities and translating them into provocative design
                proposals.
              </div>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className={"col-md-7"}>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url('../../adlpicture/01-TAIF VILLA.webp')`,
                    }}
                  ></div>
                </div>
                <div className={"col-md-5"}>
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: `url('../../adlpicture/07-MAKI.webp')`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ cursor: "pointer" }}>
              <h1
                onClick={() => navigate("./moreworks")}
                className=" fontHeading  "
                style={{ marginTop: "-30px" }}
              >
                MORE WORKS &nbsp;
                <span>
                  <svg
                    fill="#133c5e"
                    stroke="green"
                    width={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="fonticon"
                  >
                    <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
                  </svg>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksB;
