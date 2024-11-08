"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/bg/case-two-bg.png";
import Two from "@/public/images/case/case-two-image1.jpg";
import Three from "@/public/images/case/case-two-image2.jpg";
import Four from "@/public/images/case/case-two-image3.jpg";
import Five from "@/public/images/case/case-two-image4.jpg";

const CaseTwo = () => {
  return (
    <section className="case-two-area secondary-bg pt-120">
      <div className="case-two__bg">
        <Image src={One} alt="Image" priority />
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
                  y="0.747803"
                  width="18.5"
                  height="10.5"
                  rx="5.25"
                  stroke="#3C72FC"
                  strokeWidth="1.5"
                />
                <mask id="path-2-inside-1_1120_297" fill="white">
                  <path d="M3 5.9978C3 3.78866 4.79086 1.9978 7 1.9978H13C15.2091 1.9978 17 3.78866 17 5.9978C17 8.20694 15.2091 9.9978 13 9.9978H7C4.79086 9.9978 3 8.20694 3 5.9978Z" />
                </mask>
                <path
                  d="M3 5.9978C3 2.96024 5.46243 0.497803 8.5 0.497803H11.5C14.5376 0.497803 17 2.96024 17 5.9978C17 4.61709 15.2091 3.4978 13 3.4978H7C4.79086 3.4978 3 4.61709 3 5.9978ZM17 5.9978C17 9.03537 14.5376 11.4978 11.5 11.4978H8.5C5.46243 11.4978 3 9.03537 3 5.9978C3 7.37851 4.79086 8.4978 7 8.4978H13C15.2091 8.4978 17 7.37851 17 5.9978ZM3 9.9978V1.9978V9.9978ZM17 1.9978V9.9978V1.9978Z"
                  fill="#3C72FC"
                  mask="url(#path-2-inside-1_1120_297)"
                />
              </svg>
              FROM OUR CASE studies
            </h5>
            <h2
              className="text-white "
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              We Delivered Best Solution
            </h2>
          </div>
          <div
            className="arry-btn  d-flex gap-3 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <button className="arry-prev case__arry-prev">
              <i className="fa-light fa-chevron-left"></i>
            </button>
            <button className="arry-next case__arry-next active">
              <i className="fa-light fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="case-two__container">
        <div className="swiper case-two__slider">
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            freeMode={true}
            spaceBetween={24}
            speed={500}
            loop={true}
            roundLengths={true}
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="swiper-wrapper"
            navigation={{
              nextEl: ".case__arry-next",
              prevEl: ".case__arry-prev",
            }}
            breakpoints={{
              1440: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              575: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="case-two__item">
                  <div className="image case-two__image">
                    <Image src={Two} alt="Image" priority />
                  </div>
                  <div className="case-two__content">
                    <span>Solution</span>
                    <h4>
                      <Link href="case-details" className="text-white">
                        IT Management
                      </Link>
                    </h4>
                  </div>
                  <Link href="case-details" className="case-two__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="case-two__item">
                  <div className="image case-two__image">
                    <Image src={Three} alt="Image" priority />
                  </div>
                  <div className="case-two__content">
                    <span>Technology</span>
                    <h4>
                      <Link href="case-details" className="text-white">
                        Web Development
                      </Link>
                    </h4>
                  </div>
                  <Link href="case-details" className="case-two__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="case-two__item">
                  <div className="image case-two__image">
                    <Image src={Four} alt="Image" priority />
                  </div>
                  <div className="case-two__content">
                    <span>Security</span>
                    <h4>
                      <Link href="case-details" className="text-white">
                        Network Security
                      </Link>
                    </h4>
                  </div>
                  <Link href="case-details" className="case-two__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="case-two__item">
                  <div className="image case-two__image">
                    <Image src={Five} alt="Image" priority />
                  </div>
                  <div className="case-two__content">
                    <span>Technology</span>
                    <h4>
                      <Link href="case-details" className="text-white">
                        Platform Integration
                      </Link>
                    </h4>
                  </div>
                  <Link href="case-details" className="case-two__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="case-two__item">
                  <div className="image case-two__image">
                    <Image src={Two} alt="Image" priority />
                  </div>
                  <div className="case-two__content">
                    <span>Solution</span>
                    <h4>
                      <Link href="case-details" className="text-white">
                        IT Management
                      </Link>
                    </h4>
                  </div>
                  <Link href="case-details" className="case-two__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="case-two__item">
                  <div className="image case-two__image">
                    <Image src={Three} alt="Image" priority />
                  </div>
                  <div className="case-two__content">
                    <span>Technology</span>
                    <h4>
                      <Link href="case-details" className="text-white">
                        Web Development
                      </Link>
                    </h4>
                  </div>
                  <Link href="case-details" className="case-two__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="case-two__item">
                  <div className="image case-two__image">
                    <Image src={Four} alt="Image" priority />
                  </div>
                  <div className="case-two__content">
                    <span>Security</span>
                    <h4>
                      <Link href="case-details" className="text-white">
                        Network Security
                      </Link>
                    </h4>
                  </div>
                  <Link href="case-details" className="case-two__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div className="case-two__item">
                  <div className="image case-two__image">
                    <Image src={Five} alt="Image" priority />
                  </div>
                  <div className="case-two__content">
                    <span>Technology</span>
                    <h4>
                      <Link href="case-details" className="text-white">
                        Platform Integration
                      </Link>
                    </h4>
                  </div>
                  <Link href="case-details" className="case-two__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseTwo;
