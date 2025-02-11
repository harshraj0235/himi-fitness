import React from 'react';
import { Upload, Play, Award, Share2 } from 'lucide-react';

export default function VideoSubmission() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Submit Your Challenge
          </h2>
          <p className="text-gray-600 text-lg">
            Upload your workout videos and get AI-powered analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center">
              <Upload className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Upload Your Video</h3>
              <p className="text-gray-500 mb-4">Drag and drop your video here or click to browse</p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Choose File
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Play className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">AI Form Analysis</h4>
                <p className="text-gray-600">Get instant feedback on your form and technique</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Earn Points</h4>
                <p className="text-gray-600">Each submission earns you points on the leaderboard</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Share2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Share & Earn</h4>
                <p className="text-gray-600">Share your progress on social media for bonus points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}