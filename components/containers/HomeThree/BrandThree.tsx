"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Line from "@/public/images/shape/brand-three-line1.png";
import One from "@/public/images/shape/brand-three-shape1.png";
import Two from "@/public/images/shape/brand-three-line2.png";
import Three from "@/public/images/shape/brand-three-shape2.png";
import Four from "@/public/images/brand/brand-image4.png";
import Five from "@/public/images/brand/brand-image5.png";
import Six from "@/public/images/brand/brand-image1.png";
import Seven from "@/public/images/brand/brand-image2.png";
import Eight from "@/public/images/brand/brand-image3.png";

const BrandThree = () => {
  return (
    <div
      className="brand-three-area bg-image pt-100 pb-100"
      style={{
        backgroundImage: "url(/images/bg/case-three-bg.jpg)",
      }}
    >
      <div className="brand-three__line1">
        <Image src={Line} alt="shape" priority />
      </div>
      <div className="brand-three__shape1">
        <Image src={One} alt="shape" priority />
      </div>
      <div className="brand-three__line2">
        <Image src={Two} alt="shape" priority />
      </div>
      <div className="brand-three__shape2">
        <Image src={Three} alt="shape" priority />
      </div>
      <div className="container">
        <div className="swiper brand__slider">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            freeMode={true}
            speed={300}
            loop={true}
            roundLengths={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 4,
              },
              576: {
                slidesPerView: 3,
              },
            }}
            className="swiper-wrapper"
          >
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Four} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Five} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Six} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Seven} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Eight} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Four} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Five} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Six} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Seven} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="brand__image image">
                  <Image src={Eight} alt="Image" priority />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BrandThree;
