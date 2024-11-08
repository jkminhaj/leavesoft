"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/testimonial/testimonial-two-image1.png";
import Two from "@/public/images/testimonial/testimonial-two-image2.png";
import Three from "@/public/images/testimonial/testimonial-two-image3.png";

const TestimonialDark = () => {
  return (
    <section className="testimonial-two-area pb-120">
      <div className="container">
        <div className="section-header text-center mb-40">
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
              <mask id="path-2-inside-1_869_295" fill="white">
                <path d="M3 6C3 3.79086 4.79086 2 7 2H13C15.2091 2 17 3.79086 17 6C17 8.20914 15.2091 10 13 10H7C4.79086 10 3 8.20914 3 6Z" />
              </mask>
              <path
                d="M3 6C3 2.96243 5.46243 0.5 8.5 0.5H11.5C14.5376 0.5 17 2.96243 17 6C17 4.61929 15.2091 3.5 13 3.5H7C4.79086 3.5 3 4.61929 3 6ZM17 6C17 9.03757 14.5376 11.5 11.5 11.5H8.5C5.46243 11.5 3 9.03757 3 6C3 7.38071 4.79086 8.5 7 8.5H13C15.2091 8.5 17 7.38071 17 6ZM3 10V2V10ZM17 2V10V2Z"
                fill="#3C72FC"
                mask="url(#path-2-inside-1_869_295)"
              />
            </svg>
            Testimonials
          </h5>
          <h2
            className="text-white"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            What Our Client&apos;s Say About Us
          </h2>
        </div>
        <div className="swiper testimonial-two__slider">
          <Swiper
            slidesPerView={1}
            freeMode={true}
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
              el: ".testimonial__dot",
              clickable: true,
            }}
            breakpoints={{
              992: {
                slidesPerView: 2,
              },
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <div>
                <div className="testimonial-two__item dark-mode">
                  <div className="star mb-10">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star disable"></i>
                  </div>
                  <p className="mb-30">
                    “ Consectetur adipiscing elit. Integer nunc viverra laoreet
                    est the is porta pretium metus aliquam eget maecenas porta
                    is nunc nul viverra Aenean pulvinar maximus leo ”
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <Image src={One} alt="Image" priority />
                    <div className="con">
                      <h4>Alex Rony</h4>
                      <span>Engineering</span>
                    </div>
                  </div>
                  <svg
                    className="coma"
                    width="50"
                    height="37"
                    viewBox="0 0 50 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                      fill="#3C72FC"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="testimonial-two__item dark-mode">
                  <div className="star mb-10">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star disable"></i>
                  </div>
                  <p className="mb-30">
                    “ Consectetur adipiscing elit. Integer nunc viverra laoreet
                    est the is porta pretium metus aliquam eget maecenas porta
                    is nunc nul viverra Aenean pulvinar maximus leo ”
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <Image src={Two} alt="Image" priority />
                    <div className="con">
                      <h4>Suborna Tarchera</h4>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                  <svg
                    className="coma"
                    width="50"
                    height="37"
                    viewBox="0 0 50 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                      fill="#3C72FC"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="testimonial-two__item dark-mode">
                  <div className="star mb-10">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star disable"></i>
                  </div>
                  <p className="mb-30">
                    “ Consectetur adipiscing elit. Integer nunc viverra laoreet
                    est the is porta pretium metus aliquam eget maecenas porta
                    is nunc nul viverra Aenean pulvinar maximus leo ”
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <Image src={Three} alt="Image" priority />
                    <div className="con">
                      <h4>Kawser Ahmed</h4>
                      <span>Web Designer</span>
                    </div>
                  </div>
                  <svg
                    className="coma"
                    width="50"
                    height="37"
                    viewBox="0 0 50 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                      fill="#3C72FC"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="testimonial-two__item dark-mode">
                  <div className="star mb-10">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star disable"></i>
                  </div>
                  <p className="mb-30">
                    “ Consectetur adipiscing elit. Integer nunc viverra laoreet
                    est the is porta pretium metus aliquam eget maecenas porta
                    is nunc nul viverra Aenean pulvinar maximus leo ”
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <Image src={One} alt="Image" priority />
                    <div className="con">
                      <h4>Alex Rony</h4>
                      <span>Engineering</span>
                    </div>
                  </div>
                  <svg
                    className="coma"
                    width="50"
                    height="37"
                    viewBox="0 0 50 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                      fill="#3C72FC"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="testimonial-two__item dark-mode">
                  <div className="star mb-10">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star disable"></i>
                  </div>
                  <p className="mb-30">
                    “ Consectetur adipiscing elit. Integer nunc viverra laoreet
                    est the is porta pretium metus aliquam eget maecenas porta
                    is nunc nul viverra Aenean pulvinar maximus leo ”
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <Image src={Two} alt="Image" priority />
                    <div className="con">
                      <h4>Suborna Tarchera</h4>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                  <svg
                    className="coma"
                    width="50"
                    height="37"
                    viewBox="0 0 50 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                      fill="#3C72FC"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="testimonial-two__item dark-mode">
                  <div className="star mb-10">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star disable"></i>
                  </div>
                  <p className="mb-30">
                    “ Consectetur adipiscing elit. Integer nunc viverra laoreet
                    est the is porta pretium metus aliquam eget maecenas porta
                    is nunc nul viverra Aenean pulvinar maximus leo ”
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <Image src={Three} alt="Image" priority />
                    <div className="con">
                      <h4>Kawser Ahmed</h4>
                      <span>Web Designer</span>
                    </div>
                  </div>
                  <svg
                    className="coma"
                    width="50"
                    height="37"
                    viewBox="0 0 50 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                      fill="#3C72FC"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-center mt-40">
          <div className="dot testimonial__dot"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialDark;
