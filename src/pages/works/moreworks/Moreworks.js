import React from "react";
import "./Moreworks.scss";
import Navbar from "../../../components/navbar/navbar";
import sideimage from "../../../images/sideimage.png";
import Footer from "../../../components/footer/footer";
import { Link } from "react-router-dom";
import { cards } from "../../../components/pagination/paginationworks";
// import Exode from "./ServicesInside/ServicesInside";

const Moreworks = () => {
  return (
    <>
      <div id="section1" className="container-fluid pe-5 mt-5">
        <div className="row ">
          <div className="col-md-6 ">
            <div className="row">
              <div className=" col-md-6 leftcontact">
                <Navbar />
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="email-text col-6 col-sm-12 col-md-12">
              <div className="d-flex justify-content-end ">
                <img
                  src={sideimage}
                  alt="side"
                  className="img-fluid"
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-3 mt-md-3 mt-lg-0 row  d-flex justify-content-end">
          {cards.map((card, idx) => (
            <div className="col-lg-5">
              <Link
                className=" text-decoration-none "
                to={"./Workinside"}
                state={{ index: idx }}
              >
                <div className=" d-sm-flex justify-content-sm-center d-lg-flex justify-content-lg-end">
                  <img
                    className="moreworksimage "
                    src={card.img}
                    style={{ height: "37vh", width: "60vw" }}
                    alt=""
                  />
                </div>
                <div className="line-height length ">
                  <h4 className="fontHeading ">{card.name}</h4>
                  <p className="fontHeadingmute text-muted ">{card.design}</p>
                  <p className="year fontTextmute text-muted  ">
                    {card.location}
                  </p>
                  <p
                    className="year fontTextmute text-muted  "
                    // style={{ marginTop: "-3px" }}
                  >
                    {card.year}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Moreworks;
