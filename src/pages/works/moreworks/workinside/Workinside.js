import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../../../components/navbar/navbar";
import Carousel from "react-bootstrap/Carousel";
import "./Workinside.scss";
import { cards } from "../../../../components/pagination/paginationworks";
import logo from "../../../../images/SliderLogo.png";
import logoTop from "../../../../images/footer.png";

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
        <div className="logoDivTop-w" style={{ display: "none" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <img src={logoTop} alt="logo" width="50%" height="auto" />
          </a>
        </div>
        <div className="row mbl">
          <div className="col-lg-4 mt-4 position-relative">
            <div className="left-inside content-cntr">
              <Navbar />
              <div className="textd">
                <div className="mt-4 txtc">
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
                    AREA: {cards[idx].area} <br /> CATEGORY:{" "}
                    {cards[idx].category}
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
              </div>
              <div className="pointers">
                <div
                  className="d-flex justify-content-between fonts"
                  style={{ marginTop: "4em" }}
                >
                  <div>
                    <p className="point position-relative" onClick={previous}>
                      PREVIOUS PROJECT
                    </p>
                  </div>
                  <div>
                    <p onClick={next} className="point position-relative">
                      NEXT PROJECT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 overflow-hidden carousel">
            <div className="position-relative">
              <Carousel>
                {cards[idx].slider.map(({ img1, id }) => (
                  <Carousel.Item key={id}>
                    <img
                      className="d-block moreslider "
                      src={img1}
                      alt="First slide"
                      style={{
                        height: "100vh",
                        width: "100%",
                      }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div
                style={{
                  position: "absolute",
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
      </div>
    </>
  );
};

export default Workinside;
