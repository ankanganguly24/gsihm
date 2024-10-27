import { Assosciations } from "@/components/ui/Association";
import Gallery from "@/components/ui/Gallery";
import AboutUniversity from "@/components/ui/about-uni";
import CampusInfo from "@/components/ui/campus-info";
import GoogleReviews from "@/components/ui/google-reviews";
import Header from "@/components/ui/header";
import Location from "@/components/ui/location";
import TestimonialCard from "@/components/ui/testimonial-card";
import Whyus from "@/components/ui/why-us";
import { Metadata } from "next";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUniversity />
      <Whyus />
      <CampusInfo />
      <GoogleReviews />
      <TestimonialCard />
      <Assosciations />
      <div>
        <h1 className="text-4xl font-bold text-primary text-center my-8">
          Gallery
        </h1>
        <Gallery count={8} showHeader={false} />
      </div>
      <Location />
    </div>
  );
};

export default Home;
