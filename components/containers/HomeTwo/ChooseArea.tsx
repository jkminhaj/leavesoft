"use client";
import { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import One from "@/public/images/shape/choose-shape-right.png";
import Two from "@/public/images/shape/choose-shape-right2.png";
import Three from "@/public/images/shape/choose-shape-left.png";
import Four from "@/public/images/choose/choose-image1.png";
import Five from "@/public/images/icon/about-icon1.png";
import Six from "@/public/images/icon/about-icon2.png";

const ChooseArea = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="choose-area sub-bg pt-120 pb-120">
        <div className="choose__video-btn">
          <div
            className="video-btn video-pulse "
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <a className="video-popup" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
        <div
          className="choose__shape-right1 d-none d-lg-block"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <Image src={One} alt="shape" priority />
        </div>
        <div
          className="choose__shape-right2 d-none d-lg-block"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Image src={Two} alt="shape" priority />
        </div>
        <div className="choose__shape-left sway__animation">
          <Image src={Three} alt="shape" priority />
        </div>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 d-block d-lg-none">
              <div className="image">
                <Image src={Four} alt="Image" priority />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header mb-40">
                <h5
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  <svg
                    className="me-1"
                    width="20"
                    height="12"
                    viewBox="0 0 20 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="18.5"
                      height="10.5"
                      rx="5.25"
                      stroke="#3C72FC"
                      strokeWidth="1.5"
                    />
                    <mask id="path-2-inside-1_682_455" fill="white">
                      <path d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
                    </mask>
                    <path
                      d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                      fill="#3C72FC"
                      mask="url(#path-2-inside-1_682_455)"
                    />
                  </svg>
                  WHY Choose US
                </h5>
                <h2
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Elevate Your Achievements Using Premier IT Solutions
                </h2>
              </div>
              <div
                className="row g-4 "
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Five} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">Best Services</h4>
                      <p>Scelerisque augue the consequat sodales</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Six} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">24/7 Call Support</h4>
                      <p>Scelerisque augue the consequat sodales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="progress-area  mt-40"
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <div className="progress__title mb-10">
                  <h5>Information Technology</h5>
                  <span>
                    <span className="progress-count">80</span>%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar "
                    data-aos="fade-left"
                    data-aos-duration="860"
                    role="progressbar"
                    style={{ width: "86%" }}
                    aria-valuenow={86}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
              <div
                className="progress-area mt-20"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="progress__title mb-10">
                  <h5>Technology Consultant</h5>
                  <span>
                    <span className="progress-count">95</span>%
                  </span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar "
                    data-aos="fade-left"
                    data-aos-duration="950"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow={95}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="choose__image image">
                <Image src={Four} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="iVqz_4M5mA0"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default ChooseArea;
