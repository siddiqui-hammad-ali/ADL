import React from "react";
import "./screen2.scss";

const working = [
  "../../adlpicture/01-TAIF VILLA.webp",
  "../../adlpicture/02-SOUQ.webp",
  "../../adlpicture/04-NINA.webp",
  "../../adlpicture/03-JCC.webp",
  "../../adlpicture/05-LION SHARE.webp",
  "../../adlpicture/06-BAZAN.webp",
  "../../adlpicture/01-TAIF VILLA.webp",
  "../../adlpicture/07-MAKI.webp",
];

function Screen2() {
  return (
    <div id="Work" className=" mt-lg-3 Works">
      <div className="container-fluid font-fam">
        <div className="row">
          <div className="col-md-4 position-relative ">
            <div className="row ">
              <div className="col-12 col-sm-12 col-md-10 text-dark L-Height pt-5">
                <h6
                  className=""
                  style={{
                    color: "#133c5e",
                    fontSize: "4.62vw",
                    fontFamily: "bold",
                    fontWeight: 500,
                  }}
                >
                  PLACE MAKERS /
                </h6>
                <h1
                  className=""
                  style={{
                    color: "#133c5e",
                    fontSize: "4.62vw",
                    fontFamily: "bold",
                    fontWeight: 500,
                  }}
                >
                  NARRATIVE DESIGNERS
                </h1>
              </div>
              <div className="col-12 col-md-10 col-sm-2">
                <p className="fontTextmobile">
                  Not just Architects! <br />
                  We strive to help our clients achieve the best value for their
                  projects through our bespoke design and build services. Being
                  a multidisciplinary firm, we specialize in creating visual and
                  spatial narratives through imaginative speculations. The
                  essence of our studio stems from a deep understanding of our
                  contextual complexities and translating them into provocative
                  design proposals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row" style={{ marginTop: "20%" }}>
              {working.map((workimages, idx) => (
                <div className="px-2">
                  <div
                    className="bg-img my-2"
                    style={{ backgroundImage: `url('${workimages}')` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen2;
