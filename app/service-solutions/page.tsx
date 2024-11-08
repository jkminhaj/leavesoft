import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceAlter from "@/components/containers/service/ServiceAlter";
import About from "@/components/containers/HomeOne/About";
import CounterSection from "@/components/containers/HomeOne/CounterSection";
import Team from "@/components/containers/HomeTwo/Team";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <CmnBanner title="IT Solutions" />
      <ServiceAlter />
      <About />
      <CounterSection />
      <Team />
      <Footer />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
