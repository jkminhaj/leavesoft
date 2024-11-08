"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import Line from "@/public/images/shape/about-line.png";
import One from "@/public/images/about/about-image1.jpg";
import Two from "@/public/images/about/about-image2.png";
import Circle from "@/public/images/shape/about-circle.png";
import Three from "@/public/images/icon/section-title.png";
import Four from "@/public/images/icon/about-icon1.png";
import Five from "@/public/images/icon/about-icon2.png";
import Six from "@/public/images/about/about-info.png";

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="about-area sub-bg pt-120" id="about-section">
        <div
          className="about__shape "
          data-aos="fade-left"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          <Image src={Line} alt="shape" priority />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-6 "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about__left-item">
                <div className="image big-image">
                  <Image src={One} alt="Image" priority />
                </div>
                <div className="image sm-image">
                  <div className="video__btn-wrp">
                    <div className="video-btn video-pulse">
                      <a className="video-popup" onClick={() => setOpen(true)}>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                  </div>
                  <Image src={Two} alt="Image" priority />
                </div>
                <div className="circle-shape">
                  <Image src={Circle} alt="shape" priority />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="section-header mb-40">
                <h5
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  <Image className="me-1" src={Three} alt="icon" priority />
                  ABOUT Leavesoft
                </h5>
                <h2
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  We Strive to Offer Intelligent Business Solutions
                </h2>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  Aonsectetur adipiscing elit aenean scelerisque augue vitae
                  consequat aisque eget congue velit in cursus sodales the
                  turpis euismod quis sapien euismod quis sapien the condimentum
                  nec lorem nulla augue.
                </p>
              </div>
              <div
                className="row g-4 "
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="col-md-6">
                  <div className="about__right-item">
                    <div className="icon">
                      <Image src={Four} alt="icon" priority />
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
                      <Image src={Five} alt="icon" priority />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">24/7 Call Support</h4>
                      <p>Scelerisque augue the consequat sodales</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="about__info mt-50 "
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <Link href="about" className="btn-one">
                  Explore More{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
                <div className="d-flex gap-2 align-items-center">
                  <Image src={Six} alt="Image" priority />
                  <div className="info">
                    <h5>Ronald Richards</h5>
                    <span className="sm-font">Co, Founder</span>
                  </div>
                </div>
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

export default About;
