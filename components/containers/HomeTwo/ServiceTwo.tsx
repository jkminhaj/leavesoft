"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/shape/service-two-shape-left.png";
import Two from "@/public/images/shape/service-two-shape-right.png";
import Three from "@/public/images/service/service-image1.jpg";
import Four from "@/public/images/icon/service-two-icon1.png";
import Five from "@/public/images/shape/service-two-item-shape.png";
import Six from "@/public/images/service/service-image2.jpg";
import Seven from "@/public/images/icon/service-two-icon2.png";
import Eight from "@/public/images/service/service-image3.jpg";
import Nine from "@/public/images/icon/service-two-icon3.png";

const ServiceTwo = () => {
  return (
    <section
      className="service-two-area secondary-bg pt-120 pb-120"
      id="service-two"
    >
      <div className="service-two__shape-left sway_Y__animationY">
        <Image src={One} alt="shape" priority />
      </div>
      <div className="service-two__shape-right sway_Y__animation">
        <Image src={Two} alt="shape" priority />
      </div>
      <div className="container">
        <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              data-aos="fade-left"
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
                  y="0.750061"
                  width="18.5"
                  height="10.5"
                  rx="5.25"
                  stroke="#3C72FC"
                  strokeWidth="1.5"
                />
                <mask id="path-2-inside-1_670_477" fill="white">
                  <path d="M3 6.00006C3 3.79092 4.79086 2.00006 7 2.00006H13C15.2091 2.00006 17 3.79092 17 6.00006C17 8.2092 15.2091 10.0001 13 10.0001H7C4.79086 10.0001 3 8.2092 3 6.00006Z" />
                </mask>
                <path
                  d="M3 6.00006C3 2.96249 5.46243 0.500061 8.5 0.500061H11.5C14.5376 0.500061 17 2.96249 17 6.00006C17 4.61935 15.2091 3.50006 13 3.50006H7C4.79086 3.50006 3 4.61935 3 6.00006ZM17 6.00006C17 9.03763 14.5376 11.5001 11.5 11.5001H8.5C5.46243 11.5001 3 9.03763 3 6.00006C3 7.38077 4.79086 8.50006 7 8.50006H13C15.2091 8.50006 17 7.38077 17 6.00006ZM3 10.0001V2.00006V10.0001ZM17 2.00006V10.0001V2.00006Z"
                  fill="#3C72FC"
                  mask="url(#path-2-inside-1_670_477)"
                />
              </svg>
              SERVICES WE&apos;RE OFFERING
            </h5>
            <h2
              className="text-white "
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Exclusive IT Services
            </h2>
          </div>
          <div
            className="arry-btn  d-flex gap-3 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <button className="arry-prev service__arry-prev">
              <i className="fa-light fa-chevron-left"></i>
            </button>
            <button className="arry-next service__arry-next active">
              <i className="fa-light fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="swiper service-two__slider">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            freeMode={true}
            spaceBetween={30}
            speed={500}
            loop={true}
            roundLengths={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            className="swiper-wrapper"
            navigation={{
              nextEl: ".service__arry-next",
              prevEl: ".service__arry-prev",
            }}
            breakpoints={{
              992: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-two__item">
                  <div className="image">
                    <Image src={Three} alt="Image" priority />
                  </div>
                  <div className="service-two__content">
                    <div className="icon">
                      <Image src={Four} alt="icon" priority />
                    </div>
                    <div className="shape">
                      <Image src={Five} alt="shape" priority />
                    </div>
                    <h4>
                      <Link href="service-details" className="primary-hover">
                        Database Security
                      </Link>
                    </h4>
                    <p>
                      Pellentesque nec the condimentum nec lorem nulla augue est
                      ultricies ac iaculis.
                    </p>
                    <Link className="read-more-btn" href="service-details">
                      Read More{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-two__item">
                  <div className="image">
                    <Image src={Six} alt="Image" priority />
                  </div>
                  <div className="service-two__content">
                    <div className="icon">
                      <Image src={Seven} alt="icon" priority />
                    </div>
                    <div className="shape">
                      <Image src={Five} alt="shape" priority />
                    </div>
                    <h4>
                      <Link href="service-details" className="primary-hover">
                        IT Consultancy
                      </Link>
                    </h4>
                    <p>
                      Pellentesque nec the condimentum nec lorem nulla augue est
                      ultricies ac iaculis.
                    </p>
                    <Link className="read-more-btn" href="service-details">
                      Read More{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-two__item">
                  <div className="image">
                    <Image src={Eight} alt="Image" priority />
                  </div>
                  <div className="service-two__content">
                    <div className="icon">
                      <Image src={Nine} alt="icon" priority />
                    </div>
                    <div className="shape">
                      <Image src={Five} alt="shape" priority />
                    </div>
                    <h4>
                      <Link href="service-details" className="primary-hover">
                        App Development
                      </Link>
                    </h4>
                    <p>
                      Pellentesque nec the condimentum nec lorem nulla augue est
                      ultricies ac iaculis.
                    </p>
                    <Link className="read-more-btn" href="service-details">
                      Read More{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-two__item">
                  <div className="image">
                    <Image src={Three} alt="Image" priority />
                  </div>
                  <div className="service-two__content">
                    <div className="icon">
                      <Image src={Four} alt="icon" priority />
                    </div>
                    <div className="shape">
                      <Image src={Five} alt="shape" priority />
                    </div>
                    <h4>
                      <Link href="service-details" className="primary-hover">
                        Database Security
                      </Link>
                    </h4>
                    <p>
                      Pellentesque nec the condimentum nec lorem nulla augue est
                      ultricies ac iaculis.
                    </p>
                    <Link className="read-more-btn" href="service-details">
                      Read More{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-two__item">
                  <div className="image">
                    <Image src={Six} alt="Image" priority />
                  </div>
                  <div className="service-two__content">
                    <div className="icon">
                      <Image src={Seven} alt="icon" priority />
                    </div>
                    <div className="shape">
                      <Image src={Five} alt="shape" priority />
                    </div>
                    <h4>
                      <Link href="service-details" className="primary-hover">
                        IT Consultancy
                      </Link>
                    </h4>
                    <p>
                      Pellentesque nec the condimentum nec lorem nulla augue est
                      ultricies ac iaculis.
                    </p>
                    <Link className="read-more-btn" href="service-details">
                      Read More{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="service-two__item">
                  <div className="image">
                    <Image src={Eight} alt="Image" priority />
                  </div>
                  <div className="service-two__content">
                    <div className="icon">
                      <Image src={Nine} alt="icon" priority />
                    </div>
                    <div className="shape">
                      <Image src={Five} alt="shape" priority />
                    </div>
                    <h4>
                      <Link href="service-details" className="primary-hover">
                        App Development
                      </Link>
                    </h4>
                    <p>
                      Pellentesque nec the condimentum nec lorem nulla augue est
                      ultricies ac iaculis.
                    </p>
                    <Link className="read-more-btn" href="service-details">
                      Read More{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceTwo;
