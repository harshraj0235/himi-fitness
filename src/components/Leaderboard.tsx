import React from 'react';
import { Crown, Award, Medal } from 'lucide-react';

export default function Leaderboard() {
  const topUsers = [
    {
      rank: 1,
      name: 'Sarah Johnson',
      points: 2500,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      rank: 2,
      name: 'Mike Chen',
      points: 2350,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      rank: 3,
      name: 'Emma Wilson',
      points: 2200,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    }
  ];

  const RankIcon = ({ rank }: { rank: number }) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Award className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Top Performers
          </h2>
          <p className="text-gray-400 text-lg">
            See who's leading the challenge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topUsers.map((user) => (
            <div
              key={user.rank}
              className="bg-gray-800 rounded-xl p-6 flex items-center space-x-4"
            >
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -top-2 -right-2">
                  <RankIcon rank={user.rank} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {user.name}
                </h3>
                <p className="text-purple-400">{user.points} points</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-purple-600 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition-colors">
            View Full Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}