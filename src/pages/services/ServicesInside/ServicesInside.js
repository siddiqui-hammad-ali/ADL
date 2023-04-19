import React, { useState } from "react";
import Navbar from "../../../components/navbar/navbar";
import "./ServicesInside.scss";
import Carousel from "react-bootstrap/Carousel";
import { useLocation } from "react-router-dom";
import { moreservices } from "../../../components/pagination/moreservices";
import logo from "../../../images/footer.png";

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
      <div id="section3" className="">
        <div className="row">
          <div className="col-lg-4 mt-4 position-relative">
            <div className="left-inside">
              <Navbar />
              <div
                className="logoDivTop"
                style={{
                  display: "none",
                }}
              >
                <img src={logo} alt="logo" width="auto" height="40" />
              </div>
              <div className="fontHeadingmute text-muted mt-3">
                <div className="d-flex">{moreservices[idx].gif}</div>
                <div className="serviceheadings">
                  <h3>{moreservices[idx].name1}</h3>
                  <h6>{moreservices[idx].name3}</h6>
                </div>
                <div
                  className=" aboutText col-lg-11"
                  style={{ marginTop: " 2vh" }}
                >
                  <p className="fontText resp-fs">{moreservices[idx].text}</p>
                  <div className="d-flex justify-content-between mt-5 pt-4">
                    <div onClick={previous}>
                      <svg
                        className="arrow"
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
                    <div onClick={next}>
                      <svg
                        className="arrow"
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
                  </div>
                </div>
              </div>
              <div className="mt-5"></div>
            </div>
          </div>
          <div className="col-lg-8  overflow-hidden">
            <Carousel>
              {moreservices[idx].slider.map(({ img1 }) => (
                <Carousel.Item>
                  <img
                    className="d-block"
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
    </>
  );
};

export default ServicesInside;
