import { Calendar, MapPin } from "lucide-react";
import { ReactComponent as Ghost } from "/public/ghost.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523FF6B35%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center hero">
        <div className="mb-8">
          <Ghost className="ghost" />
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="text-orange-500">Magnolia</span>
            <span className="text-purple-700 line-through"> JS </span>
            <span className="text-purple-400">Conf</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Software Development Conference
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join us for a spine-tingling journey through the latest in software development, where
            code meets Halloween magic in the heart of Mississippi.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
          <div className="flex items-center space-x-2 text-orange-500">
            <Calendar className="h-6 w-6" />
            <span className="text-lg font-medium">October 21-23, 2025</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-400">
            <MapPin className="h-6 w-6" />
            <span className="text-lg font-medium">Mississippi Museum of Art in Jackson, MS</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
            Register Now
          </button>
          <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View Schedule
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
