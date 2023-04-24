/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./contact.scss";

function Contact() {
  return (
    <>
      <div
        id="section6"
        className="d-none d-md-block sections"
        style={{ overflowX: "hidden", overflowY: "hidden" }}
      >
        <div className="container-fluid" style={{ marginBottom: "4vh" }}>
          <div className="row">
            <div className="col-12">
              <div className="mt-5">
                <Navbar active={"contacts"} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-6">
              <p
                className="fontHeading"
                style={{
                  fontSize: "2.6vw",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                info@anastomosisdesignlab.com
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 px-4">
              <iframe
                style={{ height: "37.6vh" }}
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.77236023427!2d39.183754514415604!3d21.5166346763208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfb78fea7a71%3A0xe4722accc505aaf3!2sKhaled%20Ibn%20Al%20Walid%2C%20Al%20Sharafeyah%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1674237770682!5m2!1sen!2sus"
              ></iframe>
              <div className="text-left">
                <h2 className="fontHeading">JEDDAH, KSA</h2>
                <address className="fontText">
                  <strong>+966 50 566 0696</strong>
                  <br />
                  teen town square, khalid bin waleed rd.
                  <br />
                  jeddah 21577,
                  <br />
                  ksa.
                  <br />
                </address>
              </div>
            </div>

            <div className="col-md-6 px-4">
              <iframe
                style={{ height: "37.6vh" }}
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.907809540743!2d-0.1257386846913235!3d51.5149073179759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab2ffabd%3A0x2f7a3d81df8c2d37!2sEffector%2C%2071%E2%80%9375%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sus!4v1674237955792!5m2!1sen!2sus"
              ></iframe>
              <div className="text-left">
                <h2 className="fontHeading">LONDON, UK</h2>
                <address className="fontText">
                  <strong>+44 787 343 1882</strong>
                  <br />
                  71-75 Shelton Street, Covent Garden,
                  <br />
                  London, WC2H 9JQ,
                  <br />
                  UK.
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
