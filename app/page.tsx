import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
import Service from "@/components/containers/HomeOne/Service";
import About from "@/components/containers/HomeOne/About";
import CounterSection from "@/components/containers/HomeOne/CounterSection";
import Case from "@/components/containers/HomeOne/Case";
import Offer from "@/components/containers/HomeOne/Offer";
import Brand from "@/components/containers/HomeOne/Brand";
import Process from "@/components/containers/HomeOne/Process";
import Testimonial from "@/components/containers/HomeOne/Testimonial";
import Blog from "@/components/containers/HomeOne/Blog";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Banner />
      <Service />
      <About />
      <CounterSection />
      <Case />
      <Offer />
      <Brand />
      <Process />
      <Testimonial />
      <Blog />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </>
  );
};

export default page;
