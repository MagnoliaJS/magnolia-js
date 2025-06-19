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
            All attendees, speakers, sponsors, and volunteers at our conference are required to
            agree with the following code of conduct. Organizers will enforce this code throughout
            the event. We expect cooperation from all participants to help ensure a safe environment
            for everybody.
          </p>
          <small className="text-sm text-gray-400">
            This code of conduct was expanded on and is originally from{" "}
            <a href="https://confcodeofconduct.com/" className="underline">
              Conference Code of Conduct
            </a>
            .
          </small>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="h-8 w-8 text-green-500" />
              <h3 className="text-2xl font-bold text-white">The Quick Version</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              MagnoliaConf is dedicated to providing a safe and harassment-free conference
              experience for everyone, regardless of gender, gender identity and expression, age,
              sexual orientation, disability, physical appearance, body size, race, ethnicity,
              religion (or lack thereof), or technology choices. We do not tolerate harassment of
              conference participants in any form. Sexual language and imagery is not appropriate
              for any conference venue, including talks, workshops, parties, Twitter, Discord,
              Bluesky, and other online media. Conference participants violating these rules may be
              sanctioned or expelled from the conference without a refund at the discretion of the
              conference organizers.
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
            </ul>
            <em className="text-purple-400 block mt-2 text-xl">
              In short, don't be a jerk. Treat others the way you want to be treated.
            </em>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-red-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <h3 className="text-2xl font-bold text-white">The Less Quick Version</h3>
            </div>
            <p className="text-gray-300 my-2">
              Harassment includes offensive verbal comments related to gender, gender identity and
              expression, age, sexual orientation, disability, physical appearance, body size, race,
              ethnicity, religion, technology choices, sexual images in public spaces, deliberate
              intimidation, stalking, following, harassing photography or recording, sustained
              disruption of talks or other events, inappropriate physical contact, and unwelcome
              sexual attention.
            </p>

            <p className="text-gray-300 my-2 font-extrabold">
              Participants asked to stop any harassing behavior are expected to comply immediately.
            </p>

            <p className="text-gray-300 my-2">
              Sponsors are also subject to the anti-harassment policy. In particular, sponsors
              should not use sexualized images, activities, or other material. Booth staff
              (including volunteers) should not use sexualized clothing/uniforms/costumes, or
              otherwise create a sexualized environment.
            </p>

            <p className="text-gray-300 my-2">
              We expect participants to follow these rules at conference and workshop venues and
              conference-related social events. Failure to comply will result in your removal from
              the conference venue and could result in a ban from future events.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20">
            <div className="flex items-center space-x-4 mb-6">
              <Users className="h-8 w-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Reporting</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you are being harassed, notice that someone else is being harassed, or have any
              other concerns, please contact a member of conference staff immediately. Conference
              staff can be identified as they'll be wearing branded clothing and/or badges.
            </p>
            <div className="bg-black/30 rounded-lg p-4 border border-orange-500/30">
              <p className="text-orange-400 font-semibold">
                Contact: Kayla Sween at conduct@magnoliajs.com
              </p>
            </div>
            <p className="text-gray-300 my-3">
              Conference staff will be happy to help participants contact hotel/venue security or
              local law enforcement, provide escorts, or otherwise assist those experiencing
              harassment to feel safe for the duration of the conference. We value your attendance.
            </p>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Enforcement</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            If a participant engages in harassing behavior, the conference organizers may take any
            action they deem appropriate, including warning the offender or expulsion from the
            conference with no refund.
          </p>
          <p className="text-orange-400 font-semibold">
            Let's make MagnoliaConf a truly spook-tacular experience for everyone! 🎃
          </p>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
