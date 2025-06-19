import React from "react";
import { MapPin, Clock, Car, Utensils, Wifi, Palette, GraduationCap } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Haunted <span className="text-orange-500">Venue</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us at the Mississippi Museum of Art for a day of coding magic
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-300 mb-2">Mississippi Museum of Art</p>
                  <p className="text-gray-400">380 S Lamar St, Jackson, MS 39201</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Schedule</h3>
                  <p className="text-gray-300 mb-1">TBD</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500/20 text-center">
                <GraduationCap className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <p className="text-white font-medium">Listen to the talks</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500/20 text-center">
                <Utensils className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-medium">
                  Eat <em className="italic">the best</em> conference food
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500/20 text-center">
                <Palette className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <p className="text-white font-medium">Tour the museum</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">About the Venue</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The Mississippi Museum of Art provides the perfect backdrop for our Halloween-themed
              conference. With its incredible art exhibits, it creates an inspiring atmosphere.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The venue features comfortable seating for all attendees and an excellent environment
              that will ensure every ghost story... er, tech talk... is heard crystal clear.
            </p>

            <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Getting There</h4>
              <p className="text-gray-400 text-sm">
                The Mississippi Museum of Art is easily accessible from Exit 96A on I-55 and is
                located right across the street from the Westin Jackson. Ride-sharing services are
                available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
