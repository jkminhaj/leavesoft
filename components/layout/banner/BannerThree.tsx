"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import One from "@/public/images/bg/banner-three-bg.png";
import Two from "@/public/images/banner/banner-three-left-shape.png";
import Three from "@/public/images/banner/banner-three-right-shape.png";
import Four from "@/public/images/banner/banner-three-image.png";

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="banner-three-area">
        <div className="banner-three__bg">
          <Image className="sway_Y__animation" src={One} alt="bg-image" />
        </div>
        <div
          className="banner-three__shape-left "
          data-aos="fade-left"
          data-aos-delay="0"
          data-aos-duration="1500"
        >
          <Image
            className="sway_Y__animationY"
            src={Two}
            alt="Image"
            priority
          />
        </div>
        <div
          className="banner-three__shape-right "
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <Image
            className="sway__animationX"
            src={Three}
            alt="Image"
            priority
          />
        </div>
        <div className="banner-three__container">
          <div className="row align-items-center">
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="banner-three__content pt-0 pb-0">
                <h4
                  data-aos="fade-up"
                  className=" text-white mb-20"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                >
                  TECHNOLOGY RELETED CONSULTANCY
                </h4>
                <h1
                  data-aos="fade-up"
                  className=" text-white"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Make The Easiest Solution For You
                </h1>
                <p
                  data-aos="fade-up"
                  className=" mt-20"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  Consectetur adipiscing elit Aenean scelerisque at augue vitae
                  consequat <br /> quisque eget congue velit in cursus leo Sed
                  sodales
                </p>
                <div
                  className="banner-three__info  mt-50"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1500"
                >
                  <Link
                    className="btn-one mt-0"
                    data-aos="fade-up"
                    data-delay="1s"
                    href="about"
                  >
                    Explore More{" "}
                    <i className="fa-regular fa-arrow-right-long"></i>
                  </Link>
                  <div className="banner-three__video-btn d-flex gap-4 align-items-center">
                    <div className="video-btn video-pulse">
                      <a className="video-popup" onClick={() => setOpen(true)}>
                        <i className="fa-solid fa-play"></i>
                      </a>
                    </div>
                    <h5 className="text-white">How It Works</h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 order-1 order-lg-2 "
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="image">
                <Image src={Four} alt="Image" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default BannerThree;
