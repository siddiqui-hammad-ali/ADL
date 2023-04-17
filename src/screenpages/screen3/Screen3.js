import React from "react";
import "./screen3.scss";
import mobileImg from "../../images/mobileimg.png";

const Screen3 = () => {
  return (
    <div
      id="about"
      className="about-header mb-0 mb-md-3 mb-lg-5 Abouts position-relative"
      style={{ height: "100vh" }}
    >
      <div className="container-fluid">
        <div className="row pt-4">
          <div className="col-8">
            <div
              style={{
                color: "#133c5e",
                fontSize: "4.62vw",
                fontFamily: "bold",
                fontWeight: 500,
              }}
            >
              RESEARCH DRIVEN DESIGN
            </div>
            <p className="fontTextmobile mt-2">
              We are a one stop design and build firm! Anastomosis can be
              defined as a biological process that connects different parts of a
              system to form a network. Inspired by this phenomenon, we
              establish connections between various design and build disciplines
              to achieve holistic solutions.
              {/* We make unique design and
              high-quality execution affordable. Our design and technical
              consultation include a complete set of detailed shop drawings as
              communicative construction manuals. To ensure the proposed design
              meets the budget of our clients, we offer value-engineering
              initiatives in the form of design revisions, material supply &
              equipment alternatives. The seamless integration of our design and
              build teams enables us to control, modify and supervise the
              execution phase from start to handover with sharp efficiency. */}
            </p>
          </div>
        </div>
      </div>
      <div
        className="aboutImg position-absolute"
        style={{ top: 0, right: 0, height: "100vh" }}
      >
        <img src={mobileImg} alt="about" />
      </div>
    </div>
  );
};

export default Screen3;
