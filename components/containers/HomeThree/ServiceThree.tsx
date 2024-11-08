import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/service-three-shape.png";
import Two from "@/public/images/icon/section-title.png";
import Three from "@/public/images/service/service-three-image.jpg";
import Four from "@/public/images/service/service-three-image2.jpg";
import Five from "@/public/images/service/service-three-image3.jpg";
import Six from "@/public/images/icon/service-three-icon1.png";
import Seven from "@/public/images/icon/service-three-icon2.png";
import Eight from "@/public/images/icon/service-three-icon3.png";
import Nine from "@/public/images/icon/service-three-light-icon1.png";
import Ten from "@/public/images/icon/service-three-light-icon2.png";
import Eleven from "@/public/images/icon/service-three-light-icon3.png";

const ServiceThree = () => {
  return (
    <section className="service-three-area pt-120 pb-120" id="service-three">
      <div className="service-three__shape">
        <Image className="sway__animationX" src={One} alt="shape" priority />
      </div>
      <div className="container">
        <div className="section-header text-center mb-60">
          <h5
            className=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Image className="me-1" src={Two} alt="icon" priority />
            FROM OUR CASE studies
          </h5>
          <h2
            className=""
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            We Delivered Best Solution
          </h2>
        </div>
        <div className="row g-4">
          <div
            className="col-xl-4 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <div className="service-three__item">
              <div className="service-three__image image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="service-three__content">
                <div className="icon">
                  <Image src={Six} alt="icon" priority />
                </div>
                <h4>Database Security</h4>
              </div>
              <div className="service-three__up-content text-center">
                <div className="icon">
                  <Image src={Nine} alt="icon" priority />
                </div>
                <h4>
                  <Link
                    href="service-single"
                    className="text-white mt-25 mb-15"
                  >
                    Database Security
                  </Link>
                </h4>
                <p className="text-white">
                  Pellentesque nec the condimentum nec lorem nulla augue est
                  ultricies ac iaculis.
                </p>
                <Link
                  className="mt-20 read-more-btn text-white"
                  href="service-single"
                >
                  Read More{" "}
                  <i className="fa-regular fa-arrow-right-long text-white"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="service-three__item">
              <div className="service-three__image image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="service-three__content">
                <div className="icon">
                  <Image src={Seven} alt="icon" priority />
                </div>
                <h4>App Development</h4>
              </div>
              <div className="service-three__up-content text-center">
                <div className="icon">
                  <Image src={Ten} alt="icon" priority />
                </div>
                <h4>
                  <Link
                    href="service-single"
                    className="text-white mt-25 mb-15"
                  >
                    App Development
                  </Link>
                </h4>
                <p className="text-white">
                  Pellentesque nec the condimentum nec lorem nulla augue est
                  ultricies ac iaculis.
                </p>
                <Link
                  className="mt-20 read-more-btn text-white"
                  href="service-single"
                >
                  Read More{" "}
                  <i className="fa-regular fa-arrow-right-long text-white"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="service-three__item">
              <div className="service-three__image image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="service-three__content">
                <div className="icon">
                  <Image src={Eight} alt="icon" priority />
                </div>
                <h4>IT Management</h4>
              </div>
              <div className="service-three__up-content text-center">
                <div className="icon">
                  <Image src={Eleven} alt="icon" priority />
                </div>
                <h4>
                  <Link
                    href="service-single"
                    className="text-white mt-25 mb-15"
                  >
                    IT Management
                  </Link>
                </h4>
                <p className="text-white">
                  Pellentesque nec the condimentum nec lorem nulla augue est
                  ultricies ac iaculis.
                </p>
                <Link
                  className="mt-20 read-more-btn text-white"
                  href="service-single"
                >
                  Read More{" "}
                  <i className="fa-regular fa-arrow-right-long text-white"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceThree;
