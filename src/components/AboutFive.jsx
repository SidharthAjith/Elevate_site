import React, { forwardRef, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutFive = forwardRef((props, ref) => {
  const [showCounter, setShowCounter] = useState(false);
  const [counterKey, setCounterKey] = useState(0);
  const wasVisible = useRef(false);
  const resetTimeout = useRef(null); // ✅ JSX-compatible

  const handleVisibilityChange = (isVisible) => {
    if (isVisible && !wasVisible.current) {
      setShowCounter(true);
      wasVisible.current = true;
    } else if (!isVisible && wasVisible.current) {
      setShowCounter(false);
      wasVisible.current = false;

      if (resetTimeout.current) clearTimeout(resetTimeout.current);

      resetTimeout.current = setTimeout(() => {
        setCounterKey((prev) => prev + 1);
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (resetTimeout.current) clearTimeout(resetTimeout.current);
    };
  }, []);

  return (
    <section className="bg-dark2 scroll-mt-20" ref={ref}>
      <div className="about-area-5 space-bottom">
        <div className="shadow-shape-left " />
        <div className="container">
          <div className="row gy-40 gx-60 align-items-center justify-content-between pt-16">
            <div className="col-xl-5">
              <div className="about-thumb5">
                <div className="img1">
                  <img src="assets/img/about/about_us.jpeg" alt="img" />
                </div>
                <div className="about-counter-wrap w-[50vw] h-[30vw] px-3 md:!w-auto md:!h-auto md:!px-10 jump-reverse ">
                  <h3 className="about-counter text-[40px] md:!text-[60px]">
                    <TrackVisibility once={false} partialVisibility>
                      {({ isVisible }) => {
                        handleVisibilityChange(isVisible);
                        return (
                          showCounter && (
                            <span className="counter-number">
                              <CountUp
                                key={counterKey}
                                start={0}
                                end={1000}
                                duration={2}
                              />
                              +
                            </span>
                          )
                        );
                      }}
                    </TrackVisibility>
                  </h3>
                  <p className="sec-desc text-nowrap">Engineers Placed</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-40">
                <h2 className="sec-title style2 text-white">
                  <span className="text-theme2">About</span> Us
                </h2>
                <p className="sec-text !text-white mb-24">
                  Elevate Engineering Services is dedicated to connecting
                  skilled engineering and diploma graduates with top-tier global
                  manufacturing companies.
                </p>
                <p className="sec-text !text-white">
                  Our mission is to enhance career opportunities for students
                  while fulfilling the industry's demand for specialized talent.
                </p>
                <div className="checklist mt-4">
                  <ul>
                    <li className="text-white">
                      <i className="fas fa-check" />
                      Placed hundreds of graduates in leading global
                      manufacturing companies.
                    </li>
                    <li className="text-white">
                      <i className="fas fa-check" />
                      Industry-recognized training programs enhancing
                      employability.
                    </li>
                    <li className="text-white">
                      <i className="fas fa-check" />
                      Strong industry partnerships ensuring high placement
                      rates.
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="btn-wrap">
                <Link to="/about" className="global-btn style3">
                  Explore More <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutFive;
