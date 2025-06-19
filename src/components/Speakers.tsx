import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Sarah Nightcode",
      title: "Senior Software Architect",
      company: "Phantom Technologies",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Expert in distributed systems and microservices architecture with 15 years of haunting legacy codebases.",
      topic: "Exorcising Monolithic Demons: A Guide to Microservices",
    },
    {
      name: "Marcus Ghostly",
      title: "Lead DevOps Engineer",
      company: "Spectral Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Cloud infrastructure wizard specializing in containerization and CI/CD pipelines that never die.",
      topic: "Docker Containers: Keeping Your Apps Alive Forever",
    },
    {
      name: "Luna Cryptkeeper",
      title: "Cybersecurity Specialist",
      company: "Vault Guardians",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Protector of digital realms with expertise in ethical hacking and penetration testing.",
      topic: "Hunting Vulnerabilities: A Penetration Tester's Guide",
    },
    {
      name: "Viktor Bytecode",
      title: "AI/ML Engineer",
      company: "Neural Networks Inc",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Machine learning enthusiast who trains neural networks to predict the future (and stock prices).",
      topic: "Teaching Machines to See: Computer Vision Spells",
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-500">Ghostly</span> Speakers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the brilliant minds who will share their otherworldly knowledge and experience
          </p>
        </div>

        <h3 className="text-white text-center">Coming soon! 👻</h3>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="text-center mb-4">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-500/30"
                />
                <h3 className="text-xl font-bold text-white mb-1">{speaker.name}</h3>
                <p className="text-orange-500 font-medium mb-1">{speaker.title}</p>
                <p className="text-purple-400 text-sm mb-3">{speaker.company}</p>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{speaker.bio}</p>

              <div className="border-t border-gray-700 pt-4">
                <h4 className="text-white font-semibold mb-2">Speaking Topic:</h4>
                <p className="text-orange-400 text-sm font-medium">{speaker.topic}</p>
              </div>

              <div className="flex justify-center space-x-4 mt-4">
                <Github className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Speakers;
