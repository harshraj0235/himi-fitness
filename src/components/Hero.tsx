import React from 'react';
import { Trophy, Medal, Award, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover opacity-40"
          alt="Fitness Challenge"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Himalixir Fitness Challenge
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transform Your Body, Inspire Others, Win Big
          </p>
          <Link 
            to="/challenges"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transition-transform"
          >
            Join The Challenge
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Trophy, text: '$50,000 in Prizes' },
            { icon: Medal, text: 'AI Form Analysis' },
            { icon: Award, text: 'Daily Rewards' },
            { icon: Users, text: 'Global Community' }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <item.icon className="w-10 h-10 mb-2 text-purple-400" />
              <p className="text-center text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}