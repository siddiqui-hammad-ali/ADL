import React from "react";
import Icon1 from "../../servicesICON/ICONS-01";
import Icon2 from "../../servicesICON/ICONS-02";
import Icon3 from "../../servicesICON/ICONS-03";
import Icon4 from "../../servicesICON/ICONS-04";
import mobilelogo from "../../images/mobilelogo.png";
import Icon5 from "../../servicesICON/ICONS-05";
import Icon6 from "../../servicesICON/ICONS-06";
import Navbar from "../../components/navbar/navbar";
import "./screen4.scss";

const cards = [
  {
    name1: "EXODE",
    name3: "architecture",
    gif: <Icon1 width={"11vh"} viewBox={"0 0 260 310"} />,
  },
  {
    name1: "ENDODE",
    name3: "interiors",
    gif: <Icon2 width={"11vh"} viewBox={"0 0 260 310"} />,
  },
  {
    name1: "KARGAH",
    gif: <Icon3 width={"11vh"} viewBox={"0 0 260 310"} />,
    name3: "product design",
  },
  {
    name1: "CONDE",
    gif: <Icon4 width={"11vh"} viewBox={"0 0 260 310"} />,
    name3: "construction & maintinance",
  },
  {
    name1: "AID",
    gif: <Icon5 width={"11vh"} viewBox={"0 0 260 310"} />,
    name3: "brand design",
  },
  {
    name1: "AUX",
    gif: <Icon6 width={"11vh"} viewBox={"0 0 260 310"} />,
    name3: "ux design",
  },
];
function Screen4() {
  return (
    <div id="service" className="Services sections">
      <div className="container">
        <div className="row" style={{ paddingTop: "4vh" }}>
          <div className="col-10 mt-3">
            <h6
              className=""
              style={{
                color: "#133c5e",
                fontSize: "4.62vw",
                fontFamily: "bold",
                fontWeight: 500,
              }}
            >
              MULTIDISCIPLINARY PRACTICE
            </h6>{" "}
            <div className="col-11">
              <p className="fontTextmobile m-0">
                Buildings, Spaces, Products or Digital User Experiences, we
                design anything and everything! At ADL, our robust team works
                with a collaborative spirit to ensure highly efficient
                end-to-end delivery of all our projects.
              </p>
            </div>
          </div>
          {/* <div className='col-2'>
            <img src={mobilelogo} className='d-block w-100' />
          </div> */}
        </div>
      </div>
      <div className="container">
        {cards.map((card) => (
          <>
            <div className="d-flex flex-row-reverse me-3">
              <div>{card.gif}</div>
              <div style={{ marginTop: "4vh" }}>
                <h6>
                  <span
                    className="fontHeading cardright"
                    style={{
                      fontSize: "12px",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    {card.name1}
                  </span>
                  <span>
                    <p
                      style={{
                        color: "#58595b",
                        fontSize: "8px",
                        display: "flex",
                        justifyContent: "end",
                        marginRight: "9px",
                      }}
                    >
                      {card.name3}
                    </p>
                  </span>
                </h6>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Screen4;
