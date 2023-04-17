import React from "react";
import "./screen6.scss";

function Screen6() {
  return (
    <div id="inquiry " className="  Inquirys">
      <div className="container">
        <div className="row" style={{ paddingTop: "4vh" }}>
          <div className="col-10 ">
            <h6
              className=""
              style={{
                color: "#133c5e",
                fontSize: "4.62vw",
                fontFamily: "bold",
                fontWeight: 500,
              }}
            >
              BUILD YOUR <br /> DREAMS WITH US
            </h6>
            <p className="fontTextmobile m-0">
              ADL seeks to explore the role of design in building a socially and
              environmentally sustainable future. We wish to collaborate with
              clients, developers, NGOs or anyone who aspires to pursue the
              spirit of design. Should architecture blend into a growing
              monoculture or does it strive to celebrate diversity and
              inclusivity of cultures?
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ marginTop: "2vh" }}>
        <div className="row">
          <h6 className="HeadingWorksemail" style={{ fontSize: "1.8vh" }}>
            info@anastomosisdesignlab.com
          </h6>
          <form className=" w-100 ">
            <div className="form-group">
              <input
                type="name"
                className="form-control  borderfield"
                style={{
                  fontSize: "9px",
                  background: "#e5dfcf",
                  color: "#858175",
                }}
                id="exampleFormControlInput1"
                placeholder="NAME"
              />
            </div>
            <div className="form-group my-1">
              <input
                type="email"
                className="form-control   borderfield "
                style={{
                  fontSize: "9px",
                  background: "#e5dfcf",
                  color: "#858175",
                }}
                id="exampleFormControlInput1"
                placeholder="EMAIL"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control borderfield"
                style={{
                  fontSize: "9px",
                  borderRadius: "12px",
                  background: "#e5dfcf",
                  color: "#858175",
                }}
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="MESSAGE"
              ></textarea>
            </div>
            <div className=" my-1">
              <button className="button button5">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Screen6;
