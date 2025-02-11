import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Timer, Trophy, Users, Flame, Target, ArrowLeft } from 'lucide-react';

function Challenges() {
  const challenges = [
    {
      title: "30-Day Transformation",
      description: "Complete daily workouts and track your progress over 30 days",
      duration: "30 Days",
      difficulty: "Intermediate",
      participants: "2.5k+",
      prize: "$10,000",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Strength Master",
      description: "Focus on building strength with progressive overload training",
      duration: "45 Days",
      difficulty: "Advanced",
      participants: "1.8k+",
      prize: "$15,000",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80",
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Cardio Blast",
      description: "High-intensity cardio workouts for maximum fat burn",
      duration: "21 Days",
      difficulty: "Beginner",
      participants: "3.2k+",
      prize: "$8,000",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Flexibility Focus",
      description: "Improve flexibility and mobility with yoga and stretching",
      duration: "28 Days",
      difficulty: "All Levels",
      participants: "1.5k+",
      prize: "$7,000",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Active Challenges
          </h1>
          <p className="text-purple-100 text-lg md:text-xl">
            Choose your challenge and start your transformation journey today
          </p>
        </div>
      </div>

      {/* Challenges Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <img
                  src={challenge.image}
                  alt={challenge.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${challenge.color} opacity-60`}></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">{challenge.title}</h3>
                  <p className="text-white/90">{challenge.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Timer className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-600">{challenge.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-600">{challenge.difficulty}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-600">{challenge.participants}</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-600">{challenge.prize}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center">
                  <Target className="w-5 h-5 mr-2" />
                  Join Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Challenges;