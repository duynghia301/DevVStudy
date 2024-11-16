import React from 'react';

import Hero from './components/Hero';
import Header from './components/Header';
import { Metadata } from 'next';
import About from './components/About';
import Contact from './components/Contact';
import Clients from './components/Clients';
import ScrollUp from './components/Common/ScrollUp';
import CallToAction from './components/CallToAction';

export const metadata: Metadata = {
  title: "Home",
  description: "Đồ Án Group 12 Nghĩa, Sơn",
};


const Home = () => (
  <div>
    <div className="header">
      <div>
      <ScrollUp />

        <Hero/>
        <About/>
        <CallToAction />
        <Contact/>
        <Clients />
      </div>
    </div>

 
  </div>
);

export default Home;
