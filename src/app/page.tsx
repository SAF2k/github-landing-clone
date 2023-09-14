import Navbar from '@/components/Navbar/Navbar'
import StickyNav from '@/components/Navbar/StickyNav'
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
          <div className="px-3"></div>
        </div>
        <StickyNav />
      </div>
      {/* <Footer /> */}
    </>
  )
}
