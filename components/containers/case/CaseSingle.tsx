import Image from "next/image";
import One from "@/public/images/case/case-details-image1.jpg";
import Two from "@/public/images/case/case-details-image2.jpg";
import Three from "@/public/images/case/case-details-image3.jpg";

const CaseSingle = () => {
  return (
    <section className="case-single-area pt-120 pb-120">
      <div className="container">
        <div className="case-single__item">
          <div className="image">
            <Image src={One} alt="Image" priority />
          </div>
          <h3 className="case-single__title mt-40 mb-30">
            Mobile App Development Solution
          </h3>
          <p>
            Nulla faucibus malesuada. In placerat feugiat eros ac tempor.
            Integer euismod massa sapien, et consequat enim laoreet et. Nulla
            sit amet nisi dapibus, gravida turpis sit amet, accumsan nisl. Fusce
            vel semper risus. Morbi congue eros sagittis, sodales turpis
            venenatis, iaculis dui. Proin ac purus sed nibh dapibus neque.
            scelerisque sed quis ante. Suspendisse potenti. Mauris vitae
            sagittis diam. Vivamus imperdiet nulla ut nisi fermentum, vitae
            euismod mi egestas. In quis auctor magna. Maecenas sodales nunc
            tellus, non iaculis est iaculis placerat. Morbi suscipit,
          </p>
          <ul className="case-date py-4 bor-top bor-bottom mt-40">
            <li>
              <span>Completed Date:</span> 23-12-2023
            </li>
            <li>
              <span>Category:</span> Technology
            </li>
            <li>
              <span>Client:</span> Robert Fox
            </li>
            <li>
              <span>Location:</span> fot kde, USA
            </li>
          </ul>
          <h3 className="case-single__title mt-40 mb-30">Our Challenge</h3>
          <p>
            Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in
            magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque
            convallis. Quisque interdum mauris id nunc molestie, ac tincidunt
            erat gravida. Nullam dui libero, mollis ac quam et, venenatis
            tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin
            id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex
            molestie id.
          </p>
          <div className="case-challenge-list mt-30">
            <ul className="case-challenge">
              <li className="mb-3">
                <i className="fa-solid fa-check"></i>Technology Consultancy
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Maintenance And Support
              </li>
            </ul>
            <ul className="case-challenge">
              <li className="mb-3">
                <i className="fa-solid fa-check"></i>We Provide best services
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Requirements Gathering
              </li>
            </ul>
            <ul className="case-challenge">
              <li className="mb-3">
                <i className="fa-solid fa-check"></i>Maintenance And Support
              </li>
              <li>
                <i className="fa-solid fa-check"></i>Technology Consultancy
              </li>
            </ul>
          </div>
          <h3 className="case-single__title mt-40 mb-30">Project Overview</h3>
          <p>
            Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in
            magna ut orci malesuada sollicitudin. Aenean faucibus scelerisque
            convallis. Quisque interdum mauris id nunc molestie, ac tincidunt
            erat gravida. Nullam dui libero, mollis ac quam et, venenatis
            tincidunt quam. Proin nec volutpat ligula, id porttitor augue. Proin
            id volutpat massa. Vivamus tincidunt nunc justo, ac aliquam ex
            molestie id.
          </p>
        </div>
        <div className="row g-4 mt-10">
          <div className="col-md-6">
            <div className="image">
              <Image src={Two} alt="Image" priority />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image">
              <Image src={Three} alt="Image" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSingle;
