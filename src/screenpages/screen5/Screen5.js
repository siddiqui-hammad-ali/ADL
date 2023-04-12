import React from "react";
import Navbar from "../../components/navbar/navbar";
import mobilelogo from "../../images/mobilelogo.png";
import "./screen5.scss";

const notch = [
  {
    empName: "TAMER KHALIL",
    department: "CEO",
    image: "TEAM/01-TAMER.jpg",
    crop: "polygon(100% 0, 100% 71%, 73% 100%, 0 100%, 0 0)",
    positionY: "1px",
  },
  {
    empName: "EL MUHANNAD GAD",
    department: "COO",
    image: "TEAM/02-MOHANNAD.jpg",
    crop: "polygon(100% 0, 100% 100%, 0 100%, 0 31%, 35% 0)",
    positionY: "1px",
  },
  {
    empName: "ZAIN ANSARI",
    department: "CDO",
    image: "TEAM/03-ZAIN.jpg",
    crop: "polygon(100% 28%, 100% 100%, 0 100%, 0 0, 67% 0)",
    positionY: "1px",
  },
  {
    empName: "ABDULLAH ALASHI",
    department: "POJECT MANAGER",
    image: "TEAM/05-ABDULLAH.jpg",
    crop: "polygon(100% 0, 100% 100%, 0 100%, 0 31%, 35% 0)",
    positionY: "1px",
  },
  {
    empName: "SOPHIA QASSIN",
    department: "SENIOR ARCHITECT",
    image: "TEAM/04-SOPHIA.jpg",
    crop: "polygon(100% 28%, 100% 100%, 0 100%, 0 0, 67% 0)",
    positionY: "1px",
  },
];
function Screen5() {
  return (
    <div id="team " className=" team-header pb-2 sections">
      <div className="container">
        <div
          className="row"
          style={{ paddingTop: "4vh", margin: "0 !important" }}
        >
          <div className="col-10 px-4">
            <h6
              className=""
              style={{
                color: "#133c5e",
                fontSize: "4.62vw",
                fontFamily: "bold",
                fontWeight: 500,
              }}
            >
              {" "}
              A TEAM
            </h6>
            <p className="fontTextmobile m-0">
              Over the last seven years ADL has grown its team comprising of
              architects, designers and engineers who bring in passion and
              collaborative spirit that is reflected in all our projects.
            </p>
          </div>
          {/* <div className='col-2'>
            <img src={mobilelogo} className='d-block w-100' />
          </div> */}
        </div>
      </div>
      <div className=" container">
        {notch.map((notches) => (
          <>
            <div className="d-flex flex-row-reverse my-3">
              <div
                className="bg-img"
                style={{
                  backgroundImage: `url('${notches.image}')`,
                  height: "13.5vh",
                  width: "32%",
                  clipPath: notches.crop,
                  backgroundPositionY: notches.positionY,
                }}
              ></div>
              <div className="d-flex align-items-end me-2">
                <h6
                  className="fontHeading cardright m-0"
                  style={{ fontSize: "13px" }}
                >
                  {notches.empName}{" "}
                  <span>
                    <p
                      className="m-0"
                      style={{
                        color: "#58595b",
                        fontSize: "11px",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      {notches.department}
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

export default Screen5;
