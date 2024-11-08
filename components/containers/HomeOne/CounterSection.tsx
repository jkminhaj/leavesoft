import Image from "next/image";
import Counter from "../Counter";
import Shape from "@/public/images/shape/counnter-bg-shape.png";
import One from "@/public/images/icon/counter-icon1.png";
import Two from "@/public/images/icon/counter-icon2.png";
import Three from "@/public/images/icon/counter-icon3.png";
import Four from "@/public/images/icon/counter-icon4.png";

const CounterSection = () => {
  return (
    <section className="counter-area">
      <div className="container">
        <div className="counter__wrp gradient-bg">
          <div
            className="counter__shape "
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <Image src={Shape} alt="shape" priority />
          </div>
          <div
            className="counter__item "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="0"
            data-aos-duration="1000"
          >
            <Image src={One} alt="icon" priority />
            <div className="content">
              <h3>
                <span className="count">
                  <Counter value={6561} />
                </span>
                +
              </h3>
              <p className="text-white">Satisfied Clients</p>
            </div>
          </div>
          <div
            className="counter__item "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <Image src={Two} alt="icon" priority />
            <div className="content">
              <h3>
                <span className="count">
                  <Counter value={600} />
                </span>
                +
              </h3>
              <p className="text-white">Finished Projects</p>
            </div>
          </div>
          <div
            className="counter__item "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Image src={Three} alt="icon" priority />
            <div className="content">
              <h3>
                <span className="count">
                  <Counter value={250} />
                </span>
                +
              </h3>
              <p className="text-white">Skilled Experts</p>
            </div>
          </div>
          <div
            className="counter__item "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="800"
            data-aos-duration="1000"
          >
            <Image src={Four} alt="icon" priority />
            <div className="content">
              <h3>
                <span className="count">
                  <Counter value={590} />
                </span>
                +
              </h3>
              <p className="text-white">Media Posts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
