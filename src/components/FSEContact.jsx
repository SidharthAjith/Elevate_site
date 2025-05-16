import React from "react";
import { Link } from "react-router-dom";
import FSEHubspotForm from "./FSEHubSpot";

const FSEContact = () => {
  return (
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
          <div className="container ">
            <div className="row gx-30">
              <div className="col-xxl-8 col-lg-7 items-center flex ">
                <div className="page-thumb md:mb-40 mb-10 mt-20 ">
                  <img
                    src="assets/img/jobs/Field Service Engineer.jpg"
                    alt="img"
                    className="!min-h-0"
                  />
                </div>
              </div>
              <div className="col-12 order-lg-3">
              <div className="md:hidden block col-xxl-4 col-lg-5 order-lg-2">
                <aside className="sidebar-area ">
                  <div className="widget widget_project-info !p-[25px]">
                    <h3 className="text-lg text-theme font-semibold mb-3">
                      Field Service Engineer
                    </h3>
                    <p className="text-sm text-black mb-4 leading-relaxed">
                      Are you a Graduate or Diploma holder in Electronics,
                      Mechatronics, or Instrumentation with hands-on experience
                      in maintaining and installing assembly line equipment?
                      Join us as a Field Service Engineer and work with top
                      multinational factories where precision and efficiency
                      matter.
                    </p>
                    <ul className="">
                      <li className="!m-0 flex items-center jus">
                        <img
                          src="assets/img/icon/job_type.png"
                          alt="Job Type"
                          className="w-6 mr-2"
                        />
                        <span className="font-medium !text-black !text-[14px] w-fit">
                          Job Type:
                        </span>
                        <span className="!text-black !text-[14px]">
                          Full-Time
                        </span>
                      </li>
                      <li className="!m-0 flex items-center">
                        <img
                          src="assets/img/icon/location.png"
                          alt="Job Type"
                          className="w-6 mr-2"
                        />

                        <span className="font-medium !text-black !text-[14px]">
                          Location:
                        </span>
                        <span className="!text-black !text-[14px]">
                          Chennai & Bangalore
                        </span>
                      </li>
                      <li className="!m-0 flex items-center">
                        <img
                          src="assets/img/icon/opening.png"
                          alt="Job Type"
                          className="w-6 mr-1"
                        />
                        <span className="font-medium !text-black !text-[14px]">
                          Openings:
                        </span>
                        <span className="!text-black !text-[14px]">
                          200+ Positions
                        </span>
                      </li>
                      <li className="flex !m-0 items-center">
                        <img
                          src="assets/img/icon/salary.png"
                          alt="Job Type"
                          className="w-6 mr-2"
                        />

                        <span className="font-medium !text-black !text-[14px]">
                          Salary:
                        </span>
                        <span className="!text-black !text-[14px]">
                          As per industry standards + Benefits including food
                          and accommodation.
                        </span>
                      </li>
                    </ul>
                    <div className="flex justify-center mt-6">
                    <div className="btn-wrap global-btn !bg-[#C4F500] !text-[#19352D] hover:!text-white"  onClick={() => {
                        const section = document.getElementById("apply-now");
                        if (section)
                          section.scrollIntoView({ behavior: "smooth" });
                      }}>

                        Apply Now <i className="fas fa-arrow-right ms-2" />

                    </div>
                  </div>
                  </div>

                  
                </aside>
              </div>
                <h2 className="text-white">
                  Join Global Leaders Of{" "}
                  <span className="text-theme2">Mobile Manufacturing</span>
                </h2>
                <p className="text-white text-xl font-medium">
                  <span className="text-theme2">200+</span> Field Service
                  Engineer Openings |{" "}
                  <span className="text-theme2">Chennai & Bangalore</span>
                </p>
                <p className="mb-30 text-white">
                  Are you a skilled engineer looking to fast-track your career
                  in mobile manufacturing? <br />
                  Here's your chance to work with a{" "}
                  <span className="text-theme2">
                    world-class Original Equipment Manufacturer (OEM)
                  </span>{" "}
                  driving innovation and precision in{" "}
                  <span className="text-theme2">automated assembly lines</span>{" "}
                  for mobile devices.
                </p>
                <p className="mb-30 text-white">
                  We are hiring{" "}
                  <span className="text-theme2">Field Service Engineers</span>{" "}
                  to support mission-critical operations at our manufacturing
                  hubs in{" "}
                  <span className="text-theme2">Chennai and Bangalore.</span> Be
                  part of a team delivering advanced automation solutions to
                  top-tier global clients.
                </p>
                <p className="text-theme2 page-title mt-5">Position Overview</p>
                <p className="mb-30 text-white">
                  As a Field Service Engineer, you'll play a vital role in
                  maintaining, installing, and optimizing high-tech assembly
                  line systems used by leading multinational companies. This is
                  a <span className="text-theme2">hands-on role</span> where
                  your skills directly impact production efficiency, product
                  quality, and system uptime.
                </p>
                <div className="row gy-3">
                  <div className="">
                    <div className="checklist style2">
                      <ul className="space-y-3">
                        <li className="text-white flex items-start gap-2">
                          <i className="fas fa-check-circle mt-1" />
                          <span>
                            Execute{" "}
                            <span className="text-theme2">
                              preventive and corrective maintenance
                            </span>{" "}
                            for assembly line and automation equipment
                          </span>
                        </li>
                        <li className="text-white flex items-start gap-2">
                          <i className="fas fa-check-circle mt-1" />
                          <span>
                            Manage{" "}
                            <span className="text-theme2">
                              installation and commissioning
                            </span>{" "}
                            of sophisticated machines on the shop floor
                          </span>
                        </li>
                        <li className="text-white flex items-start gap-2">
                          <i className="fas fa-check-circle mt-1" />
                          <span>
                            Assemble, test, and troubleshoot electrical,
                            mechanical, and pneumatic components
                          </span>
                        </li>
                        <li className="text-white flex items-start gap-2">
                          <i className="fas fa-check-circle mt-1" />
                          <span>
                            Perform{" "}
                            <span className="text-theme2">
                              calibration and alignment
                            </span>{" "}
                            using industrial tools and measuring instruments
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="checklist style2">
                    <ul className="space-y-3">
                      <li className="text-white flex items-start gap-2">
                        <i className="fas fa-check-circle mt-1" />
                        <span>
                          Document service activities, equipment logs, and
                          follow compliance protocols
                        </span>
                      </li>
                      <li className="text-white flex items-start gap-2">
                        <i className="fas fa-check-circle mt-1" />
                        <span>
                          Provide technical support and training to operators
                          and junior technicians
                        </span>
                      </li>
                      <li className="text-white flex items-start gap-2">
                        <i className="fas fa-check-circle mt-1" />
                        <span>
                          Ensure safety procedures and quality standards are
                          followed at all times
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="page-title text-theme2 mt-70 mb-30 ">
                  Eligibility & Qualifications
                </h3>
                <div className="checklist style2 mb-16">
                  <ul className="space-y-3">
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        <span className="text-theme2">B.E. / B.Tech</span> in
                        Electronics, Mechatronics, Instrumentation (minimum 1
                        year experience)
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        <span className="text-theme2">Diploma Holders</span>{" "}
                        with 2–7 years of industry-relevant experience are also
                        eligible
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        Sound knowledge of{" "}
                        <span className="text-theme2">
                          automation systems, PLCs, sensors, drives, and
                          assembly tools
                        </span>
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        Hands-on experience with{" "}
                        <span>electric and pneumatic tools</span>, blueprints,
                        and wiring diagrams
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        Excellent troubleshooting and analytical skills
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        Must be available for{" "}
                        <span className="text-theme2">immediate joining</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <h3 className="page-title text-theme2 mt-70 mb-30 ">
                  Why Join Us?
                </h3>
                <div className="checklist style2 mb-16">
                  <ul className="space-y-3">
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        <span className="font-bold">
                          Unmatched Career Growth:
                        </span>{" "}
                        Work on high-impact projects with global OEMs.
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        <span className="font-bold">On-the-Job Training:</span>{" "}
                        Get trained in the latest assembly technologies and
                        industrial automation tools.
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        <span className="font-bold">
                          Exposure to Global Standards:
                        </span>{" "}
                        Be part of cutting-edge manufacturing systems.
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        <span className="font-bold">
                          Stable, Long-Term Opportunity:
                        </span>{" "}
                        Join a growing team in a high-demand sector.
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        <span className="font-bold">
                          Supportive Work Culture:
                        </span>{" "}
                        Collaborate with experienced engineers and leaders in
                        the field.
                      </span>
                    </li>
                    <li className="text-white flex items-start gap-2">
                      <i className="fas fa-check-circle mt-1" />
                      <span>
                        <span className="font-bold">
                          Modern Infrastructure:
                        </span>{" "}
                        Work in state-of-the-art facilities with world-class
                        machinery and tools.
                      </span>
                    </li>
                  </ul>
                </div>

               
              </div>
              <div className="hidden md:block col-xxl-4 col-lg-5 order-lg-2">
                <aside className="sidebar-area ">
                  <div className="widget widget_project-info !p-[25px]">
                    <h3 className="text-lg text-theme font-semibold mb-3">
                      Field Service Engineer
                    </h3>
                    <p className="text-sm text-black mb-4 leading-relaxed">
                      Are you a Graduate or Diploma holder in Electronics,
                      Mechatronics, or Instrumentation with hands-on experience
                      in maintaining and installing assembly line equipment?
                      Join us as a Field Service Engineer and work with top
                      multinational factories where precision and efficiency
                      matter.
                    </p>
                    <ul className="">
                      <li className="!m-0 flex items-center jus">
                        <img
                          src="assets/img/icon/job_type.png"
                          alt="Job Type"
                          className="w-6 mr-2"
                        />
                        <span className="font-medium !text-black !text-[14px] w-fit">
                          Job Type:
                        </span>
                        <span className="!text-black !text-[14px]">
                          Full-Time
                        </span>
                      </li>
                      <li className="!m-0 flex items-center">
                        <img
                          src="assets/img/icon/location.png"
                          alt="Job Type"
                          className="w-6 mr-2"
                        />

                        <span className="font-medium !text-black !text-[14px]">
                          Location:
                        </span>
                        <span className="!text-black !text-[14px]">
                          Chennai & Bangalore
                        </span>
                      </li>
                      <li className="!m-0 flex items-center">
                        <img
                          src="assets/img/icon/opening.png"
                          alt="Job Type"
                          className="w-6 mr-1"
                        />
                        <span className="font-medium !text-black !text-[14px]">
                          Openings:
                        </span>
                        <span className="!text-black !text-[14px]">
                          200+ Positions
                        </span>
                      </li>
                      <li className="flex !m-0 items-center">
                        <img
                          src="assets/img/icon/salary.png"
                          alt="Job Type"
                          className="w-6 mr-2"
                        />

                        <span className="font-medium !text-black !text-[14px]">
                          Salary:
                        </span>
                        <span className="!text-black !text-[14px]">
                          As per industry standards + Benefits including food
                          and accommodation.
                        </span>
                      </li>
                    </ul>
                    <div className="flex justify-center mt-6">
                    <div className="btn-wrap global-btn !bg-[#C4F500] !text-[#19352D] hover:!text-white"  onClick={() => {
                        const section = document.getElementById("apply-now");
                        if (section)
                          section.scrollIntoView({ behavior: "smooth" });
                      }}>

                        Apply Now <i className="fas fa-arrow-right ms-2" />

                    </div>
                  </div>
                  </div>

                  
                </aside>
              </div>
            </div>
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
              <div className="col-xl-6 col-lg-8 bg-white rounded-xl w-[95%] md:w-1/2 mx-auto mt-5">
                <FSEHubspotForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FSEContact;
