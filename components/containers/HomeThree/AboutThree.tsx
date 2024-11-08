import Image from "next/image";
import One from "@/public/images/shape/about-three-line.png";
import Two from "@/public/images/shape/about-three-box-up.png";
import Three from "@/public/images/shape/about-three-box-down.png";
import Four from "@/public/images/icon/section-title.png";
import Five from "@/public/images/icon/about-three-icon1.png";
import Six from "@/public/images/icon/about-three-icon2.png";
import Seven from "@/public/images/icon/about-three-icon3.png";
import Eight from "@/public/images/about/about-info.png";
import Nine from "@/public/images/shape/about-three-dot.png";
import Ten from "@/public/images/shape/faq-line.png";
import Eleven from "@/public/images/about/about-three-image.png";

const AboutThree = () => {
  return (
    <section
      className="about-area about-three-area sub-bg pt-120"
      id="about-three"
    >
      <div
        className="about__shape "
        data-aos="fade-left"
        data-aos-delay="400"
        data-aos-duration="1500"
      >
        <Image src={One} alt="shape" priority />
      </div>
      <div
        className="about-three__box-up "
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animationY" src={Two} alt="shape" priority />
      </div>
      <div
        className="about-three__box-down "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Three} alt="shape" priority />
      </div>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="about-three__left-item">
              <div className="section-header mb-40">
                <h5
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  <Image className="me-1" src={Four} alt="icon" priority />
                  ABOUT Leavesoft
                </h5>
                <h2
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Selecting the Finest IT Service Provider
                </h2>
                <p
                  className=""
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  It is a long established fact that a reader will be distracted
                  the readable content of a page when looking at layout the
                  point of using lorem the is Ipsum less normal.
                </p>
              </div>
              <div className="about-three__info bor-bottom pb-30">
                <div
                  className="row g-4 "
                  data-aos="fade-down"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <div className="col-md-6">
                    <div className="about__right-item">
                      <div className="icon">
                        <Image src={Five} alt="icon" priority />
                      </div>
                      <div className="content">
                        <h4 className="mb-1">Business Growth</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about__right-item">
                      <div className="icon">
                        <Image src={Six} alt="icon" priority />
                      </div>
                      <div className="content">
                        <h4 className="mb-1">Technology Consultancy</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="about__info mt-30 "
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  <Image src={Eight} alt="Image" priority />
                  <div className="info">
                    <h5>Ronald Richards</h5>
                    <span className="sm-font">Co, Founder</span>
                  </div>
                </div>
                <div className="d-flex flex-wrap gap-2 align-items-center">
                  <div className="about-call-icon">
                    <span>
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_918_1337)">
                          <path
                            d="M5.41667 4.33337H9.75L11.9167 9.75004L9.20833 11.375C10.3685 13.7275 12.2725 15.6315 14.625 16.7917L16.25 14.0834L21.6667 16.25V20.5834C21.6667 21.158 21.4384 21.7091 21.0321 22.1154C20.6257 22.5218 20.0746 22.75 19.5 22.75C15.2742 22.4932 11.2885 20.6987 8.2949 17.7051C5.3013 14.7115 3.5068 10.7258 3.25 6.50004C3.25 5.9254 3.47827 5.3743 3.8846 4.96798C4.29093 4.56165 4.84203 4.33337 5.41667 4.33337Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.25 7.58337C16.8246 7.58337 17.3757 7.81165 17.7821 8.21798C18.1884 8.6243 18.4167 9.1754 18.4167 9.75004"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.25 3.25C17.9739 3.25 19.6272 3.93482 20.8462 5.15381C22.0652 6.37279 22.75 8.02609 22.75 9.75"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width="26" height="26" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div className="info">
                    <span className="sm-font fw-600 secondary-color">
                      Call Us Now
                    </span>
                    <h5>+208-555-0112</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 order-1 order-lg-2">
            <div
              className="faq__image about-three__image image "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="about-three-dot">
                <Image
                  className="sway__animationX"
                  src={Nine}
                  alt="shape"
                  priority
                />
              </div>
              <div className="about-three-count p-4 d-flex align-items-center gap-3">
                <Image className="icon" src={Seven} alt="icon" priority />
                <div className="con">
                  <h3>
                    <span className="count">6,561</span>+
                  </h3>
                  <span className="secondary-color sm-font">
                    Satisfied Clients
                  </span>
                </div>
              </div>
              <div className="faq__line sway__animation">
                <Image src={Ten} alt="Image" priority />
              </div>
              <Image src={Eleven} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
