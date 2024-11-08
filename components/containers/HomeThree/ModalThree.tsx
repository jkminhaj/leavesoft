"use client";
import { useState } from "react";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import One from "@/public/images/video/video-image1.jpg";

const ModalThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="banner-video-area">
        <div className="container">
          <div className="banner-video__wrp image">
            <Image src={One} alt="Image" priority />
            <div className="banner-video__video-btn">
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

export default ModalThree;
