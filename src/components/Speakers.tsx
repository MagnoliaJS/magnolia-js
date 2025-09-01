import AbbeyPerini from '../assets/speakers/AbbeyPerini.jpg'
import AbhishekChatterjee from '../assets/speakers/AbhishekChatterjee.jpg'
import AmeerSami from '../assets/speakers/AmeerSami.jpg'
import AmyBlankenship from '../assets/speakers/AmyBlankenship.jpg'
import AudoraChalker from '../assets/speakers/AudoraChalker.jpg'
import BlakeWatson from '../assets/speakers/BlakeWatson.jpeg'
import BrianChirgwin from '../assets/speakers/BrianChirgwin.jpg'
import ChristinaYu from '../assets/speakers/ChristinaYu.jpeg'
import JenLooper from '../assets/speakers/JenLooper.jpeg'
import JoshGoldberg from '../assets/speakers/JoshGoldberg.jpg'
import KathleenMcMahon from '../assets/speakers/KathleenMcMahon.jpg'
import MichaelLamb from '../assets/speakers/MichaelLamb.jpg'
import NerandoJohnson from '../assets/speakers/NerandoJohnson.jpg'
import ThorbenPrimke from '../assets/speakers/ThorbenPrimke.jpg'
import TrevorAcy from '../assets/speakers/TrevorAcy.jpg'
import VincentFalconi from '../assets/speakers/VincentFalconi.jpeg'
import WillKlein from '../assets/speakers/WillKlein.jpg'

const Speakers = () => {
  const speakers = [
    {
      name: 'Abbey Perini',
      title: 'Mid-level Vue Developer',
      company: 'Hygiena',
      image: AbbeyPerini,
      bio: "Abbey Perini is many things - a metro Atlanta native, a person of many hobbies, and a full-stack web developer. Passionate about accessibility, she's worked in Vue, React, and even AngularJS (2013). She's happiest problem solving in the front-end, back-end, and all the APIs and microservices in between. She's spent her development career rectifying tech debt in existing codebases. She loves blogging and speaking about fun and useful things about programming, especially if it helps other developers.",
      topic: '#gitPanic - Restoring Lost Work',
    },
    {
      name: 'Abhisek Chatterjee',
      title: 'Director, IT',
      company: 'C Spire',
      image: AbhishekChatterjee,
      bio: 'Cloud infrastructure wizard specializing in containerization and CI/CD pipelines that never die.',
      topic: 'Docker Containers: Keeping Your Apps Alive Forever',
    },
    {
      name: 'Ameer Sami',
      title: 'Senior Software Engineer',
      company: 'S&C Electric Company',
      image: AmeerSami,
      bio: 'Protector of digital realms with expertise in ethical hacking and penetration testing.',
      topic: "Hunting Vulnerabilities: A Penetration Tester's Guide",
    },
    {
      name: 'Amy Blankenship',
      title: 'FullStack Developer',
      company: '',
      image: AmyBlankenship,
      bio: "After getting a BFA from Mississippi State University, I fell into development when I was too inexperienced to understand job descriptions. In the intervening years, I've worked in a variety of technologies, working for myself as well as for companies as small as 10 people up to large corporations and government contractors.",
      topic: "Don't Miss the Forest for the Trees",
    },
    {
      name: 'Audora Chalker',
      title: 'Frontend Engineer',
      company: ' ',
      image: AudoraChalker,
      bio: 'Machine learning enthusiast who trains neural networks to predict the future (and stock prices).',
      topic: 'Teaching Machines to See: Computer Vision Spells',
    },
    {
      name: 'Blake Watson',
      title: 'Frontend Engineer',
      company: 'MRI Technologies',
      image: BlakeWatson,
      bio: "Blake started writing code in the mid-2000s and hasn't yet decided to stop. He currently works on a spacesuit management system for NASA and commercial customers. He will gladly accept any offer to ride share into space. Blake has a mobility impairment and is passionate about assistive technology. When not doing nerd stuff, he can be found—*checks notes*—nevermind he only does nerd stuff.",
      topic: 'No build tool? No problem!',
    },
    {
      name: 'Brian Chirgwin',
      title: '',
      company: '',
      image: BrianChirgwin,
      bio: 'Brian Chirgwin is a developer with over 40+ years of experience in many different industries including healthcare, weather, law enforcement, and insurance. He has learned many programming languages over the years such as Pascal, C/C++, Java, JavaScript, Go and others. Used many frameworks such as Angular and React and even wrote one. He has a Bachelors Degree in Computer Science from Central Connecticut State University.\n\nBrian lives in East New Mexico, also known as West West Texas, with his wife Theresa and dog Roulette, a half Black Dachshund and Red Heeler and enjoys Whiskey and Bourbon.',
      topic: 'A Tour of Go and Why You Should Learn it',
    },
    {
      name: 'Christina Yu',
      title: 'Senior Software Engineer',
      company: 'Sigma Computing',
      image: ChristinaYu,
      bio: 'Senior Software Engineer at Sigma Computing. Previously at Citadel and PayPal. New York transplant sampling my way through the city, one bagel at a time. Currently saving my dog from being replaced by my AI coding assistant as my favorite coworker.',
      topic: 'Adopting AI Coding Tools: Enterprise Lessons in Speed and Scale',
    },
    {
      name: 'Jen Looper',
      title: 'Director of Developer Relations, Cloudinary',
      company: 'Cloudinary',
      image: JenLooper,
      bio: "Jen Looper is a creative technologist and educator with over 25 years' experience as a web and mobile developer and Developer Advocate. She is the Director of Developer Relations at Cloudinary and has worked as a software engineer and Developer Advocate at companies including Progress/Telerik and Microsoft and AWS, specializing in creating cross-platform mobile and web apps and applied machine learning and curricula. A published author, Jen has written Computer Science for Kids (https://cs4kids.club), a textbook aligned to CSTA standards for grades 6-8, as well as The Illustrated AWS Cloud (https://illustrated-aws.netlify.app/), both published by Wiley. She's a multilingual multiculturalist with a passion for web technologies, applied machine learning and AI and discovering new things every day. With a PhD in medieval French literature, Jen's area of focus is curriculum development and the application of sound pedagogy to technical topics. Visit Jen's personal site at https://www.jenlooper.com.",
      topic: 'A la Recherche du Temps Perdu: Searching for the Cozy Web',
    },
    {
      name: 'Josh Goldberg',
      title: 'Open Source Maintainer',
      company: '',
      image: JoshGoldberg,
      bio: "Hi, I'm Josh! I'm an independent full time open source developer. I work on projects in the TypeScript ecosystem, most notably typescript-eslint: a powerful static analysis toolset for JavaScript and TypeScript code. I'm also the author of Learning TypeScript (O'Reilly), a Microsoft MVP for developer technologies, and an active conference speaker. My personal projects range from static analysis to meta-languages to recreating retro games in the browser. Also cats.",
      topic: 'Why Is TypeScript Like This?',
    },
    {
      name: 'Kathleen McMahon',
      title: 'Sr Design Technologist',
      company: 'Electronic Arts ',
      image: KathleenMcMahon,
      bio: "Kathleen is an engineer, designer, & international conference speaker with deep industry experience fueling her passion for creating beautifully accessible apps. She's a Senior Design Technologist at Electronic Arts, a Design Tokens Community Group spec editor and races bikes — in costume — as the best lanterne-rouge cyclocrosser you'll ever meet.",
      topic: "🏖 The Beachcomber's Guide to Type-Safe Design Systems",
    },
    {
      name: 'Michael Lamb',
      title: 'Systems Analyst',
      company: 'C Spire',
      image: MichaelLamb,
      bio: 'Michael Lamb is a software engineer living in Jackson, Mississippi. He studied at Mississippi State University and Hinds Community College before taking a full-time position at C Spire where he is presently a Systems Analyst.',
      topic: 'You need a static-site blog',
    },
    {
      name: 'Nerando Johnson',
      title: 'Junior Frontend Developer',
      company: 'Hygiena',
      image: NerandoJohnson,
      bio: '',
      topic:
        'Negotiation is the Key... A Little Violence and Ice-Cream"(Side Project Planning: From Wild Ideas to Working Software)',
    },
    {
      name: 'Thorben Primke',
      title: 'Product Engineer',
      company: 'Pinterest',
      image: ThorbenPrimke,
      bio: 'Product Engineer and engineering leader at Pinterest since 2015, building innovative mobile features including Collages/Shuffles, Pinterest TV Studio, and creator tools. Specializes in Android development and React Native for consumer applications reaching millions of users. Previously: Facebook, Jelly Industries, Gowalla.',
      topic:
        'One Codebase, Three Platforms: Building Cross-Platform Products with Modern React Native',
    },
    {
      name: 'Trevor Acy',
      title: 'Product Coach',
      company: 'Delta Product Group',
      image: TrevorAcy,
      bio: "Trevor Acy is a Mississippi-based product leader and founder of Delta Product Group, where he helps startups and growing teams build better digital products through product coaching, strategy workshops, and fractional leadership. Trevor has led cross-functional teams, scaled products to hundreds of thousands of users, and coached founders across the Southeast. He's passionate about making modern product practices accessible to builders in emerging tech communities especially right here in Mississippi.",
      topic: 'We Built It… and Nothing Happened: The 4 Product Risks Developers Should Know',
    },
    {
      name: 'Vincent Falconi',
      title: 'Senior Web Operations Manager',
      company: 'Sumo Logic',
      image: VincentFalconi,
      bio: 'Vincent is a recovering full-stack developer based in Jackson, Mississippi. He cusses a lot, but only because he cares.',
      topic: 'DevTool Wars: Across the Browser-verse',
    },
  ]

  return (
    <section id='speakers' className='py-20 bg-gradient-to-b from-black to-purple-900/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Our <span className='text-orange-500'>Ghostly</span> Speakers
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            Meet the brilliant minds who will share their otherworldly knowledge and experience
          </p>
        </div>

        {/* <h3 className='text-white text-center mb-5'>Coming soon! 👻</h3> */}

        {/* <a
          href='https://forms.gle/Hzfeobmcbnnbombp7'
          className='bg-purple-600 hover:bg-purple-700 text-white text-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'
        >
          Apply to speak!
        </a> */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className='bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10'
            >
              <div className='text-center mb-4'>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className='w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-500/30 object-cover'
                />
                <h3 className='text-xl font-bold text-white mb-1'>{speaker.name}</h3>
                <p className='text-orange-500 font-medium mb-1'>{speaker.title}</p>
                <p className='text-purple-400 text-sm mb-3'>{speaker.company}</p>
              </div>

              {/* <p className='text-gray-400 text-sm mb-4 leading-relaxed'>{speaker.bio}</p> */}

              <div className='border-t border-gray-700 pt-4'>
                <h4 className='text-white font-semibold mb-2'>Speaking Topic:</h4>
                <p className='text-orange-400 text-sm font-medium'>{speaker.topic}</p>
              </div>

              {/* <div className='flex justify-center space-x-4 mt-4'>
                <Github className='h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors' />
                <Twitter className='h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors' />
                <Linkedin className='h-5 w-5 text-gray-400 hover:text-orange-500 cursor-pointer transition-colors' />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
