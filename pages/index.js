import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/ui/Hero';
import HomeSections from '../components/ui/HomeSections';
import HomeFAQ from '../components/ui/HomeFAQ';
import Footer from '../components/ui/Footer';

export default function Home() {
  return (
    <div className="text-white bg-black">
      <Head>
        <title>Kevflix</title>
        <meta name="Kevflix: a portfolio project by Kevin Pernía" content="Kevflix app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <HomeSections />
        <HomeFAQ />
        <Footer />
      </main>
    </div>
  )
}
