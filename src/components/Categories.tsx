import React from 'react';
import { Users, Star, Trophy } from 'lucide-react';

export default function Categories() {
  const categories = [
    {
      icon: Users,
      title: 'Fitness Enthusiast',
      description: 'Perfect for those starting their fitness journey',
      features: ['Basic AI Analysis', 'Community Support', 'Daily Challenges']
    },
    {
      icon: Star,
      title: 'Influencer',
      description: 'For social media creators and fitness influencers',
      features: ['Advanced Analytics', 'Brand Collaboration', 'Exclusive Content']
    },
    {
      icon: Trophy,
      title: 'Athlete',
      description: 'Designed for professional athletes and competitors',
      features: ['Pro AI Analysis', 'Performance Tracking', 'Elite Challenges']
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Category
          </h2>
          <p className="text-gray-600 text-lg">
            Select the perfect track for your fitness level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="p-8">
                <category.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50">
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Select Category
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}