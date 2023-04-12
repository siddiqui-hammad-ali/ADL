import React from "react";
import Navbar from "../../components/navbar/navbar";
import Screen5 from "../../screenpages/screen5/Screen5";
import "./team.scss";

const notch = [
  {
    empName: "TAMER KHALIL",
    department: "CEO",
    image: "TEAM/01-TAMER.jpg",
  },
  {
    empName: "EL MUHANNAD GAD",
    department: "COO",
    image: "TEAM/02-MOHANNAD.jpg",
  },
  {
    empName: "ZAIN ANSARI",
    department: "CDO",
    image: "TEAM/03-ZAIN.jpg",
  },
  {
    empName: "ABDULLAH ALASHI",
    department: "POJECT MANAGER",
    image: "TEAM/05-ABDULLAH.jpg",
  },
  {
    empName: "SOPHIA QASSIN",
    department: "SENIOR ARCHITECT",
    image: "TEAM/04-SOPHIA.jpg",
  },
];
function Team() {
  return (
    <>
      <div
        id="section4"
        className="d-none d-md-block team-header mt-3 sections"
      >
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-md-4">
              <Navbar active={"team"} />
              <h1 className="fontHeading" style={{ marginTop: "20vh" }}>
                A TEAM
              </h1>
              <div className="col-md-10" style={{ marginTop: "15vh" }}>
                <p
                  className="text-left  fontText details"
                  style={{ fontSize: "1.5vh" }}
                >
                  Over the last seven years ADL has grown its team comprising of
                  architects, designers and engineers who bring in passion and
                  collaborative spirit that is reflected in all our projects.
                </p>
              </div>
            </div>
            <div className="col-md-8 mb-5">
              <div className="row justify-content-end">
                {notch.map((notches) => (
                  <div
                    className="col-md-4 px-xxl-4"
                    style={{ marginTop: "2vh", marginBottom: "2vh" }}
                  >
                    <div
                      className="bg-img"
                      style={{
                        backgroundImage: `url('${notches.image}')`,
                        height: "30vh",
                      }}
                    ></div>
                    <div className="profile-detail mt-4 text-left">
                      <p
                        className="fontHeading  mb-0"
                        style={{ fontSize: "1.28vw" }}
                      >
                        {notches.empName}
                      </p>
                      <p
                        style={{
                          color: "#58595b",
                          fontSize: "1.28vw",
                          fontFamily: "bold",
                        }}
                      >
                        {notches.department}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <Screen5 />
      </div>
    </>
  );
}

export default Team;
