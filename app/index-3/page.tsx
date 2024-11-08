import HeaderThree from "@/components/layout/header/HeaderThree";
import BannerThree from "@/components/layout/banner/BannerThree";
import ServiceThree from "@/components/containers/HomeThree/ServiceThree";
import BrandThree from "@/components/containers/HomeThree/BrandThree";
import AboutThree from "@/components/containers/HomeThree/AboutThree";
import CounterSection from "@/components/containers/HomeOne/CounterSection";
import CaseThree from "@/components/containers/HomeThree/CaseThree";
import ModalThree from "@/components/containers/HomeThree/ModalThree";
import PricingThree from "@/components/containers/HomeThree/PricingThree";
import TestimonialThree from "@/components/containers/HomeThree/TestimonialThree";
import Blog from "@/components/containers/HomeOne/Blog";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <>
      <HeaderThree />
      <BannerThree />
      <ServiceThree />
      <BrandThree />
      <AboutThree />
      <CounterSection />
      <CaseThree />
      <ModalThree />
      <PricingThree />
      <TestimonialThree />
      <Blog />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
