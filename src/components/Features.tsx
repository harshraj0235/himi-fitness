import React from 'react';
import { Camera, Award, Share2, Gift, Brain, BarChart as ChartBar } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Camera,
      title: 'Video Submissions',
      description: 'Upload your workout videos and get AI-powered form analysis'
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Receive instant feedback on your form and technique'
    },
    {
      icon: ChartBar,
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed analytics'
    },
    {
      icon: Share2,
      title: 'Social Integration',
      description: 'Share your journey across all social platforms'
    },
    {
      icon: Award,
      title: 'Leaderboards',
      description: 'Compete globally and track your ranking'
    },
    {
      icon: Gift,
      title: 'Daily Rewards',
      description: 'Win prizes for consistency and improvement'
    }
  ];

  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Challenge Features
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to succeed in your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}