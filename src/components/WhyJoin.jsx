import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WhyJoin.css"; // Create this file for custom overrides

const WhyJoin = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute right-[-20px] top-[40%] h-8 w-8 " onClick={onClick}>
        <img src="/assets/img/icon/arrow-right.png" alt="TEST" className="" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className=" h-8 w-8 left-[-20px] absolute top-[40%]" onClick={onClick}>
        <img src="/assets/img/icon/arrow-left.png" alt="" />
      </div>
    );
  };

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-dark2 -mt-6">
      <div className="hero-wrapper hero-5 py-5" id="hero">
        <div className="container mt-24">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center me-xl-4 ms-xl-4">
                <h2 className="sec-title style2 text-white">
                  Why Join <span className="text-theme2">Elevate</span>?
                </h2>
              </div>
            </div>
          </div>

          {/* Carousel - only on small screens */}
          <div className="block md:hidden mt-6 px-3">
            <Slider {...settings} className="whyjoin-carousel">
              <div className="px-3">
                <Card
                  img="training.png"
                  text={
                    <>
                      Industry-specific training through{" "}
                      <span className="text-theme2">
                        Elevate School of Automation
                      </span>
                    </>
                  }
                />
              </div>
              <div className="px-3">
                <Card
                  img="job.png"
                  text={
                    <>
                      <span className="text-theme2">Job placement</span> in top
                      firms like Tata Electronics, Foxconn & Motherson
                    </>
                  }
                />
              </div>
              <div className="px-3">
                <Card
                  img="growth.png"
                  text={
                    <>
                      <span className="text-theme2">Career growth</span> from
                      Technician to Supervisor
                    </>
                  }
                />
              </div>
              <div className="px-3">
                <Card
                  img="coaching.png"
                  text={
                    <>
                      <span className="text-theme2">Mentoring</span>, resume
                      support &{" "}
                      <span className="text-theme2">interview coaching</span>
                    </>
                  }
                />
              </div>
            </Slider>
          </div>

          {/* Grid - only on medium and larger screens */}
          <div className="hidden md:block">
            <div className="hero-wrapper hero-5 py-5" id="hero">
              {" "}
              <div className="container mt-20">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-row align-center justify-center flex-wrap gap-3">
                  <div
                    className="wcu-card !bg-transparent w-[20%] border-1 rounded-xl px-4"
                    style={{ borderColor: "#C4F500" }}
                  >
                    <div className="icon flex justify-center align-center">
                      <img
                        src="assets/img/icon/training.png"
                        alt="img"
                        className="mt-[10px]"
                        style={{ width: "45px", height: "45px" }}
                      />
                    </div>
                    <div className="wcu-card-details">
                      <h4 className="wcu-card-title text-white">
                        Industry-specific training through{" "}
                        <span className="text-theme2">
                          Elevate School of Automation
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div
                    className="wcu-card !bg-transparent w-[20%] border-1 rounded-xl px-4"
                    style={{ borderColor: "#C4F500" }}
                  >
                    <div className="icon flex justify-center align-center">
                      <img
                        src="assets/img/icon/job.png"
                        alt="img"
                        className="mt-[6px]"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div className="wcu-card-details">
                      <h4 className="wcu-card-title text-white !text-xl">
                        <span className="text-theme2">Job placement </span>
                        in top firms like Tata Electronics, Foxconn & Motherson
                      </h4>
                    </div>
                  </div>
                  <div
                    className="wcu-card !bg-transparent w-[20%] border-1 rounded-xl px-4"
                    style={{ borderColor: "#C4F500" }}
                  >
                    <div className="icon flex justify-center align-center">
                      <img
                        src="assets/img/icon/growth.png"
                        alt="img"
                        className="mt-[10px]"
                        style={{ width: "45px", height: "45px" }}
                      />
                    </div>
                    <div className="wcu-card-details">
                      <h4 className="wcu-card-title text-white !text-xl">
                        <span className="text-theme2"> Career growth </span>
                        from Technician to Supervisor
                      </h4>
                    </div>
                  </div>
                  <div
                    className="wcu-card !bg-transparent w-[20%] border-1 rounded-xl px-4"
                    style={{ borderColor: "#C4F500" }}
                  >
                    <div className="icon flex justify-center align-center">
                      <img
                        src="assets/img/icon/coaching.png"
                        alt="img"
                        className="mt-[8px]"
                        style={{ width: "45px", height: "45px" }}
                      />
                    </div>
                    <div className="wcu-card-details">
                      <h4 className="wcu-card-title text-white !text-xl">
                        <span className="text-theme2">Mentoring</span>, resume
                        support &{" "}
                        <span className="text-theme2">interview coaching</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ img, text }) => (
  <div
    className="wcu-card !bg-transparent w-full h-[50vw] md:w-[20%] border-1 rounded-xl !px-3 pt-5 text-center relative"
    style={{ borderColor: "#C4F500" }}
  >
    {/* Icon position */}
    <div
      className="icon flex justify-center align-center mb-3 top-1 left-5"
      style={{ position: "absolute" }}
    >
      <img
        src={`assets/img/icon/${img}`}
        alt={img}
        style={{ width: "45px", height: "45px" }}
        className="mt-2"
      />
    </div>

    {/* Centered Text */}
    <div
      className="wcu-card-details absolute mt-[45px] text-center w-[90%]"
    >
      <h4 className="wcu-card-title text-white text-base md:text-lg">
        {text}
      </h4>
    </div>
  </div>
);


export default WhyJoin;
