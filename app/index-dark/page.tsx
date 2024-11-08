import HeaderDark from "@/components/layout/header/HeaderDark";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import Brand from "@/components/containers/HomeOne/Brand";
import AboutTwo from "@/components/containers/HomeTwo/AboutTwo";
import ServiceTwo from "@/components/containers/HomeTwo/ServiceTwo";
import ChooseArea from "@/components/containers/HomeTwo/ChooseArea";
import Team from "@/components/containers/HomeTwo/Team";
import FaqDark from "@/components/containers/HomeTwo/FaqDark";
import CaseTwo from "@/components/containers/HomeTwo/CaseTwo";
import TestimonialDark from "@/components/containers/HomeTwo/TestimonialDark";
import BlogTwo from "@/components/containers/HomeTwo/BlogTwo";
import Quote from "@/components/containers/HomeTwo/Quote";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div className="darken">
      <HeaderDark />
      <BannerTwo />
      <Brand />
      <AboutTwo />
      <ServiceTwo />
      <ChooseArea />
      <Team />
      <FaqDark />
      <CaseTwo />
      <TestimonialDark />
      <BlogTwo />
      <Quote />
      <FooterTwo />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
