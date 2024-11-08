"use client";
import { useState } from "react";
import Image from "next/image";
import One from "@/public/images/shape/faq-shape.png";
import Two from "@/public/images/shape/faq-line.png";
import Three from "@/public/images/faq/faq-image.png";

const Faq = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="faq-area sub-bg pt-120 pb-120" id="faq-two">
      <div className="faq__shape">
        <Image className="sway__animationX" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5 pe-2 pe-lg-5">
            <div
              className="faq__image image "
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="faq__line sway__animation">
                <Image src={Two} alt="Image" priority />
              </div>
              <Image src={Three} alt="Image" priority />
            </div>
          </div>
          <div className="col-lg-7 mt-60">
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
                    y="0.747803"
                    width="18.5"
                    height="10.5"
                    rx="5.25"
                    stroke="#3C72FC"
                    strokeWidth="1.5"
                  />
                  <mask id="path-2-inside-1_1120_294" fill="white">
                    <path d="M3 5.9978C3 3.78866 4.79086 1.9978 7 1.9978H13C15.2091 1.9978 17 3.78866 17 5.9978C17 8.20694 15.2091 9.9978 13 9.9978H7C4.79086 9.9978 3 8.20694 3 5.9978Z" />
                  </mask>
                  <path
                    d="M3 5.9978C3 2.96024 5.46243 0.497803 8.5 0.497803H11.5C14.5376 0.497803 17 2.96024 17 5.9978C17 4.61709 15.2091 3.4978 13 3.4978H7C4.79086 3.4978 3 4.61709 3 5.9978ZM17 5.9978C17 9.03537 14.5376 11.4978 11.5 11.4978H8.5C5.46243 11.4978 3 9.03537 3 5.9978C3 7.37851 4.79086 8.4978 7 8.4978H13C15.2091 8.4978 17 7.37851 17 5.9978ZM3 9.9978V1.9978V9.9978ZM17 1.9978V9.9978V1.9978Z"
                    fill="#3C72FC"
                    mask="url(#path-2-inside-1_1120_294)"
                  />
                </svg>
                FAQ
              </h5>
              <h2
                className=""
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Most Common Question?
              </h2>
            </div>
            <div className="faq__item">
              <div className="accordion" id="accordionExample">
                <div
                  className="accordion-item shadow border-none"
                  data-aos="fade-down"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      className={
                        (imgTab == 0 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                    >
                      Where should I incorporate my business?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse${
                      imgTab === 0 ? " show " : ""
                    }`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        It is a long established fact that a reader be
                        distracted by the readable content of a page when
                        looking a its layout. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum publishing
                        packages and web page editors now use Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item shadow border-none"
                  data-aos="fade-down"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={
                        (imgTab == 1 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What happens my free trial?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse${
                      imgTab === 1 ? " show " : ""
                    }`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        It is a long established fact that a reader be
                        distracted by the readable content of a page when
                        looking a its layout. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum publishing
                        packages and web page editors now use Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item shadow border-none"
                  data-aos="fade-down"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  <h2 className="accordion-header" id="headingthree">
                    <button
                      className={
                        (imgTab == 2 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsethree"
                      aria-expanded="false"
                      aria-controls="collapsethree"
                    >
                      What is included in your services?
                    </button>
                  </h2>
                  <div
                    id="collapsethree"
                    className={`accordion-collapse collapse${
                      imgTab === 2 ? " show " : ""
                    }`}
                    aria-labelledby="headingthree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        It is a long established fact that a reader be
                        distracted by the readable content of a page when
                        looking a its layout. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum publishing
                        packages and web page editors now use Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item shadow border-none"
                  data-aos="fade-down"
                  data-aos-delay="600"
                  data-aos-duration="1500"
                >
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className={
                        (imgTab == 3 ? "  " : " collapsed") +
                        " accordion-button"
                      }
                      onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      What type of company is measured?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className={`accordion-collapse collapse${
                      imgTab === 3 ? " show " : ""
                    }`}
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        It is a long established fact that a reader be
                        distracted by the readable content of a page when
                        looking a its layout. Many desktop publishing packages
                        and web page editors now use Lorem Ipsum publishing
                        packages and web page editors now use Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
