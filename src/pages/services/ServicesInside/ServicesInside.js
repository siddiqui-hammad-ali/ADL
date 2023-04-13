import React, { useState } from "react";
import Navbar from "../../../components/navbar/navbar";
import "./ServicesInside.scss";
import ba3 from "../../../images/ba3.webp";
import Carousel from "react-bootstrap/Carousel";
import Icon1 from "../../../servicesICON/ICONS-01";
import { useLocation } from "react-router-dom";
import { moreservices } from "../../../components/pagination/moreservices";
import logo from "../../../images/footer.png"

// const slider = [
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-1.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-2.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-3.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-4.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-5.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-6.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-7.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-8.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-9.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-10.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-11.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-12.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-13.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-14.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-15.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-16.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-17.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-18.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-19.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-20.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-21.webp" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-22.webp" },
// ];
const ServicesInside = () => {
  const { state } = useLocation();
  console.log(state);
  const [idx, setIdx] = useState(state.index);
  console.log(moreservices);
  const previous = () => {
    if (idx == 0) return;
    setIdx(idx - 1);
  };
  const next = () => {
    if (idx == moreservices.length - 1) return;
    setIdx(idx + 1);
  };
  return (
    <>
      <div
        id="section3"
        className=""
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="row">
          <div className="col-lg-4 col-md-12  mt-5">
            <div className="left-inside">
              <Navbar />

              <div className="fontHeadingmute text-muted mt-3">
                <div className="d-flex justify-content-center">
                  {/* <Icon1 width={"200px"} /> */}
                  {moreservices[idx].gif}
                </div>
                <div className="serviceheadings">
                <h3>{moreservices[idx].name1}</h3>
                <h6>{moreservices[idx].name3}</h6>
                </div>
                <div
                  className=" aboutText col-lg-11"
                  style={{ marginTop: " 2vh" }}
                >
                  {/* <p className="fontText resp-fs">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci
                  </p> */}
                  <div className="d-flex justify-content-between mt-5">
                    <div onClick={previous}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="100" 
                        height="70" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="rgb(31,59,91)" 
                        stroke-width="1" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path d="M15 18l-6-6 6-6"/>
                      </svg>
                    </div>
                    <div onClick={next}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="100" 
                        height="70" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="rgb(31,59,91)" 
                        stroke-width="1" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path d="M9 18l6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5"></div>
            </div>
          </div>
          {/* <div className="col-lg-8  overflow-hidden">
            <img
              className="d-block"
              src={slider[idx].img1}
              style={{
                height: "100vh",
                marginRight: "-12px",
                marginLeft: "auto",
                width: "100vw",
              }}
            />
          </div> */}
          <div className="col-lg-8  overflow-hidden">
            <Carousel>
              {moreservices[idx].slider.map(({ img1 }) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    // src={sliders.slider}
                    src={img1}
                    alt="First slide"
                    style={{
                      height: "100vh",
                      marginRight: "-12px",
                      marginLeft: "auto",
                      width: "100vw",
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
          {/* <div className="col-lg-8  overflow-hidden">
            <Carousel fade>
              {moreservices.map((moreservice) => (
                <Carousel.Item>
                  <div
                    className="bg-img"
                    style={{
                      // backgroundImage: `url('${moreservice.images}')`,
                      height: "100vh",
                    }}
                  ></div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ServicesInside;
