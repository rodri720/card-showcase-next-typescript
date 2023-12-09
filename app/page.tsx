import Image from 'next/image'
import { Hero } from '@/components';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Footer />
      
    </main>
  )
}
