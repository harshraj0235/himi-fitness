import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import VideoSubmission from '../components/VideoSubmission';
import Leaderboard from '../components/Leaderboard';
import Prizes from '../components/Prizes';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <Features />
      <Categories />
      <VideoSubmission />
      <Prizes />
      <Leaderboard />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;