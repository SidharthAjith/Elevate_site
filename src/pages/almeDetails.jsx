import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import Breadcrumb from "../components/Breadcrumb";
import FooterFive from "../components/FooterFive";
import Newsletter from "../components/Newsletter";
import ContactInner from "../components/ContactInner";
import ALMEContact from "../components/ALMEContact";



const ALMEDetails = () => {
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

 

    <ALMEContact/>


      {/* FooterOne */}
      <FooterFive />

    </>
  );
};

export default ALMEDetails;
