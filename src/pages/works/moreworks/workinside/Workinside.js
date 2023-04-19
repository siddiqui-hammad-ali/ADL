import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../components/navbar/navbar";
import Carousel from "react-bootstrap/Carousel";
import "./Workinside.scss";
import { cards } from "../../../../components/pagination/paginationworks";
import logo from "../../../../images/footer.png";

const Workinside = () => {
  const { state } = useLocation();
  console.log(state);
  const [idx, setIdx] = useState(state ? state.index : 0);
  console.log(cards);
  const previous = () => {
    if (idx === 0) return;
    setIdx(idx - 1);
  };
  const next = () => {
    if (idx === cards.length - 1) return;
    setIdx(idx + 1);
  };
  return (
    <>
      <div id="section1" className="">
        <div className="row">
          <div className="col-lg-4 mt-4 position-relative ">
            <div
              className="logoDivTop"
              style={{
                display: "none",
              }}
            >
              <img src={logo} alt="logo" width="auto" height="50" />
            </div>
            <div className="left-inside">
              <Navbar />
              <div className="mt-5">
                <div>
                  <div>
                    <p className="d-block fontHeading  lines">
                      {cards[idx].name}
                    </p>
                  </div>
                  <div>
                    <p className="fontHeadingmute text-muted line-design">
                      {cards[idx].design}
                    </p>
                  </div>
                  <div className="fontTextmute  text-muted lines">
                    <p>{cards[idx].location}</p>
                  </div>{" "}
                  <div className="fontTextmute text-muted lines ">
                    <p>{cards[idx].year}</p>
                  </div>
                </div>
              </div>
              <div className="fontHeadingmute text-muted mt-1">
                <p>
                  STATUS: {cards[idx].status} <br />
                  AREA: {cards[idx].area} <br /> CATEGORY: {cards[idx].category}
                  <br />
                  PRINCIPAL ARCHITECT: {cards[idx].principle}
                  <br />
                  PROJECT ARCHITECT: {cards[idx].projectarchitech}
                  <br />
                  CIVIL ENGINEER: {cards[idx].civil} <br />
                  CONSTRUCTION MANAGER: {cards[idx].construction}
                </p>
              </div>
              <div className="mt-1">
                <p className="fontText resp-fs">{cards[idx].disc}</p>
              </div>
              <div
                className=" d-flex-inline justify-content-between  fonts nexpre"
                style={{ marginTop: "54px", marginBottom: "5px" }}
              >
                <div>
                  <p
                    className="point position-absolute"
                    style={{ bottom: "1px", left: "1.5em" }}
                    onClick={previous}
                  >
                    PREVIOUS PROJECT
                  </p>
                </div>
                <div>
                  <p
                    onClick={next}
                    className="point position-absolute"
                    style={{ bottom: "1px", right: "1.5em" }}
                  >
                    NEXT PROJECT
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8  overflow-hidden">
            <Carousel>
              {cards[idx].slider.map(({ img1 }) => (
                <Carousel.Item>
                  <img
                    className="d-block moreslider "
                    // src={sliders.slider}
                    src={img1}
                    alt="First slide"
                    style={{
                      height: "100vh",
                      width: "100vw",
                    }}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <div
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: "1",
              }}
            >
              <img
                className="logoSlide"
                src={logo}
                alt="logo"
                width="auto"
                height="60"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workinside;
