"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Shape from "@/public/images/shape/brand-shape.png";
import One from "@/public/images/brand/brand-image1.png";
import Two from "@/public/images/brand/brand-image2.png";
import Three from "@/public/images/brand/brand-image3.png";
import Four from "@/public/images/brand/brand-image4.png";
import Five from "@/public/images/brand/brand-image5.png";

const Brand = () => {
  return (
    <div className="brand-area">
      <div className="container">
        <div className="brand__wrp">
          <div className="brand__shape">
            <Image src={Shape} alt="Image" priority />
          </div>
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
                    <Image src={One} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Two} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Three} alt="Image" priority />
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
                    <Image src={One} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Two} alt="Image" priority />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <div className="brand__image image">
                    <Image src={Three} alt="Image" priority />
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
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
