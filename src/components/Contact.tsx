import React from 'react';
import { MessageSquare, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 text-lg">
            Our support team is here to assist you 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Live Chat</h4>
                <p className="text-gray-600 mb-2">Get instant help from our team</p>
                <button className="text-purple-600 font-semibold hover:text-purple-700">
                  Start Chat →
                </button>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                <p className="text-gray-600 mb-2">We'll respond within 24 hours</p>
                <a href="mailto:support@himalixir.com" className="text-purple-600 font-semibold hover:text-purple-700">
                  support@himalixir.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Phone Support</h4>
                <p className="text-gray-600 mb-2">Available 9 AM - 6 PM EST</p>
                <a href="tel:+1234567890" className="text-purple-600 font-semibold hover:text-purple-700">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-600">
                  123 Fitness Street<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}