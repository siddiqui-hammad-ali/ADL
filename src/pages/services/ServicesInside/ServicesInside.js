import React, { useState } from "react";
import Navbar from "../../../components/navbar/navbar";
import "./ServicesInside.scss";
import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";
import { moreservices } from "../../../components/pagination/moreservices";
import logo from "../../../images/SliderLogo.png";
import logoTop from "../../../images/footer.png";

const ServicesInside = () => {
  const { state } = useLocation();
  console.log(state);
  const [idx, setIdx] = useState(state ? state.index : 0);
  console.log(moreservices);
  const previous = () => {
    if (idx === 0) return;
    setIdx(idx - 1);
  };
  const next = () => {
    if (idx === moreservices.length - 1) return;
    setIdx(idx + 1);
  };
  return (
    <>
      <div id="section3" className="" style={{ overflowX: "hidden" }}>
        <div className="row">
          <div className="col-lg-4 mt-4 position-relative">
            <div className="left-inside">
              <Navbar />
              <div className="logoDivTop" style={{ display: "none" }}>
                <a href="/" style={{ textDecoration: "none" }}>
                  <img src={logoTop} alt="logo" width="auto" height="50" />
                </a>
              </div>
              <div className="fontHeadingmute text-muted mt-3">
                <div className="icn">
                  <div className="d-flex">{moreservices[idx].gif}</div>
                </div>
                <div className="serviceheadings">
                  <h3>{moreservices[idx].name1}</h3>
                  <h6>{moreservices[idx].name3}</h6>
                </div>
                <div
                  className=" aboutText col-lg-11"
                  style={{ marginTop: " 2vh" }}
                >
                  <p className="fontText resp-fs">{moreservices[idx].text}</p>
                  <div className="arw">
                    {/* <div className="d-flex justify-content-between align-items-end arrows"> */}
                    <div onClick={previous}>
                      <svg
                        id="arw"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgb(31,59,91)"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </div>
                    <div className="space p-5"></div>
                    <div onClick={next}>
                      <svg
                        id="arw"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="rgb(31,59,91)"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="mt-5"></div> */}
            </div>
          </div>
          <div className="col-lg-8  overflow-hidden-x">
            <div className="position-relative">
              <Carousel>
                {moreservices[idx].slider.map(({ img1, id }) => (
                  <Carousel.Item key={id}>
                    <img
                      className="d-block moreslider"
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

export default ServicesInside;
