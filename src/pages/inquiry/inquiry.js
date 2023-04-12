import React from "react";
import Navbar from "../../components/navbar/navbar";
import Screen6 from "../../screenpages/screen6/Screen6";
import Screen7 from "../../screenpages/screen7/Screen7";
import Screen8 from "../../screenpages/screen8/Screen8";
import "./inquiry.scss";

function Inquiry() {
  return (
    <>
      <div id="section5" className="d-none d-md-block mb-3 sections">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="mt-5">
                <Navbar active={"inquiry"} />
              </div>
              <h1
                className="fontHeading"
                style={{
                  maxWidth: "295px",
                  marginTop: "12vh",
                  fontSize: "3vh",
                }}
              >
                BUILD YOUR DREAMS WITH US
              </h1>
              <p
                className="text-left  fontText"
                style={{
                  maxWidth: "295px",
                  marginTop: "2vh",
                  fontSize: "1.5vh",
                }}
              >
                ADL seeks to explore the role of design in building a socially
                and environmentally sustainable future. We wish to collaborate
                with clients, developers, NGOs or anyone who aspires to pursue
                the spirit of design. In the era of rapid globalization where
                illusions are fabricated to appeal mostly to the visual sense,
                the authenticity and relevance of human experience becomes
                questionable. Should architecture blend into a growing
                monoculture or does it strive to celebrate diversity and
                inclusivity of cultures?
              </p>
            </div>
            <div className="col-md-7">
              <form style={{ marginTop: "25vh" }}>
                <div className="form-group">
                  <input
                    type="name"
                    className="form-control  borderfield"
                    id="exampleFormControlInput1"
                    placeholder="NAME"
                    style={{ background: "#e5dfcf", color: "#858175" }}
                  />
                </div>
                <div className="form-group my-3">
                  <input
                    type="email"
                    className="form-control   borderfield"
                    id="exampleFormControlInput1"
                    style={{ background: "#e5dfcf", color: "#858175" }}
                    placeholder="EMAIL"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control borderfield"
                    id="exampleFormControlTextarea1"
                    rows="7"
                    style={{
                      background: "#e5dfcf",
                      color: "#858175",
                    }}
                    placeholder="MESSAGE"
                  ></textarea>
                </div>
                <div className=" my-4">
                  <button className="email-btn">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none sections position-relative">
        <Screen6 />
        <Screen7 />
        <Screen8 />
      </div>
    </>
  );
}

export default Inquiry;
