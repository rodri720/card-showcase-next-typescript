import Image from 'next/image'
import { Hero, CustomFilter, SearchBar } from '@/components';
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
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title= "Fuel" />
            <CustomFilter title= "Year" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
