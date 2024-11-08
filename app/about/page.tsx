import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import AboutTwo from "@/components/containers/HomeTwo/AboutTwo";
import Offer from "@/components/containers/HomeOne/Offer";
import Brand from "@/components/containers/HomeOne/Brand";
import Case from "@/components/containers/HomeOne/Case";
import Testimonial from "@/components/containers/HomeOne/Testimonial";
import Team from "@/components/containers/HomeTwo/Team";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="About Us" />
      <AboutTwo />
      <Offer />
      <Brand />
      <Case />
      <Testimonial />
      <Team />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
