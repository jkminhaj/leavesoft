"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Three from "@/public/images/shape/service-item-shape.png";
import Four from "@/public/images/icon/service-icon1.png";
import Five from "@/public/images/icon/service-icon2.png";
import Six from "@/public/images/icon/service-icon3.png";

const ServiceAlter = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(1);

  return (
    <section className="service-area pt-120 pb-120" id="service-section">
      <div className="service__shape " data-aos="fade-right">
        <Image className="sway_Y__animation" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 0 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(0)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Four} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">IT Management</Link>
              </h4>
              <p>
                Pellentesque nec the condimentum nec lorem nulla augue est
                ultricies ac iaculis ut euismod quis sapien.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 1 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(1)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Five} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">App Development</Link>
              </h4>
              <p>
                Pellentesque nec the condimentum nec lorem nulla augue est
                ultricies ac iaculis ut euismod quis sapien.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div
              className={
                "service__item " + (isOverviewOpen === 2 ? " active" : " ")
              }
              onMouseEnter={() => setOverviewOpen(2)}
            >
              <div className="service-shape">
                <Image src={Three} alt="shape" priority />
              </div>
              <div className="service__icon">
                <Image src={Six} alt="icon" priority />
              </div>
              <h4>
                <Link href="service-details">Web Development</Link>
              </h4>
              <p>
                Pellentesque nec the condimentum nec lorem nulla augue est
                ultricies ac iaculis ut euismod quis sapien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAlter;
