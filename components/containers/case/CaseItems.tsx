import Link from "next/link";
import Image from "next/image";
import Two from "@/public/images/case/case-image1.jpg";
import Three from "@/public/images/case/case-image2.jpg";
import Four from "@/public/images/case/case-image3.jpg";
import Five from "@/public/images/case/case-image4.jpg";
import Six from "@/public/images/case/case-two-image1.jpg";
import Seven from "@/public/images/case/case-two-image4.jpg";

const CaseItems = () => {
  return (
    <section className="case-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case__item">
              <div className="image case__image">
                <Image src={Two} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Technology</span>
                <h3>
                  <Link
                    href="case-details"
                    className="text-white primary-hover"
                  >
                    Platform Integration
                  </Link>
                </h3>
              </div>
              <Link href="case-details" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case__item">
              <div className="image case__image">
                <Image src={Three} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Technology</span>
                <h3>
                  <Link
                    href="case-details"
                    className="text-white primary-hover"
                  >
                    IT Management
                  </Link>
                </h3>
              </div>
              <Link href="case-details" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case__item">
              <div className="image case__image">
                <Image src={Four} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Solution</span>
                <h3>
                  <Link
                    href="case-details"
                    className="text-white primary-hover"
                  >
                    Web Development
                  </Link>
                </h3>
              </div>
              <Link href="case-details" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case__item">
              <div className="image case__image">
                <Image src={Five} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Security</span>
                <h3>
                  <Link
                    href="case-details"
                    className="text-white primary-hover"
                  >
                    Network Security
                  </Link>
                </h3>
              </div>
              <Link href="case-details" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case__item">
              <div className="image case__image">
                <Image src={Six} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">DEVELOPMENT</span>
                <h3>
                  <Link
                    href="case-details"
                    className="text-white primary-hover"
                  >
                    Product Design
                  </Link>
                </h3>
              </div>
              <Link href="case-details" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="case__item">
              <div className="image case__image">
                <Image src={Seven} alt="Image" priority />
              </div>
              <div className="case__content">
                <span className="primary-color sm-font">Design</span>
                <h3>
                  <Link
                    href="case-details"
                    className="text-white primary-hover"
                  >
                    UI/UX Design
                  </Link>
                </h3>
              </div>
              <Link href="case-details" className="case__btn">
                <i className="fa-regular fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseItems;
