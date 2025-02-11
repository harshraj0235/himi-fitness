import React from 'react';
import { Trophy, Gift, Crown, Star } from 'lucide-react';

export default function Prizes() {
  const prizes = [
    {
      icon: Trophy,
      title: 'Grand Prize',
      value: '$25,000',
      description: 'For the overall challenge winner',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Crown,
      title: 'Runner Up',
      value: '$15,000',
      description: 'Second place prize',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Star,
      title: 'Third Place',
      value: '$10,000',
      description: 'Third place prize',
      color: 'from-amber-500 to-amber-700'
    },
    {
      icon: Gift,
      title: 'Daily Rewards',
      value: '$100',
      description: 'Daily winner prizes',
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Win Amazing Prizes
          </h2>
          <p className="text-gray-400 text-lg">
            Over $50,000 in total prizes to be won
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center transform hover:scale-105 transition-transform"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${prize.color} mb-6`}>
                <prize.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {prize.title}
              </h3>
              <p className="text-3xl font-bold text-purple-400 mb-2">
                {prize.value}
              </p>
              <p className="text-gray-400">{prize.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors">
            Start Competing Now
          </button>
        </div>
      </div>
    </div>
  );
}