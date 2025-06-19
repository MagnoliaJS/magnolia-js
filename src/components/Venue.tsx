import React from "react";
import { MapPin, Clock, Car, Utensils, Wifi } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Haunted <span className="text-orange-500">Venue</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us at the Mississippi Museum of Natural Science for a day of coding magic
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-start space-x-4">
                <MapPin className="h-8 w-8 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-300 mb-2">Mississippi Museum of Natural Science</p>
                  <p className="text-gray-400">2148 Riverside Dr, Jackson, MS 39202</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Schedule</h3>
                  <p className="text-gray-300 mb-1">Registration: 8:00 AM - 9:00 AM</p>
                  <p className="text-gray-300 mb-1">Sessions: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Networking: 6:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500/20 text-center">
                <Car className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <p className="text-white font-medium">Free Parking</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500/20 text-center">
                <Utensils className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-medium">Catered Lunch</p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500/20 text-center">
                <Wifi className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <p className="text-white font-medium">Free WiFi</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">About the Venue</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The Mississippi Museum of Art provides the perfect backdrop for our Halloween-themed
              conference. With its modern facilities and spooky natural history exhibits, it creates
              an atmosphere that's both professional and mysteriously inspiring.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The venue features state-of-the-art auditoriums, comfortable seating for 300+
              attendees, and excellent acoustics that will ensure every ghost story... er, tech
              talk... is heard crystal clear.
            </p>

            <div className="bg-black/30 rounded-lg p-4 border border-purple-500/30">
              <h4 className="text-lg font-semibold text-orange-500 mb-2">Getting There</h4>
              <p className="text-gray-400 text-sm">
                Located just off I-55 in Jackson, the museum is easily accessible from anywhere in
                Mississippi. Ride-sharing services are available, and the venue is connected to
                public transportation routes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
