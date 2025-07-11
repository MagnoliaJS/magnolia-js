import { link } from "fs";
import { ReactComponent as ProgressLogo } from "/src/assets/progress.svg";
import magnoliaBricksLogo from "/src/assets/magnoliabricks.png";

const Sponsors = () => {
  const hackathonSponsor = {
    name: "Progress",
    logo: <ProgressLogo className="fill-white w-auto h-[10rem] block m-4" />,
    link: "https://www.telerik.com/kendo-ui",
  };

  const platinumSponsors = [
    { name: "Phantom Corp", logo: "🦇" },
    { name: "Spectral Systems", logo: "👻" },
  ];

  const goldSponsors = [
    { name: "Witch Technologies", logo: "🧙‍♀️" },
    { name: "Vampire Ventures", logo: "🧛‍♂️" },
    { name: "Zombie Labs", logo: "🧟‍♂️" },
  ];

  const silverSponsors = [
    { name: "Pumpkin Products", logo: "🎃" },
    { name: "Skeleton Solutions", logo: "💀" },
    { name: "Cauldron Code", logo: "⚗️" },
    { name: "Raven Research", logo: "🐦‍⬛" },
  ];

  const communitySponsors = [
    { name: "HTML for People", logo: "", link: "https://htmlforpeople.com" },
  ];

  const giveawaySponsors = [
    {
      name: "Magnolia Bricks",
      logo: (
        <img
          src={magnoliaBricksLogo}
          alt="Magnolia Bricks Logo."
          className="w-auto h-[10rem] block m-4"
        />
      ),
      link: "https://magnoliabricks.com",
    },
  ];

  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-purple-400">Supernatural</span> Sponsors
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            These amazing organizations help make MagnoliaConf possible
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-orange-500 text-center mb-8">
            Haunted Hackathon Sponsor
          </h3>
          <div className="flex justify-center space-x-12">
            <a
              href={hackathonSponsor.link}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center w-max">
                {hackathonSponsor.logo}
                <span className="sr-only">{hackathonSponsor.name}</span>
              </div>
            </a>
          </div>
        </div>

        {/* <div className="mb-12">
          <h3 className="text-2xl font-bold text-orange-500 text-center mb-8">Platinum Spirits</h3>
          <div className="flex justify-center space-x-12">
            {platinumSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{sponsor.logo}</div>
                  <h4 className="text-xl font-bold text-white">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-yellow-500 text-center mb-8">Gold Ghouls</h3>
          <div className="flex justify-center flex-wrap gap-8">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{sponsor.logo}</div>
                  <h4 className="text-lg font-bold text-white">{sponsor.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
*/}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-400 text-center mb-8">Community Coven</h3>
          <div className="flex justify-center flex-wrap gap-8">
            {communitySponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.link}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-500/30 hover:border-gray-400/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{sponsor.logo}</div>
                  <h4 className="text-sm font-bold text-white">{sponsor.name}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-yellow-500 text-center mb-8">
            Ghostly Giveaway Sponsor{giveawaySponsors.length > 1 ? "s" : ""}
          </h3>
          <div className="flex justify-center flex-wrap gap-8">
            {giveawaySponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">{sponsor.logo}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            We can't have an event without wonderful sponsors like you. Interested in sponsoring
            MagnoliaConf?
          </p>

          <div className="flex justify-center space-x-6">
            <a
              href="https://drive.google.com/file/d/1p2bgQooxI1Cbp2wUXDO6F-PJ-9ffgx6V/view?usp=sharing"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Check out our Prospectus
            </a>
            <a
              href="mailto:sponsors@magnoliaconf.com?subject=Sponsor%20Magnolia%20Conf%202025"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
