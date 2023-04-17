import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";

function Navbar({ active }) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll('[id^="section"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="Teams fontNav nav flex-column nav-pills lh-1 tabs 	.d-sm-none .d-md-block .d-none .d-sm-block  cursor-pointer  "
      role="tablist"
      aria-orientation="vertical"
      style={{ fontSize: "2vh" }} //'22px'
    >
      <div className="d-none d-lg-block ">
        <Link to="section1" spy={true} smooth={false}>
          <span className={"section1" === activeSection && "active"}>
            WORKS
          </span>
        </Link>
      </div>
      <div className="mt-2 d-none d-lg-block">
        <Link to="section2" spy={true} smooth={false}>
          <span className={"section2" === activeSection && "active"}>
            ABOUT
          </span>
        </Link>
      </div>
      <div className="mt-2 d-none d-lg-block">
        <Link to="section3" spy={true} smooth={false}>
          <span className={"section3" === activeSection && "active"}>
            SERVICES
          </span>
        </Link>
      </div>
      <div className="mt-2 d-none d-lg-block">
        <Link to="section4" spy={true} smooth={false}>
          <span className={"section4" === activeSection && "active"}>TEAM</span>
        </Link>
      </div>
      <div className="mt-2 d-none d-lg-block">
        <Link to="section5" spy={true} smooth={false}>
          <span className={"section5" === activeSection && "active"}>
            INQUIRY
          </span>
        </Link>
      </div>
      <div className="mt-2   d-none d-lg-block">
        <Link to="section6" spy={true} smooth={false}>
          <span className={"section6" === activeSection && "active"}>
            CONTACT
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
