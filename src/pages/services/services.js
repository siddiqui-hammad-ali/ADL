import React from "react";
import Navbar from "../../components/navbar/navbar";
import { moreservices } from "../../components/pagination/moreservices";
import "./services.scss";
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
                  onClick={() => navigate("./moreservices")}
                  className="svg-icon"
                  to={"./moreservices"}
                  style={{ cursor: "pointer" }}
                  state={{ index: idx }}
                  replace
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
      <div className="d-block d-sm-none">
        <div className="container">
          <div className="row" style={{ paddingTop: "4vh" }}>
            <div className="col-10 mt-3">
              <h6
                className=""
                style={{
                  color: "rgb(19, 60, 94)",
                  fontSize: "4.62vw",
                  fontFamily: "bold",
                  fontWeight: 500,
                }}
              >
                MULTIDISCIPLINARY PRACTICE
              </h6>
              <div className="col-11">
                <p className="fontTextmobile m-0">
                  Buildings, Spaces, Products or Digital User Experiences, we
                  design anything and everything! At ADL, our robust team works
                  with a collaborative spirit to ensure highly efficient
                  end-to-end delivery of all our projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cotainer">
          <div className="row justify-content-end"></div>
          <Navbar active={"services"} />
          <div className="container-fluid mt-3">
            {moreservices.map((moreservice, idx) => (
              <div className="row mb-3">
                <div className="col-12 d-flex justify-content-end">
                  <div className="text-container">
                    <p
                      className="fontHeading mb-1"
                      style={{ fontSize: "12px" }}
                    >
                      {moreservice.name1}
                      <br />
                      <p
                        className="DesignText mb-0"
                        style={{ fontSize: "8px", display: "inline-block" }}
                      >
                        {moreservice.name3}
                      </p>
                    </p>

                    <Link
                      onClick={() => navigate("./moreservices")}
                      className="svg-icon ml-2"
                      to={"./moreservices"}
                      style={{ cursor: "pointer" }}
                      state={{ index: idx }}
                      replace
                    >
                      {moreservice.gif}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
