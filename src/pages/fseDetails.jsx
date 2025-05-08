import React, { useEffect, useState } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import FooterFive from "../components/FooterFive";
import Newsletter from "../components/Newsletter";
import FSEContact from "../components/FSEContact"



const FSEDetails = () => {
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

      {/* Breadcrumb */}

      {/* ContactInner */}
      <FSEContact />


      {/* FooterOne */}
      <FooterFive />

    </>
  );
};

export default FSEDetails;
