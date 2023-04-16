import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../components/navbar/navbar";
import Carousel from "react-bootstrap/Carousel";
import "./Workinside.scss";
import { cards } from "../../../../components/pagination/paginationworks";
import logo from "../../../../images/footer.png"

const Workinside = () => {
  const { state } = useLocation();
  console.log(state);
  const [idx, setIdx] = useState(state.index);
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
            <div className="left-inside">
              <Navbar />
              <div className="mt-5">
                <p className="fontHeading  lines">{cards[idx].name}</p>
                <p className="fontHeadingmute text-muted line-design">
                  {cards[idx].design} <br /><br />
                  <span className="fontTextmute  text-muted lines">
                    {cards[idx].location}{" "}
                  </span>{" "}
                  <br />
                  <span className="fontTextmute text-muted lines ">
                    {cards[idx].year}
                  </span>
                </p>
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
                className=" d-flex justify-content-between  fonts nexpre"
              >
                <div>
                  <p
                    className="point position-absolute"
                    style={{ bottom: "5px", left: "45px" }}
                    onClick={previous}
                  >
                    PREVIOUS PROJECT
                  </p>
                </div>
                <div>
                  <p
                    onClick={next}
                    className="point position-absolute"
                    style={{ bottom: "5px", right: "10px" }}
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
                    className="d-block "
                    src={img1}
                    alt="slide"
                    style={{
                      height: "100vh",
                      marginRight: "-12px",
                      marginLeft: "auto",
                      width: "100vw",
                      lazy: "true",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      zIndex: "1",
                    }}
                  >
                    <img src={logo} alt="logo" width="auto" height="60" />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workinside;
