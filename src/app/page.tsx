import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="relative z-50">
        <div className="absolute">
          <Navbar />
        </div>
      </div>
    </>
  )
}
