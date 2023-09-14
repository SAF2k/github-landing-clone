import Hero from "@/components/Hero-section/Hero";
import Navbar from "@/components/Navbar/Navbar";
import StickyNav from "@/components/Navbar/StickyNav";
import Productivity from "@/components/Productivity/Productivity";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
      <div>
        <div className="overflow-hidden">
          <div className="relative"></div>
          <div className="px-3">
            <Hero />
          </div>
          <StickyNav />
          <div
            id="collaboration"
            className="home-campaign-productivity px-4 pt-8 overflow-hidden"
          >
            <Productivity />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
