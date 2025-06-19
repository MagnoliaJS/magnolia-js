import React from "react";
import { Shield, Heart, Users, AlertTriangle } from "lucide-react";

const CodeOfConduct = () => {
  return (
    <section id="conduct" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Code of <span className="text-purple-400">Conduct</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Creating a safe and inclusive environment for all attendees, speakers, and sponsors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-bold text-white">Our Commitment</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              HacktoberFright is dedicated to providing a harassment-free conference experience for
              everyone, regardless of gender, sexual orientation, disability, physical appearance,
              body size, race, or religion. We do not tolerate harassment of conference participants
              in any form.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <Heart className="h-8 w-8 text-blue-500" />
              <h3 className="text-2xl font-bold text-white">Expected Behavior</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Be respectful and professional</li>
              <li>• Use welcoming and inclusive language</li>
              <li>• Respect different viewpoints and experiences</li>
              <li>• Accept constructive criticism gracefully</li>
              <li>• Focus on what's best for the community</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <h3 className="text-2xl font-bold text-white">Unacceptable Behavior</h3>
            </div>
            <ul className="text-gray-300 space-y-2">
              <li>• Harassment, intimidation, or discrimination</li>
              <li>• Offensive comments or personal attacks</li>
              <li>• Inappropriate physical contact</li>
              <li>• Disruptive behavior during sessions</li>
              <li>• Any form of unwelcome attention</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <Users className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Reporting</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you experience or witness unacceptable behavior, please report it immediately to
              conference staff. All reports will be handled with discretion and confidentiality.
            </p>
            <div className="bg-black/30 rounded-lg p-4 border border-orange-500/30">
              <p className="text-orange-400 font-semibold">Contact: conduct@hacktoberfright.com</p>
              <p className="text-gray-400 text-sm mt-1">Available 24/7 during the conference</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Enforcement</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Conference organizers have the right and responsibility to remove, edit, or reject
            comments, commits, code, wiki edits, issues, and other contributions that are not
            aligned with this Code of Conduct. Participants violating these rules may be sanctioned
            or expelled from the conference at the discretion of the organizers.
          </p>
          <p className="text-orange-400 font-semibold">
            Let's make HacktoberFright a truly spook-tacular experience for everyone! 🎃
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
