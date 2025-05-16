import React, { useEffect, useState, useRef } from "react";
import Preloader from "../elements/Preloader";
import HelmetReact from "../elements/HelmetReact";
import HeaderFive from "../components/HeaderFive";
import HeroFive from "../components/HeroFive";
import ServiceFive from "../components/ServiceFive";
import ClientThree from "../components/ClientThree";
import AboutFive from "../components/AboutFive";
import ProcessTwo from "../components/ProcessTwo";
import TestimonialFour from "../components/TestimonialFour";
import PricingTwo from "../components/PricingTwo";
import CTAThree from "../components/CTAThree";
import TeamFour from "../components/TeamFour";
import FaqThree from "../components/FaqThree";
import BlogFive from "../components/BlogFive";
import MarqueeFour from "../components/MarqueeFour";
import FooterFive from "../components/FooterFive";
import JobOffer from "../components/JobsWeOffer";
import WhyJoin from "../components/WhyJoin";
import CounterOne from "../components/CounterOne";



const HomeFive = () => {
  const [active, setActive] = useState(true);
  const jobOfferRef = useRef(null);
  const aboutRef = useRef(null);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);

  const scrollToJobOffer = () => {
    if (jobOfferRef.current) {
      jobOfferRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToAbout();
  }, []);
  return (
    <>
      {/* Preloader */}
      {active === true && <Preloader />}

      {/* Helmet */}
      <HelmetReact title={"Home"} />

      {/* HeaderFive */}
      <HeaderFive onApplyClick={scrollToJobOffer} AboutClick={scrollToAbout}/>

      {/* HeroFive */}
      <HeroFive />

      <JobOffer ref={jobOfferRef}/>


      <ClientThree />


      <WhyJoin/>

 

      {/* AboutFive */}
      <AboutFive ref={aboutRef}/>
{/* 
      <CounterOne/> */}

      {/* ProcessTwo */}
      <ProcessTwo />

      {/* TestimonialFour */}
      {/* <TestimonialFour /> */}

      {/* PricingTwo */}
      {/* <PricingTwo /> */}

      {/* CTA_Three */}
      {/* <CTAThree /> */}

      {/* TeamFour */}
      {/* <TeamFour /> */}

      {/* FaqThree */}
      {/* <FaqThree /> */}

      {/* BlogFive */}
      {/* <BlogFive /> */}

      {/* MarqueeFour */}
      {/* <MarqueeFour /> */}

      {/* FooterFive */}
      <FooterFive />

    </>
  );
};

export default HomeFive;
