
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/ui/Hero';
import HomeSections from '../components/ui/HomeSections';
import HomeFAQ from '../components/ui/HomeFAQ';
import Footer from '../components/ui/Footer';

export default function Home() {
  return (
    <div className="text-white bg-black">
      <main>
        <Hero />
        <HomeSections />
        <HomeFAQ />
        <Footer />
      </main>
    </div>
  )
}
