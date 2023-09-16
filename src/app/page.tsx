"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

const Navbar = dynamic(() => import("@/components/Navbar/Navbar"));
const Hero = dynamic(() => import("@/components/Hero-section/Hero"));
const Productivity = dynamic(
  () => import("@/components/Productivity/Productivity"),
  { ssr: false }
);
const StickyNav = dynamic(() => import("@/components/Navbar/StickyNav"), {
  ssr: false,
});
const Collaboration = dynamic(
  () => import("@/components/Collaboration/Collaboration")
);
const Security = dynamic(() => import("@/components/Security/Security"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

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
          <div className="relative">
            <Image
              className="absolute top-0 transition ease-in duration-200 max-xl:right-[-1050px] xl:right-[-970px] -z-30 image"
              width={4377}
              height={4377}
              src="https://github.githubassets.com/images/modules/site/home-campaign/hero-bg.webp"
              alt="hero-bg"
              loading="lazy"
            />
          </div>
          <div className="px-3">
            <Hero />
          </div>
          <StickyNav />
          <div
            id="productivity"
            className="home-campaign-productivity px-4 pt-8 overflow-hidden"
          >
            <Productivity />
          </div>
          <div
            id="collaboration"
            className="home-campaign-productivity px-4 pt-8 overflow-hidden"
          >
            <Collaboration />
          </div>
          <div
            id="security"
            className="home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden"
          >
            <Security />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
