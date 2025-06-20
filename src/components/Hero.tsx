import { Calendar, MapPin } from "lucide-react";
import { ReactComponent as Ghost } from "/public/ghost.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('public/3EDF98BE-219B-4DA0-BE01-A754340E4B82_1_105_c.jpeg')] bg-cover opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center hero z-10">
        <div className="mb-8">
          <Ghost className="ghost" />
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            <span className="text-orange-400">Magnolia</span>
            <span className="text-purple-600 line-through"> JS </span>
            <span className="text-purple-300">Conf</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Software Development Conference
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
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
