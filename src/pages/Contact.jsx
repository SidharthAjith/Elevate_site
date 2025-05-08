import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import Breadcrumb from "../components/Breadcrumb";
import Newsletter from "../components/Newsletter";
import ContactInner from "../components/ContactInner";
import HeaderFive from "../components/HeaderFive";
import FooterFive from "../components/FooterFive";



const Contact = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Contact"} />

      {/* HeaderFive */}
      <HeaderFive />


      {/* ContactInner */}
      <ContactInner />

      {/* FooterOne */}
      <FooterFive />

    </>
  );
};

export default Contact;
