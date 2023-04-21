import React, { useEffect, useState } from "react";
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

  const handleSectionClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/"; // Navigate to homepage if section not found
      setTimeout(() => {
        const sectionElementAfterNavigation =
          document.getElementById(sectionId);
        if (sectionElementAfterNavigation) {
          sectionElementAfterNavigation.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    }
  };

  return (
    <div
      className="Teams fontNav nav flex-column nav-pills lh-1 tabs 	.d-sm-none .d-md-block .d-none .d-sm-block  cursor-pointer  "
      role="tablist"
      aria-orientation="vertical"
      style={{ fontSize: "2vh" }} //'22px'
    >
      <div className="d-none d-lg-block ">
        <span
          className={activeSection === "section1" ? "active" : ""}
          onClick={() => handleSectionClick("section1")}
        >
          WORKS
        </span>
      </div>
      <div className="mt-2 d-none d-lg-block">
        <span
          className={activeSection === "section2" ? "active" : ""}
          onClick={() => handleSectionClick("section2")}
        >
          ABOUT
        </span>
      </div>
      <div className="mt-2 d-none d-lg-block">
        <span
          className={activeSection === "section3" ? "active" : ""}
          onClick={() => handleSectionClick("section3")}
        >
          SERVICES
        </span>
      </div>
      <div className="mt-2 d-none d-lg-block">
        <span
          className={activeSection === "section4" ? "active" : ""}
          onClick={() => handleSectionClick("section4")}
        >
          TEAM
        </span>
      </div>
      <div className="mt-2 d-none d-lg-block">
        <span
          className={activeSection === "section5" ? "active" : ""}
          onClick={() => handleSectionClick("section5")}
        >
          INQUIRY
        </span>
      </div>
      <div className="mt-2   d-none d-lg-block">
        <span
          className={activeSection === "section6" ? "active" : ""}
          onClick={() => handleSectionClick("section6")}
        >
          CONTACT
        </span>
      </div>
    </div>
  );
}

export default Navbar;
