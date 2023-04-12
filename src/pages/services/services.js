import React from "react";
import Icon1 from "../../servicesICON/ICONS-01";
import Icon2 from "../../servicesICON/ICONS-02";
import Icon3 from "../../servicesICON/ICONS-03";
import Icon4 from "../../servicesICON/ICONS-04";
import Icon5 from "../../servicesICON/ICONS-05";
import Icon6 from "../../servicesICON/ICONS-06";
import Navbar from "../../components/navbar/navbar";
import { moreservices } from "../../components/pagination/moreservices";

import "./services.scss";
import Screen4 from "../../screenpages/screen4/Screen4";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <>
      <div id="section3" className="d-none d-md-block mb-3 sections">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="mt-5">
                <Navbar active={"services"} />
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ marginTop: "10vh", marginBottom: "10vh" }}
          >
            {moreservices.map((moreservice, idx) => (
              <div className="col-md-2  text-center">
                <Link
                  // onClick={() => navigate("./moreservices")}
                  className="svg-icon "
                  to={"./moreservices"}
                  style={{ cursor: "pointer" }}
                  state={{ index: idx }}
                >
                  {moreservice.gif}
                </Link>
                <div className="lineheight mt-4">
                  <p className="fontHeading" style={{ fontSize: "23px" }}>
                    {moreservice.name1}
                  </p>
                  <p className=" fontHeading" style={{ fontSize: "23px" }}>
                    {moreservice.name2}
                  </p>
                  <p className=" DesignText lh-1">{moreservice.name3}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="row"
            style={{ marginTop: "5vh", marginBottom: "5vh" }}
          >
            <div className="col-11 mx-auto mt-4">
              <div className="row text-dark align-items-center mt-3 ">
                <div className=" fontHeading col-12 col-sm-12 col-md-4 text-center text-md-start ">
                  <h3 style={{ fontSize: "2.5vh" }} className="fontHeading">
                    MULTIDISCIPLINARY PRACTICE
                  </h3>
                </div>
                <div className="d-none d-lg-block divider col-md-2 p-0 ">
                  <hr className="hr" />
                </div>
                <div
                  className="fontarab col-12 col-sm-12 border border-dark col-md-6 text-center text-md-start d-flex justify-content-center align-items-center flex-column "
                  style={{
                    height: "10vh",
                  }}
                >
                  <div className="text-center practiceText">
                    <p
                      style={{ fontSize: "1.5vh" }}
                      className="practiceText text-start m-0 "
                    >
                      Buildings, Spaces, Products or Digital User Experiences,
                      we design anything and everything! At ADL, our robust team
                      works with a collaborative spirit to ensure highly
                      efficient end-to-end delivery of all our projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <Screen4 />
      </div>
    </>
  );
}

export default Services;
