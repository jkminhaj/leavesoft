import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/quote-shape.png";
import Two from "@/public/images/shape/quote-shape2.png";

const Quote = () => {
  return (
    <section className="quote-area">
      <div className="container">
        <div className="quote__wrp gradient-bg">
          <div
            className="counter__shape "
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <Image src={One} alt="shape" priority />
          </div>
          <div className="quote__shape bobble__animation">
            <Image src={Two} alt="shape" priority />
          </div>
          <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between">
            <div className="section-header">
              <h5
                data-aos="fade-left"
                className=" text-white"
                data-aos-delay="0"
                data-aos-duration="1500"
              >
                <svg
                  className="me-1"
                  width="28"
                  height="12"
                  viewBox="0 0 28 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.75"
                    y="0.75"
                    width="18.5"
                    height="10.5"
                    rx="5.25"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="8.75"
                    y="0.75"
                    width="18.5"
                    height="10.5"
                    rx="5.25"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
                GET IN TOUCH
              </h5>
              <h2
                data-aos="fade-left"
                className=" text-white"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                We Take Care of Your <br /> Technology
              </h2>
            </div>
            <Link
              href="contact"
              className="btn-one "
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              get A Quote <i className="fa-regular fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
