"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/service-bg-shape.png";
import Two from "@/public/images/icon/section-title.png";
import Three from "@/public/images/shape/service-item-shape.png";
import Four from "@/public/images/icon/service-icon1.png";
import Five from "@/public/images/icon/service-icon2.png";
import Six from "@/public/images/icon/service-icon3.png";

const Service = () => {
  const [isOverviewOpen, setOverviewOpen] = useState(1);

  return (
    <section className="service-area pt-120 pb-120" id="service-section">
      <div className="service__shape " data-aos="fade-right">
        <Image className="sway_Y__animation" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              data-aos="fade-left"
              data-aos-delay="0"
              data-aos-duration="1500"
            >
              <Image className="me-1" src={Two} alt="icon" priority />
              What We OFFER
            </h5>
            <h2
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Excellent It Services
            </h2>
          </div>
          <Link
            href="service"
            className="btn-one "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            View All Services <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>
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

export default Service;
