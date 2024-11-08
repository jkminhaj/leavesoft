"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/icon/section-title.png";
import Two from "@/public/images/testimonial/testimonial-three-image1.png";
import Three from "@/public/images/testimonial/testimonial-three-image2.png";
import Four from "@/public/images/testimonial/testimonial-three-image3.png";

const TestimonialThree = () => {
  return (
    <section
      className="testimonial-three-area pt-120 pb-120 bg-image sub-bg"
      id="testimonial-three"
      style={{
        backgroundImage: "url(/images/bg/testimonial-three-bg.png)",
      }}
    >
      <div className="testimonial-three__wrp">
        <div className="row g-4">
          <div className="col-md-6 col-lg-5 col-xl-3">
            <div className="section-header mb-40">
              <h5
                className=""
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <Image className="me-1" src={One} alt="icon" priority />
                Testimonials
              </h5>
              <h2
                className=""
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Hundreds of clients worldwide trust our IT solution
              </h2>
            </div>
            <div
              className="testimonial-three__arry-btn d-flex gap-3 "
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <button className="arry-prev testimonial-three__arry-prev">
                <i className="fa-light fa-chevron-left"></i>
              </button>
              <button className="arry-next testimonial-three__arry-next active">
                <i className="fa-light fa-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 col-xl-9">
            <div className="swiper testimonial-three__slider">
              <Swiper
                slidesPerView={1}
                freeMode={true}
                spaceBetween={24}
                speed={300}
                loop={true}
                roundLengths={true}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  1200: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                }}
                navigation={{
                  nextEl: ".testimonial-three__arry-next",
                  prevEl: ".testimonial-three__arry-prev",
                }}
                className="swiper-wrapper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-three__item">
                      <div className="d-flex align-items-center gap-3">
                        <div className="testimonial-three__image">
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0V18L9 9V0H0ZM15 0V18L24 9V0H15Z"
                              fill="#3C72FC"
                            />
                          </svg>
                          <Image src={Two} alt="Image" priority />
                        </div>
                        <div className="con">
                          <h4>Alex Pranto</h4>
                          <span>Ethical Hacker</span>
                        </div>
                      </div>
                      <p className="mt-30">
                        “ Consectetur elit nteger maecenas porta is nunc nul
                        viverra Aenean pulvinar maximus leo nunc viverra laoreet
                        est the is porta adipiscing pretium ”
                      </p>
                      <div className="star mt-20">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star disable"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-three__item">
                      <div className="d-flex align-items-center gap-3">
                        <div className="testimonial-three__image">
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0V18L9 9V0H0ZM15 0V18L24 9V0H15Z"
                              fill="#3C72FC"
                            />
                          </svg>
                          <Image src={Three} alt="Image" priority />
                        </div>
                        <div className="con">
                          <h4>Adity Roy</h4>
                          <span>Web Designer</span>
                        </div>
                      </div>
                      <p className="mt-30">
                        “ Consectetur elit nteger maecenas porta is nunc nul
                        viverra Aenean pulvinar maximus leo nunc viverra laoreet
                        est the is porta adipiscing pretium ”
                      </p>
                      <div className="star mt-20">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star disable"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-three__item">
                      <div className="d-flex align-items-center gap-3">
                        <div className="testimonial-three__image">
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0V18L9 9V0H0ZM15 0V18L24 9V0H15Z"
                              fill="#3C72FC"
                            />
                          </svg>
                          <Image src={Four} alt="Image" priority />
                        </div>
                        <div className="con">
                          <h4>Mohmamd Arif</h4>
                          <span>Software Tester</span>
                        </div>
                      </div>
                      <p className="mt-30">
                        “ Consectetur elit nteger maecenas porta is nunc nul
                        viverra Aenean pulvinar maximus leo nunc viverra laoreet
                        est the is porta adipiscing pretium ”
                      </p>
                      <div className="star mt-20">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star disable"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-three__item">
                      <div className="d-flex align-items-center gap-3">
                        <div className="testimonial-three__image">
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0V18L9 9V0H0ZM15 0V18L24 9V0H15Z"
                              fill="#3C72FC"
                            />
                          </svg>
                          <Image src={Two} alt="Image" priority />
                        </div>
                        <div className="con">
                          <h4>Alex Pranto</h4>
                          <span>Ethical Hacker</span>
                        </div>
                      </div>
                      <p className="mt-30">
                        “ Consectetur elit nteger maecenas porta is nunc nul
                        viverra Aenean pulvinar maximus leo nunc viverra laoreet
                        est the is porta adipiscing pretium ”
                      </p>
                      <div className="star mt-20">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star disable"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-three__item">
                      <div className="d-flex align-items-center gap-3">
                        <div className="testimonial-three__image">
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0V18L9 9V0H0ZM15 0V18L24 9V0H15Z"
                              fill="#3C72FC"
                            />
                          </svg>
                          <Image src={Three} alt="Image" priority />
                        </div>
                        <div className="con">
                          <h4>Adity Roy</h4>
                          <span>Web Designer</span>
                        </div>
                      </div>
                      <p className="mt-30">
                        “ Consectetur elit nteger maecenas porta is nunc nul
                        viverra Aenean pulvinar maximus leo nunc viverra laoreet
                        est the is porta adipiscing pretium ”
                      </p>
                      <div className="star mt-20">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star disable"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-three__item">
                      <div className="d-flex align-items-center gap-3">
                        <div className="testimonial-three__image">
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0V18L9 9V0H0ZM15 0V18L24 9V0H15Z"
                              fill="#3C72FC"
                            />
                          </svg>
                          <Image src={Four} alt="Image" priority />
                        </div>
                        <div className="con">
                          <h4>Mohmamd Arif</h4>
                          <span>Software Tester</span>
                        </div>
                      </div>
                      <p className="mt-30">
                        “ Consectetur elit nteger maecenas porta is nunc nul
                        viverra Aenean pulvinar maximus leo nunc viverra laoreet
                        est the is porta adipiscing pretium ”
                      </p>
                      <div className="star mt-20">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star disable"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialThree;
