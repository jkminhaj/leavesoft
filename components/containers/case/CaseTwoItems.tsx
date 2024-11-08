import Link from "next/link";
import Image from "next/image";
import Two from "@/public/images/case/case-two-image1.jpg";
import Three from "@/public/images/case/case-two-image2.jpg";
import Four from "@/public/images/case/case-two-image3.jpg";
import Five from "@/public/images/case/case-two-image4.jpg";
import Six from "@/public/images/case/case-image1.jpg";
import Seven from "@/public/images/case/case-image2.jpg";

const CaseTwoItems = () => {
  return (
    <section className="case-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case-two__item">
              <div className="image case-two__image">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="case-two__content">
                <span>Technology</span>
                <h4>
                  <Link href="case-details" className="text-white">
                    Platform Integration
                  </Link>
                </h4>
              </div>
              <Link href="case-details" className="case-two__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case-two__item">
              <div className="image case-two__image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="case-two__content">
                <span>Technology</span>
                <h4>
                  <Link href="case-details" className="text-white">
                    IT Management
                  </Link>
                </h4>
              </div>
              <Link href="case-details" className="case-two__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case-two__item">
              <div className="image case-two__image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="case-two__content">
                <span>Solution</span>
                <h4>
                  <Link href="case-details" className="text-white">
                    Web Development
                  </Link>
                </h4>
              </div>
              <Link href="case-details" className="case-two__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case-two__item">
              <div className="image case-two__image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="case-two__content">
                <span>Security</span>
                <h4>
                  <Link href="case-details" className="text-white">
                    Network Security
                  </Link>
                </h4>
              </div>
              <Link href="case-details" className="case-two__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case-two__item">
              <div className="image case-two__image">
                <Image src={Six} alt="Image" priority />
              </div>
              <div className="case-two__content">
                <span>Solution</span>
                <h4>
                  <Link href="case-details" className="text-white">
                    App Development
                  </Link>
                </h4>
              </div>
              <Link href="case-details" className="case-two__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case-two__item">
              <div className="image case-two__image">
                <Image src={Seven} alt="Image" priority />
              </div>
              <div className="case-two__content">
                <span>Security</span>
                <h4>
                  <Link href="case-details" className="text-white">
                    Database Security
                  </Link>
                </h4>
              </div>
              <Link href="case-details" className="case-two__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseTwoItems;
