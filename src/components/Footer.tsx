import React from "react";
import { Github, Twitter, Mail, Ghost } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-orange-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Ghost className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">MagnoliaConf</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Mississippi's premier Halloween-themed software development conference. Where code
              meets creativity in the most spook-tacular way!
            </p>
            <div className="flex space-x-4">
              <Github className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              <Mail className="h-6 w-6 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#speakers"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#venue" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="#conduct"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">hey@magnoliajs.com</li>
              <li className="text-gray-400">Jackson, Mississippi</li>
              <li className="text-gray-400">October 21-23, 2024</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 MagnoliaConf. All rights reserved. Made with 🎃 in Mississippi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
