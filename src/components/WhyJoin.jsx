import React from "react";

const WhyJoin = () => {
  return (
    <div className="bg-dark2 -mt-6">
      <div
        className="hero-wrapper hero-5 py-5"
        id="hero"
        // style={{
        //   backgroundImage: "url(assets/img/hero/hero_bg_5_1.png)",
        //   backgroundSize: "cover",
        // }}
      >
        {" "}
        <div className="container mt-20">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center me-xl-4 ms-xl-4">
                <h2 className="sec-title style2 text-white">
                  Why Join
                  <span className="text-theme2"> Elevate</span>?
                </h2>
              </div>
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
                  style={{width: '45px', height: '45px'}}
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
                  style={{width: '50px', height: '50px'}}
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
                  style={{width: '45px', height: '45px'}}
                />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title text-white !text-xl">
                <span className="text-theme2"> Career growth{" "}</span>
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
                  style={{width: '45px', height: '45px'}}
                />
              </div>
              <div className="wcu-card-details">
                <h4 className="wcu-card-title text-white !text-xl">
                <span className="text-theme2">Mentoring</span>, resume support & <span className="text-theme2">interview coaching</span> 
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
