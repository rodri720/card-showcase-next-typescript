import Image from 'next/image'
import { Hero } from '@/components';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">

          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>Explore out cars you might like</p>

        </div>

      </div>
      <Footer />
    </main>
  )
}
