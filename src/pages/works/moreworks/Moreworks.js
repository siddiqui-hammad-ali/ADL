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
        <div className="row  d-flex justify-content-end">
          {cards.map((card, idx) => (
            <div className="col-lg-5">
              <Link
                className=" text-decoration-none "
                to={"./Workinside"}
                state={{ index: idx }}
              >
                <div className=" d-sm-flex justify-content-sm-start d-lg-flex justify-content-lg-end">
                  <img
                    src={card.img}
                    style={{ height: "37vh", width: "60vw" }}
                  />
                </div>
                <div className="line-height length ">
                  <h4 className="fontHeading ">{card.name}</h4>
                  <p className="fontHeadingmute text-muted ">{card.design}</p>
                  <p className="fontTextmute text-muted  ">{card.location}</p>
                  <span className="fontTextmute text-muted  ">{card.year}</span>
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
