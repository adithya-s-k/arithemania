'use client';

import Navbar from '../components/Navbara';
import Footer from '../components/Footera';
import Registrations from '../sections/Register';
import { GetStarted, Insights } from '../sections';
// import styles from '../styles';

const Home = () => (
  <div className="bg-primary-black overflow-hidden w-[100vw]">
    <div className="relative">
      <div className="gradient-03 z-0" />
      <div className="gradient-04 z-0" />
      <div className="gradient-02 z-0" />
      <Navbar />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-02 z-0" />
      <div className="gradient-04 z-0" />
      <Registrations />
    </div>
    <Footer />
  </div>
);

export default Home;
