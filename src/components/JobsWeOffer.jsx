import React, {forwardRef} from "react";
import { Link } from "react-router-dom";

const JobOffer = forwardRef((props, ref) => {
  return (
    <section className="bg-dark2" >
      <div className="space-top">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-6">
              <div className="shadow-shape-right" />

              <div className="title-area text-center" ref={ref}>
                <h2 className="sec-title style2 text-white">
                  Job<span className="text-theme2"> Opportunities</span> We
                  Offer{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center align-items-center" >
            <div className="col-xl-6 col-md-6">
              <div
                className="pricing-card style2  md:h-[100vh] h-fit w-full m-auto "
                style={{ borderColor: "#C4F500" }}
              >
                <h4 className="text-[26px] text-white">
                  Field Service Engineers
                </h4>
                <div className="pricing-card-price-wrap">
                  <p className="text-lg text-white">
                    Be on the frontlines of technical support, installation, and
                    troubleshooting. Work directly with manufacturing clients to
                    ensure smooth operations of machines and systems
                  </p>
                </div>
                <div className="pricing-card-details">
                  <p className="text-md text-white">
                    Responsibilities include:
                  </p>
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check" />
                        Installation and setup of machinery
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        On-site troubleshooting and repairs
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Preventive maintenance checks
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Client coordination and reporting
                      </li>
                    </ul>
                  </div>
                  <div className="btn-wrap">
                    <Link to="/field-service-engineers" className="global-btn ">
                      Apply Now <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div
                className="pricing-card style2 md:h-[100vh] h-fit w-full m-auto mb-5 md:mb-0 "
                style={{ borderColor: "#C4F500" }}
              >
                <h4 className="text-[26px] text-white">
                  Automation Line Maintenance Engineers
                </h4>
                <div className="pricing-card-price-wrap">
                  <p className="text-lg text-white">
                    Work inside state-of-the-art manufacturing facilities
                    maintaining automated assembly lines and robotic equipment
                    that power India’s electronics and mobile manufacturing
                    units.
                  </p>
                </div>
                <div className="pricing-card-details">
                  <p className="text-md text-white">
                    Responsibilities include:
                  </p>
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-check" />
                        Maintaining and repairing automation systems
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Electrical and mechanical diagnostics
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Minimizing downtime through regular inspections
                      </li>
                      <li>
                        <i className="fas fa-check" />
                        Supporting production teams with rapid issue resolution
                      </li>
                    </ul>
                  </div>
                  <div className="btn-wrap">
                    <Link to="/automation-line-machine-engineers" className="global-btn ">
                      Apply Now <i className="fas fa-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default JobOffer;
