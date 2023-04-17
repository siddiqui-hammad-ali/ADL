import React from "react";
import "./about.scss";
import aboutImg from "../../images/aboutImg.png";
import adl from "../../images/adl.PNG";
import Navbar from "../../components/navbar/navbar";
import Screen3 from "../../screenpages/screen3/Screen3";

const About = () => {
  return (
    <>
      <div id="section2" className="d-none d-md-block about-header sections">
        <div className="container-fluid pe-0">
          <div className="row">
            <div className="col-md-4">
              <div className="mt-5">
                <Navbar active={"about"} />
              </div>
              <div style={{ marginTop: "6vh" }}>
                <img src={adl} width="100%" alt="" />
              </div>
              <div className="aboutText" style={{ marginTop: "2vh" }}>
                <p className=" fontText resp-fs">
                  We are a one stop design and build firm!
                </p>
                <p className=" fontText resp-fs">
                  Anastomosis can be defined as a biological process that
                  connects different parts of a system to form a network.
                  Inspired by this phenomenon, we establish connections between
                  various design and build disciplines to achieve holistic
                  solutions.
                </p>
                <p className=" fontText resp-fs">
                  We make unique design and high-quality execution affordable.
                  Our design and technical consultation include a complete set
                  of detailed shop drawings as communicative construction
                  manuals. To ensure the proposed design meets the budget of our
                  clients, we offer value-engineering initiatives in the form of
                  design revisions, material supply & equipment alternatives.
                  The seamless integration of our design and build teams enables
                  us to control, modify and supervise the execution phase from
                  start to handover with sharp efficiency.
                </p>
              </div>
            </div>
            <div className="col-md-6 offset-md-2 overflow-hidden">
              <img
                src={aboutImg}
                alt="about"
                style={{
                  height: "100vh",
                  marginRight: "-12px",
                  marginLeft: "auto",
                }}
                className="d-block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <Screen3 />
      </div>
    </>
  );
};

export default About;
