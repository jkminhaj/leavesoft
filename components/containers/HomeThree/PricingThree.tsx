import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/pricing-shape-up.png";
import Two from "@/public/images/shape/pricing-shape-down.png";
import Three from "@/public/images/shape/pricing-shape.png";
import Four from "@/public/images/icon/section-title.png";
import Five from "@/public/images/shape/pricing-item-shape.png";
import Six from "@/public/images/icon/pricing-icon1.png";
import Seven from "@/public/images/icon/pricing-icon2.png";
import Eight from "@/public/images/icon/pricing-icon3.png";

const PricingThree = () => {
  return (
    <section className="pricing-area pt-120 pb-120" id="pricing-three">
      <div
        className="pricing__shape-up d-none d-sm-block"
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animationY" src={One} alt="Image" priority />
      </div>
      <div
        className="pricing__shape-down d-none d-sm-block"
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Two} alt="Image" priority />
      </div>
      <div className="pricing__shape">
        <Image
          className="sway_Y__animationY"
          src={Three}
          alt="Image"
          priority
        />
      </div>
      <div className="container">
        <div className="section-header text-center mb-60">
          <h5
            className=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Image className="me-1" src={Four} alt="icon" priority />
            PRICE PLANS
          </h5>
          <h2
            className=""
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Flexible Pricing Plans
          </h2>
        </div>
        <div className="row g-4">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <div className="pricing__item">
              <div className="item-shape">
                <Image src={Five} alt="shape" priority />
              </div>
              <div className="pricing-head">
                <div>
                  <h4 className="text-white mb-10">Basic Plan</h4>
                  <h2>
                    $39<span>/monthly</span>
                  </h2>
                </div>
                <div
                  className="pricing-icon"
                  style={{
                    backgroundImage: "url(/images/shape/pricing-icon-bg.png)",
                  }}
                >
                  <Image src={Six} alt="icon" priority />
                </div>
              </div>
              <ul>
                <li>Free 1 5 GB Linux Hosting</li>
                <li>Dedicated Tech Experts</li>
                <li>24/7 System Monitoring</li>
                <li>Security Management</li>
                <li>Unlimited Download</li>
              </ul>
              <Link href="/" className="btn-one d-block text-center">
                choose Plan <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="pricing__item">
              <div className="item-shape">
                <Image src={Five} alt="shape" priority />
              </div>
              <div className="pricing-head">
                <div>
                  <h4 className="text-white mb-10">Standard Plan</h4>
                  <h2>
                    $59<span>/monthly</span>
                  </h2>
                </div>
                <div
                  className="pricing-icon"
                  style={{
                    backgroundImage: "url(/images/shape/pricing-icon-bg.png)",
                  }}
                >
                  <Image src={Seven} alt="icon" priority />
                </div>
              </div>
              <ul>
                <li>Free 1 5 GB Linux Hosting</li>
                <li>Dedicated Tech Experts</li>
                <li>24/7 System Monitoring</li>
                <li>Security Management</li>
                <li>Unlimited Download</li>
              </ul>
              <Link href="/" className="btn-one d-block text-center">
                choose Plan <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="pricing__item">
              <div className="item-shape">
                <Image src={Five} alt="shape" priority />
              </div>
              <div className="pricing-head">
                <div>
                  <h4 className="text-white mb-10">Premium Plan</h4>
                  <h2>
                    $79<span>/monthly</span>
                  </h2>
                </div>
                <div
                  className="pricing-icon"
                  style={{
                    backgroundImage: "url(/images/shape/pricing-icon-bg.png)",
                  }}
                >
                  <Image src={Eight} alt="icon" priority />
                </div>
              </div>
              <ul>
                <li>Free 1 5 GB Linux Hosting</li>
                <li>Dedicated Tech Experts</li>
                <li>24/7 System Monitoring</li>
                <li>Security Management</li>
                <li>Unlimited Download</li>
              </ul>
              <Link href="/" className="btn-one d-block text-center">
                choose Plan <i className="fa-regular fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingThree;
