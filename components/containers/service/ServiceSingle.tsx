"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import One from "@/public/images/service/service-single-image1.jpg";
import Two from "@/public/images/service/service-single-image2.jpg";

const ServiceSingle = () => {
  const [imgTab, setImgTab] = useState(0);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="service-single-area pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8 order-2 order-lg-1">
              <div className="service-single__left-item">
                <div className="image mb-50">
                  <Image src={One} alt="Image" priority />
                  <div className="service-single__video-btn">
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
                </div>
                <h3 className="title mb-30">IT Management</h3>
                <p className="mb-20">
                  The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                  is eleifend porta arcu In hac habitasse the platea thelorem
                  turpoi dictumst. In lacus libero faucibus malesuada sagittis
                  placerat eros sed istincidunt augue ac ante rutrum sed the is
                  sodales augue consequat.
                </p>
                <p>
                  lacus sed pretium pretium justo. Integer is vitae venenatis
                  lorem. Maecenas lacinia turpis the in nunc quam hendrerit
                  scelerisque at finibus enim sagittis. Aliquam erat is volutpat
                  nam nec purus at is orci volutpat semper vel id turpis In a
                  malesuada arcu ac hendrerit.
                </p>
                <div className="row g-5 mt-40 mb-40 align-items-center">
                  <div className="col-lg-5">
                    <h4 className="mb-20">Benefits With Our Service</h4>
                    <ul>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>Technology
                        Consultancy
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>Maintenance And
                        Support
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>We Provide best
                        services
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>Requirements
                        Gathering
                      </li>
                      <li className="mb-15">
                        <i className="fa-solid fa-check"></i>Business Growth
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-7">
                    <div className="image">
                      <Image src={Two} alt="Image" priority />
                    </div>
                  </div>
                </div>
                <p className="mb-40">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                  made of owl the quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea dolor commodo consequat. Duis aute irure and
                  dolor in reprehenderit.
                </p>
                <h3 className="title mb-30">Most Comment Question?</h3>
                <p className="mb-30">
                  The is ipsum dolor sit amet consectetur adipiscing elit. Fusce
                  is eleifend porta arcu In hac habitasse the platea thelorem
                  turpoi dictumst. In lacus libero faucibus malesuada sagittis
                  placerat eros sed istincidunt augue ac ante rutrum sed the is
                  sodales augue consequat.
                </p>
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
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="service-single__right-item">
                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">All Services</h4>
                  <ul className="category service-category">
                    <li>
                      <Link href="/">Database Security</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/">IT Consultancy</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li className="active">
                      <Link href="/">App Development</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/">UI/UX Design</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                    <li>
                      <Link href="/">App Development</Link>{" "}
                      <i className="fa-regular fa-arrow-right-long primary-color"></i>
                    </li>
                  </ul>
                </div>
                <div className="item sub-bg mb-30">
                  <h4 className="mb-20">Opening Hours</h4>
                  <ul className="category">
                    <li className="secondary-color justify-content-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      Mon - Sat: 10.00 AM - 4.00 PM
                    </li>
                    <li className="secondary-color justify-content-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      Sun: 09.00 AM - 4.00 PM
                    </li>
                    <li className="secondary-color justify-content-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      Friday: Closed
                    </li>
                    <li className="secondary-color justify-content-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                          fill="#3C72FC"
                        />
                        <path
                          d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                          fill="#3C72FC"
                        />
                      </svg>
                      Emergency: 24 hours
                    </li>
                  </ul>
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

export default ServiceSingle;
