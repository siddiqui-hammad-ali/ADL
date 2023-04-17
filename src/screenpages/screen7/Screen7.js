import React from "react";
import "./screen7.scss";

function Screen7() {
  return (
    <div id="contact Contacts " className="my-0 my-md-3 my-lg-5">
      <div className="container">
        <div
          className="d-flex flex-row"
          style={{ marginTop: "2vh", marginBottom: "1vh" }}
        >
          <div className="col-4 d-flex align-items-start">
            <h6
              className=" cardright"
              style={{ fontSize: "10px", textAlign: "right" }}
            >
              <h2 className="fontHeadingmobile">JEDDAH, KSA</h2>
              <address
                className="fontTextmobile1"
                style={{ textAlign: "right" }}
              >
                <strong>+966 50 566 0696</strong>
                <br />
                teen town square, khalid bin waleed rd.
                <br />
                jeddah 21577,
                <br />
                ksa.
                <br />
              </address>
            </h6>
          </div>
          <div className="col-8  d-flex justify-content-end">
            <iframe
              style={{ height: "16vh" }}
              title="."
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.77236023427!2d39.183754514415604!3d21.5166346763208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfb78fea7a71%3A0xe4722accc505aaf3!2sKhaled%20Ibn%20Al%20Walid%2C%20Al%20Sharafeyah%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1674237770682!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
        <div className="d-flex flex-row" style={{ marginBottom: "2vh" }}>
          <div className="d-flex align-items-start ">
            <h6
              className=" cardright"
              style={{ fontSize: "10px", textAlign: "right" }}
            >
              <h2 className="fontHeadingmobile">LONDON, UK</h2>
              <address
                className="fontTextmobile1"
                style={{ textAlign: "right" }}
              >
                <strong>+44 787 343 1882</strong>
                <br />
                71-75 Shelton Street, Covent Garden,
                <br />
                London, WC2H 9JQ,
                <br />
                UK.
                <br />
              </address>
            </h6>
          </div>
          <div className="d-flex justify-content-end">
            <iframe
              style={{ height: "16vh" }}
              title="."
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.907809540743!2d-0.1257386846913235!3d51.5149073179759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab2ffabd%3A0x2f7a3d81df8c2d37!2sEffector%2C%2071%E2%80%9375%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sus!4v1674237955792!5m2!1sen!2sus"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen7;
