import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/banner/inner-banner-shape2.png";
import Two from "@/public/images/banner/inner-banner-shape1.png";
import Three from "@/public/images/banner/inner-banner-shape3.png";

const CmnBanner = ({ title }: any) => {
  return (
    <section
      className="banner__inner-page bg-image pt-180 pb-180 bg-image"
      style={{
        backgroundImage: "url(/images/banner/banner-inner-page.jpg)",
      }}
    >
      <div
        className="shape2 "
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image src={One} alt="shape" priority />
      </div>
      <div
        className="shape1 "
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image src={Two} alt="shape" priority />
      </div>
      <div
        className="shape3 "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image className="sway__animationX" src={Three} alt="shape" priority />
      </div>
      <div className="container">
        <h2
          className=""
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1500"
        >
          {title}
        </h2>
        <div
          className="breadcrumb-list "
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <Link href="index">Home</Link>
          <span>
            <i className="fa-regular fa-angles-right mx-2"></i>
            {title}
          </span>
        </div>
      </div>
    </section>
  );
};

export default CmnBanner;
