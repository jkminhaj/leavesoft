"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/shape/service-two-shape-left.png";
import Two from "@/public/images/shape/service-two-shape-right.png";
import Three from "@/public/images/icon/section-title.png";
import Four from "@/public/images/case/case-image1.jpg";
import Five from "@/public/images/case/case-image2.jpg";
import Six from "@/public/images/case/case-image3.jpg";
import Seven from "@/public/images/case/case-image4.jpg";

const CaseThree = () => {
  return (
    <section className="project-three-area secondary-bg" id="case-three">
      <div className="service-two__shape-left sway_Y__animationY">
        <Image src={One} alt="shape" priority />
      </div>
      <div className="service-two__shape-right sway_Y__animation">
        <Image src={Two} alt="shape" priority />
      </div>
      <div className="case-two__container">
        <div className="section-header text-center mb-60">
          <h5
            className=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Image className="me-1" src={Three} alt="icon" priority />
            FROM OUR CASE studies
          </h5>
          <h2
            className="text-white "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Latest Project Are Here
          </h2>
        </div>
        <div className="swiper case__slider ms-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            speed={800}
            loop={true}
            roundLengths={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".case__dot",
              clickable: true,
            }}
            breakpoints={{
              1440: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 2,
              },
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <div>
                <div className="project-three__item">
                  <div className="image case__image">
                    <Image src={Four} alt="Image" priority />
                  </div>
                  <div className="case__content">
                    <span className="primary-color sm-font">Solution</span>
                    <h3>
                      <Link
                        href="case-details"
                        className="text-white primary-hover"
                      >
                        IT Management
                      </Link>
                    </h3>
                  </div>
                  <Link href="case-details" className="case__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="project-three__item">
                  <div className="image case__image">
                    <Image src={Five} alt="Image" priority />
                  </div>
                  <div className="case__content">
                    <span className="primary-color sm-font">Technology</span>
                    <h3>
                      <Link
                        href="case-details"
                        className="text-white primary-hover"
                      >
                        Platform Integration
                      </Link>
                    </h3>
                  </div>
                  <Link href="case-details" className="case__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="project-three__item">
                  <div className="image case__image">
                    <Image src={Six} alt="Image" priority />
                  </div>
                  <div className="case__content">
                    <span className="primary-color sm-font">Solution</span>
                    <h3>
                      <Link
                        href="case-details"
                        className="text-white primary-hover"
                      >
                        Web Development
                      </Link>
                    </h3>
                  </div>
                  <Link href="case-details" className="case__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="project-three__item">
                  <div className="image case__image">
                    <Image src={Seven} alt="Image" priority />
                  </div>
                  <div className="case__content">
                    <span className="primary-color sm-font">Security</span>
                    <h3>
                      <Link
                        href="case-details"
                        className="text-white primary-hover"
                      >
                        Network Security
                      </Link>
                    </h3>
                  </div>
                  <Link href="case-details" className="case__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="project-three__item">
                  <div className="image case__image">
                    <Image src={Four} alt="Image" priority />
                  </div>
                  <div className="case__content">
                    <span className="primary-color sm-font">Solution</span>
                    <h3>
                      <Link
                        href="case-details"
                        className="text-white primary-hover"
                      >
                        IT Management
                      </Link>
                    </h3>
                  </div>
                  <Link href="case-details" className="case__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="project-three__item">
                  <div className="image case__image">
                    <Image src={Five} alt="Image" priority />
                  </div>
                  <div className="case__content">
                    <span className="primary-color sm-font">Technology</span>
                    <h3>
                      <Link
                        href="case-details"
                        className="text-white primary-hover"
                      >
                        Platform Integration
                      </Link>
                    </h3>
                  </div>
                  <Link href="case-details" className="case__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="project-three__item">
                  <div className="image case__image">
                    <Image src={Six} alt="Image" priority />
                  </div>
                  <div className="case__content">
                    <span className="primary-color sm-font">Solution</span>
                    <h3>
                      <Link
                        href="case-details"
                        className="text-white primary-hover"
                      >
                        Web Development
                      </Link>
                    </h3>
                  </div>
                  <Link href="case-details" className="case__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="project-three__item">
                  <div className="image case__image">
                    <Image src={Seven} alt="Image" priority />
                  </div>
                  <div className="case__content">
                    <span className="primary-color sm-font">Security</span>
                    <h3>
                      <Link
                        href="case-details"
                        className="text-white primary-hover"
                      >
                        Network Security
                      </Link>
                    </h3>
                  </div>
                  <Link href="case-details" className="case__btn">
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="mt-60 text-center "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <div className="dot case__dot"></div>
        </div>
      </div>
    </section>
  );
};

export default CaseThree;
