import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const ClientThree = () => {
  let settings = {
    dots: false,
    arrows: false,
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <section className="bg-dark2">
      <div className="client-area-4 md:space pt-[80px]">
        <div className="shadow-shape-right" />
        <div className="container">
          <div className="row gx-90 d-flex justify-content-between align-bottom global-carousel">
            <div className="client-logo">
              <img src="assets/img/client/3-line.png" alt="img" />
            </div>
            {/* <Slider {...settings}>
                            <div className="px-3">
                                <div className="client-logo">

                                    <img src="assets/img/client/averna.png" alt="img" />

                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">

                                    <img src="assets/img/client/foxconn.png" alt="img" />

                                </div>
                            </div>
                            <div className="px-3">
                                <div className="client-logo">

                                    <img src="assets/img/client/motherson.png" alt="img" />

                                </div>
                            </div>
                        </Slider> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientThree;
