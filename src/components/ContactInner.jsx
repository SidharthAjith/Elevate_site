import React from "react";
import { Link } from "react-router-dom";
import ContactHubSpot from "./ContactHubSpot";

const ContactInner = () => {
  return (
    <>
       <div>
      <div
        className="hero-wrapper"
        id="hero"
        style={{
          backgroundImage: "url(assets/img/hero/hero_bg_5_1.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="portfolio-deatils-area !pb-0 mt-16 space">
          <div className="container">
            
          </div>
        </div>
        <div />
        <div className="space-bottom" id="apply-now">
          <div className="container">
            <div className="row gy-40 justify-content-between">
              <div className="col-lg-6 flex">
                <div className="title-area mb-0 justify-center items-center align-content-center">
                  <h2 className="sec-title style2 text-white">Ready to Elevate Your Engineering Career?</h2>
                  <p className="mb-40 text-white">
                  If you're passionate about automation, problem-solving, and working with global technology leaders — <span className="text-theme2">we want to hear from you.</span>
                  {" "}
                  </p>
                  <div className="contact-area !mx-0 ">
                    <div className="container w-full !pl-0 !pr-0">
                      <div className="contact-page-wrap !pl-[35px] !pr-[60px] bg-theme">
                        <div className="row gy-40 align-items-center">
                          <div className="col-lg-6 col-md-6">
                            <div className="contact-info">
                              <div className="contact-info_icon">
                                <i className="fas fa-phone-alt" />
                              </div>
                              <div className="contact-info_details">
                                <h6 className="contact-info_title">Phone</h6>
                                <p className="contact-info_text">
                                  <span>+91 9037940563</span>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="contact-info">
                              <div className="contact-info_icon">
                                <i className="fas fa-envelope" />
                              </div>
                              <div className="contact-info_details">
                                <h6 className="contact-info_title">Email</h6>
                                <p className="contact-info_text">
                                  <span>careers@ecesistech.com</span> <br />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-8 bg-white rounded-xl">
                {/* FORMS*/}
                <ContactHubSpot/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactInner;
