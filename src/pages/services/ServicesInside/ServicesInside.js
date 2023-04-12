import React, { useState } from "react";
import Navbar from "../../../components/navbar/navbar";
import "./ServicesInside.scss";
import ba3 from "../../../images/ba3.jpg";
import Carousel from "react-bootstrap/Carousel";
import Icon1 from "../../../servicesICON/ICONS-01";
import { useLocation } from "react-router-dom";
import { moreservices } from "../../../components/pagination/moreservices";

// const slider = [
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-1.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-2.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-3.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-4.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-5.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-6.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-7.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-8.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-9.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-10.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-11.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-12.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-13.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-14.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-15.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-16.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-17.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-18.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-19.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-20.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-21.jpg" },
//   { img1: "ServicePICTURES/B-EXODE/EXODE FINAL/EXODE-22.jpg" },
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
                <h3>{moreservices[idx].name1}</h3>
                <div
                  className=" aboutText col-lg-11"
                  style={{ marginTop: " 2vh" }}
                >
                  <p className="fontText resp-fs">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci
                  </p>
                  <div className="d-flex justify-content-between mt-5">
                    <div onClick={previous}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="26"
                        fill="blue"
                        className="bi bi-chevron-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                    </div>
                    <div onClick={next}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="26"
                        fill="blue"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
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
