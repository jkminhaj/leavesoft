import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/team/team-image1.jpg";

const TeamSingle = () => {
  return (
    <section className="team-single pt-120 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-4 col-md-6">
            <div className="team-single__image">
              <Image src={One} alt="Image" priority />
              <div className="team-info">
                <Link href="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link href="/" className="active">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link href="/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link href="/">
                  <i className="fa-brands fa-pinterest-p"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="team-single__content">
              <div className="title pb-20 mb-20 bor-bottom">
                <h3>Kawser Ahmed</h3>
                <span className="primary-color mt-1">Web Designer</span>
              </div>
              <div className="team-single__info">
                <h4 className="pb-2">About Me</h4>
                <p className="mb-20">
                  This good man possesses qualities that inspire us all. He is
                  selfless, always putting the needs of others before his own.
                  Whether it&apos;s helping a neighbor in distress, volunteering
                  at local charities, or simply lending a listening ear to those
                  who need it, he consistently demonstrates the true meaning of
                  altruism.
                </p>
                <p>
                  This good man is a source of unwavering support and
                  encouragement to those around him. He is a pillar of strength
                  in times of adversity and a wellspring of joy in times of
                  celebration.
                </p>
                <div className="skills mt-40">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="experience-progress-wrapper">
                        <div className="experience-progress pb-4">
                          <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                            <h5 className="experience-title pb-2">
                              IT Management
                            </h5>
                            <span className="exp" style={{ left: "90%" }}>
                              90%
                            </span>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar "
                              data-aos="fade-left"
                              data-aos-duration="800"
                              role="progressbar"
                              style={{ width: "90%" }}
                              aria-valuenow={90}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="experience-progress pb-4">
                          <div className="experience-title-wrapper d-flex justify-content-between align-items-center">
                            <h5 className="experience-title pb-2">
                              Network Security
                            </h5>
                            <span style={{ left: "85%" }}>85%</span>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar "
                              data-aos="fade-left"
                              data-aos-duration="900"
                              role="progressbar"
                              style={{ width: "86%" }}
                              aria-valuenow={85}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="experience-progress-wrapper">
                        <div className="experience-progress pb-4">
                          <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                            <h5 className="experience-title pb-2">
                              Web Development
                            </h5>
                            <span className="exp" style={{ left: "95%" }}>
                              95%
                            </span>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar "
                              data-aos="fade-left"
                              data-aos-duration="800"
                              role="progressbar"
                              style={{ width: "95%" }}
                              aria-valuenow={95}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                        <div className="experience-progress pb-4">
                          <div className="experience-title-wrapper d-flex justify-content-between align-items-center">
                            <h5 className="experience-title pb-2">
                              Platform Integration
                            </h5>
                            <span style={{ left: "98%" }}>98%</span>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar "
                              data-aos="fade-left"
                              data-aos-duration="900"
                              role="progressbar"
                              style={{ width: "98%" }}
                              aria-valuenow={98}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-single-history mt-60">
        <div className="container">
          <div className="title pb-30 mb-30 bor-bottom">
            <h3>Education Background</h3>
          </div>
          <h4>
            <span className="primary-color text-capitalize mb-3">
              Bachelor&apos;s degree
            </span>
            , 2010
          </h4>
          <p>
            Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit
            tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum
            pretium justo. Phasellus vitae consequat nisi, quis luctus nisl.
            Praesent faucibus sem id massa semper ornare. Nam eu magna at mi
            pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet,
            leo auctor volutpat ultrices, metus dolor dictum enim, sed convallis
            lacus urna nec erat.
          </p>
          <h4>
            <span className="primary-color text-capitalize mb-3 mt-5">
              Master&apos;s degree in design
            </span>
            , 2015
          </h4>
          <p>
            Proin ultricies ultricies est vitae cursus. Nulla sit amet suscipit
            tortor. Maecenas dui erat, ornare eget tristique vitae, rutrum
            pretium justo. Phasellus vitae consequat nisi, quis luctus nisl.
            Praesent faucibus sem id massa semper ornare. Nam eu magna at mi
            pellentesque mattis. Morbi at condimentum velit. Phasellus aliquet,
            leo auctor volutpat ultrices, metus dolor dictum enim, sed convallis
            lacus urna nec erat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSingle;
