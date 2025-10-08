import { useState } from 'react'
import { Clock, MapPin } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import AbbeyPerini from '../assets/speakers/AbbeyPerini.jpg'
import AbhishekChatterjee from '../assets/speakers/AbhishekChatterjee.jpg'
import AmeerSami from '../assets/speakers/AmeerSami.jpg'
import AmyBlankenship from '../assets/speakers/AmyBlankenship.jpg'
import AudoraChalker from '../assets/speakers/AudoraChalker.jpg'
import BlakeWatson from '../assets/speakers/BlakeWatson.jpeg'
import BrianChirgwin from '../assets/speakers/BrianChirgwin.jpg'
import CalypsoHernandez from '../assets/speakers/CalypsoHernandez.png'
import ChrisDeMars from '../assets/speakers/ChrisDeMars.jpg'
import ChristinaYu from '../assets/speakers/ChristinaYu.jpeg'
import ElianVanCutsem from '../assets/speakers/ElianVanCutsem.png'
import JasonTorres from '../assets/speakers/JasonTorres.jpg'
import JenLooper from '../assets/speakers/JenLooper.jpeg'
import JoshGoldberg from '../assets/speakers/JoshGoldberg.jpg'
import KathleenMcMahon from '../assets/speakers/KathleenMcMahon.jpg'
import KennethLaFrance from '../assets/speakers/KennethLaFrance.jpeg'
import MichaelBrown from '../assets/speakers/MichaelBrown.jpg'
import MichaelLamb from '../assets/speakers/MichaelLamb.jpg'
import NerandoJohnson from '../assets/speakers/NerandoJohnson.jpg'
import RoxyRodriguezBecker from '../assets/speakers/RoxyRodriguezBecker.png'
import ThorbenPrimke from '../assets/speakers/ThorbenPrimke.png'
import ToddLibby from '../assets/speakers/ToddLibby.jpg'
import TrevorAcy from '../assets/speakers/TrevorAcy.jpg'
import VincentFalconi from '../assets/speakers/VincentFalconi.jpeg'
import WillKlein from '../assets/speakers/WillKlein.jpg'

interface Speaker {
  name: string
  title: string
  company?: string
  bio: string
  imageUrl: string
}

interface Talk {
  id: string
  time: string
  duration: string
  title: string
  description: string
  speaker?: Speaker
  type: 'talk' | 'break' | 'keynote'
  room?: string
}

interface ScheduleDay {
  date: string
  dayName: string
  talks: Talk[]
}

const scheduleData: ScheduleDay[] = [
  {
    date: 'October 21, 2025',
    dayName: 'Day 1',
    talks: [
      {
        id: '1',
        time: '8:30 AM',
        duration: '30 min',
        title: 'Registration & Coffee',
        description: 'Start your day with coffee and networking',
        type: 'break',
      },
      {
        id: '2',
        time: '9:00 AM',
        duration: '15 min',
        title: 'Haunted Hackathon Kickoff',
        description:
          'Join us as we kick off the first ever Haunted Hackathon. Learn more about the rules, judging, and prizes to be awarded at the end of the event!',
        type: 'talk',
        room: 'Main Hall',
      },
      {
        id: '3',
        time: '9:15 AM',
        duration: '2 hours 45 min',
        title: 'Morning Hackathon Session',
        description: 'Start working on your hackathon projects.',
        type: 'talk',
        room: 'Main Hall',
      },
      {
        id: '4',
        time: '12:00 PM',
        duration: '60 min',
        title: 'Lunch Break',
        description: 'Enjoy lunch, recharge, and connect with fellow developers',
        type: 'break',
      },
      {
        id: '5',
        time: '1:00PM',
        duration: '2 hours',
        title: 'Afternoon Hackathon Session',
        description: 'Continue working on your hackathon projects.',
        type: 'talk',
        room: 'Main Hall',
      },
      {
        id: '6',
        time: '3:00PM',
        duration: '30 min',
        title: 'Hackathon Presentations & Judging',
        description: 'Present what you built for the judges and fellow participants.',
        type: 'talk',
        room: 'Main Hall',
      },
      {
        id: '7',
        time: '3:30PM',
        duration: '30 min',
        title: 'Hackathon Awards Presentation',
        description: 'Presentation of hackathon winners and awards.',
        type: 'talk',
        room: 'Main Hall',
      },
    ],
  },
  {
    date: 'October 22, 2025',
    dayName: 'Day 2',
    talks: [
      {
        id: '8',
        time: '8:30 AM',
        duration: '30 min',
        title: 'Registration & Coffee',
        description: 'Fuel up for another great day',
        type: 'break',
      },
      {
        id: '9',
        time: '9:00 AM',
        duration: '10 min',
        title: 'Welcome & Intro',
        description: '',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Kenneth LaFrance',
          title: 'MC',
          bio: '',
          imageUrl: KennethLaFrance,
        },
      },
      {
        id: '10',
        time: '9:10 AM',
        duration: '25 min',
        title: 'Why Is TypeScript Like This?',
        description:
          "Have you ever wondered why TypeScript chooses to yell at you over perfectly valid code? There had to have been a reason. Let's talk about it!\nJoin Josh Goldberg, author of Learning TypeScript (O'Reilly), in a fun and practical dive through the most common \"ugh why?!\"s of TypeScript's type checking. Each situation will be paired with our favorite phrase, \"it depends!\", and real-world bugs caught by TypeScript. You'll see why TypeScript sometimes chooses to be overly lenient, sometimes chooses to be more strict, and -best of all- how you can configure TypeScript's preferences in your TSConfig.\nEven if you're not a TypeScript developer yourself, you'll appreciate the ideas and software patterns shown in this talk. Let's get strongly typed! 💪",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Josh Goldberg',
          title: 'Open Source Maintainer',
          bio: 'Hi, I’m Josh! I’m an independent full time open source developer. I work on projects in the TypeScript ecosystem, most notably typescript-eslint: a powerful static analysis toolset for JavaScript and TypeScript code. I’m also the author of Learning TypeScript (O’Reilly), a Microsoft MVP for developer technologies, and an active conference speaker. My personal projects range from static analysis to meta-languages to recreating retro games in the browser. Also cats.',
          imageUrl: JoshGoldberg,
        },
      },
      {
        id: '11',
        time: '9:40 AM',
        duration: '25 min',
        title: 'We Built It… and Nothing Happened: The 4 Product Risks Developers Should Know',
        description:
          'Ever built and launched something that seemed solid, only to have it land with a thud? In this talk, I share the story of Vault, a real MVP we built that never gained traction. We’ll walk through what went wrong, and how it maps to four key product risks every developer should understand: valuable, usable, feasible, and viable. Most engineering teams are great at solving for feasibility, but the biggest risks often hide in the other three. This talk will help you spot assumptions early, work more effectively with product and design, and avoid building the wrong thing beautifully.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Trevor Acy',
          title: 'Product Coach',
          company: 'Delta Product Group',
          bio: 'Trevor Acy is a Mississippi-based product leader and founder of Delta Product Group, where he helps startups and growing teams build better digital products through product coaching, strategy workshops, and fractional leadership. Trevor has led cross-functional teams, scaled products to hundreds of thousands of users, and coached founders across the Southeast. He’s passionate about making modern product practices accessible to builders in emerging tech communities especially right here in Mississippi.',
          imageUrl: TrevorAcy,
        },
      },
      {
        id: '12',
        time: '10:10 AM',
        duration: '20 min',
        title: 'Break',
        description: 'Grab a snack and network with your fellow developers',
        type: 'break',
      },
      {
        id: '13',
        time: '10:30 AM',
        duration: '25 min',
        title: '🏖 The Beachcomber’s Guide to Type-Safe Design Systems',
        description:
          'Building a design system feels like beachcombing: scattered components, mismatched tokens, mystery buttons. Each wave brings new drift. This talk shows how TypeScript enforces type-safe tokens, APIs, and patterns to transform chaos into a scalable, reliable system—curating a collection that withstands the tides of change. Walk away with strategies to harden your system against technical debt.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Kathleen McMahon',
          title: 'Sr Design Technologist',
          company: 'Electronic Arts ',
          bio: 'Kathleen is an engineer, designer, & international conference speaker with deep industry experience fueling her passion for creating beautifully accessible apps. She’s a Senior Design Technologist at Electronic Arts, a Design Tokens Community Group spec editor and races bikes — in costume — as the best lanterne-rouge cyclocrosser you’ll ever meet.',
          imageUrl: KathleenMcMahon,
        },
      },
      {
        id: '14',
        time: '11:00 AM',
        duration: '25 min',
        title: 'Ship It First, Fix It Later: Problem-Solving with Vanilla JS',
        description:
          'In this talk, I address a specific medical challenge faced by many families and healthcare providers, and how I initially created a solution via a practical web app built in Vanilla JS. I tied in 6 simple steps that people can plan/implement if they are in a similar situation and too afraid to just hit publish (and share!). The talk is inspired by personal experience with my medically complex kiddo. The web app was designed to simplify the calculation and management of gtube (gastronomy tube) feed rates, along with assisting bridge the communication gap between parents, nurses, and dietitians. Despite being a minimal viable product, the Tube Feed Tracker gained significant organic usage within the medical community. Encouraged by feedback, the project evolved through several iterations, and I upgraded it with modern web technologies, such as React, TailwindCSS, and OpenAI integrations. This experience focuses on the value of sharing functional solutions early to assist communities and taking the time to refine and expand functionality later. While it may sound like a somber topic, I let my personality shine through by not taking myself too seriously, and sprinkling sarcastic and humorous comments throughout. (DEMO https://www.linkedin.com/feed/update/urn:li:activity:7348500349403484164/ )',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Roxy Rodriguez-Becker',
          title: 'Software Engineer',
          company: 'RodBeck Digital',
          bio: "Hi! I'm Roxy. I have a background in education, web development, and content creation. I am a full time librarian and part time freelance software engineer. Most recently I was on CodeTV's Web Dev Challenge and emceed at RenderATL. I am a mother of 3 in Houston, Texas. I love podcasts, 5am workouts, and problem-solving. I am actively on the hunt for a developer, support, or dev rel role!I am a mother of 3 in Houston, Texas. I love podcasts, audiobooks, 5am workouts, and photographing it all. I am actively on the hunt for my first official job in tech!",
          imageUrl: RoxyRodriguezBecker,
        },
      },
      {
        id: '15',
        time: '11:30 AM',
        duration: '25 min',
        title: 'No build tool? No problem!',
        description:
          "Modern web development is inundated with dependency management and build tools that, while ostensibly created to make you more productive, introduce complication and technical debt. But while us developers were busy webpack-ing our way to success, the web platform got good. We can now enjoy such things as CSS nesting, JavaScript modules, and even NPM packages without the need for a build step. In this talk, we'll explore the exhilarating freedom of forgoing build tools while retaining some of the niceties that they are known for providing.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Blake Watson',
          title: 'Frontend Engineer',
          company: 'MRI Technologies',
          bio: 'Blake started writing code in the mid-2000s and hasn’t yet decided to stop. He currently works on a spacesuit management system for NASA and commercial customers. He will gladly accept any offer to ride share into space. Blake has a mobility impairment and is passionate about assistive technology. When not doing nerd stuff, he can be found—*checks notes*—nevermind he only does nerd stuff.',
          imageUrl: BlakeWatson,
        },
      },
      {
        id: '16',
        time: '12:00 PM',
        duration: '45 min',
        title: 'Lunch Break',
        description: 'Network and enjoy a meal',
        type: 'break',
      },
      {
        id: '17',
        time: '12:45 PM',
        duration: '25 min',
        title: 'A Little Violence and Ice-Cream: From Chaos to Code',
        description:
          "Every developer has a graveyard of abandoned side projects—brilliant ideas that died in the planning phase or halfway through execution. But what if the secret to successful side projects isn't better time management or more motivation? What if it's learning to negotiate with yourself, your scope, and reality itself? In this talk, we'll explore an unconventional framework for side project planning that embraces controlled chaos. Drawing from negotiation theory, we'll discover how to: - Bargain with your own perfectionism (the violence). - Reward incremental progress (the ice-cream). - Find the sweet spot between ambition and achievability. Through real examples of projects that survived the brutal transition from conception to deployment, you'll learn practical strategies for scope management, feature prioritization, and maintaining momentum when the initial excitement fades. Whether you're building your first side project or your fifteenth, this talk will arm you with tools to negotiate your way from \"wouldn't it be cool if...\" to \"here's the GitHub repo.\"",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Nerando Johnson',
          title: 'Junior Frontend Developer',
          company: 'Hygiena',
          bio: '',
          imageUrl: NerandoJohnson,
        },
      },
      {
        id: '18',
        time: '1:15 PM',
        duration: '25 min',
        title: 'A la Recherche du Temps Perdu: Searching for the Cozy Web',
        description:
          'Proust’s masterwork describing France’s high society of over 100 years ago still holds the world’s record for the longest novel. It explores, among many other topics, the concept of involuntary memory, those little sparks of remembrance that trigger pathways, rabbit holes, and deviations. Unbeknownst to many, the web of 10 years ago had a Proustian aspect when developers created the ‘cozy web’, a space filled with web rings, virtual pets, cozy corners, silly spaces, useless deviations, endless threads, and all the ‘mind pops’ available to trigger human creativity. In this talk, let’s walk through some of the elements of the cozy web and think about how far we have come from this moment, especially with the advent of generative AI and the predominance of the chat interface. As we may be heading to the post-API, post-browser, and even post smartphone era, how can we channel the heritage we created and recapture the joys of the cozy web? What if the future of AI could learn from the past of the internet? In this talk, we revisit the cozy web: a whimsical, personal, and creative corner of the early internet, drawing surprising parallels to Proust’s idea of involuntary memory. As we move toward a world shaped by generative AI and post-browser experiences, we’ll explore how to reclaim the joy, curiosity, and serendipity that once made the web feel human.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Jen Looper',
          title: 'Director of Developer Relations',
          company: 'Cloudinary',
          bio: "Jen Looper is a creative technologist and educator with over 25 years' experience as a web and mobile developer and Developer Advocate. She is the Director of Developer Relations at Cloudinary and has worked as a software engineer and Developer Advocate at companies including Progress/Telerik and Microsoft and AWS, specializing in creating cross-platform mobile and web apps and applied machine learning and curricula. A published author, Jen has written Computer Science for Kids (https://cs4kids.club), a textbook aligned to CSTA standards for grades 6-8, as well as The Illustrated AWS Cloud (https://illustrated-aws.netlify.app/), both published by Wiley. She's a multilingual multiculturalist with a passion for web technologies, applied machine learning and AI and discovering new things every day. With a PhD in medieval French literature, Jen's area of focus is curriculum development and the application of sound pedagogy to technical topics. Visit Jen's personal site at https://www.jenlooper.com.",
          imageUrl: JenLooper,
        },
      },
      {
        id: '19',
        time: '1:45 PM',
        duration: '25 min',
        title: 'Know Your JS: SBOMs for Frontend Devs',
        description:
          "Ever wonder what’s lurking in the dark corners of your node_modules, like unidentified flying dependencies sneaking aboard your project? In an age of escalating software supply chain attacks, knowing exactly what you're shipping is as vital as tracking strange lights in the sky. This talk will shine a beam on SBOMs (Software Bills of Materials), explaining why frontend developers should care and how to generate one using tools like CycloneDX and Syft. You’ll leave with the skills to map your entire dependency galaxy. No security clearance required, just your JavaScript and an explorer’s mindset.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Chris DeMars',
          title: 'Senior Developer Advocate',
          company: 'TuxCare',
          bio: "Chris DeMars is a Senior Developer Advocate. He has over 20 years of technical experience and speaks globally on various frontend topics and has received accolades for his community contributions, including the prestigious Microsoft MVP and Progress Champion awards to name a few. Chris is passionate about enhancing web development and helping developers achieve their goals. In his free time, he enjoys rating Detroit-style pizza, searching for Bigfoot, and investigating UFO's.",
          imageUrl: ChrisDeMars,
        },
      },
      {
        id: '20',
        time: '2:15 PM',
        duration: '15 min',
        title: 'Break',
        description: 'Grab a snack and network with your fellow developers',
        type: 'break',
      },
      {
        id: '21',
        time: '2:30 PM',
        duration: '25 min',
        title: 'You need a static-site blog',
        description:
          "In today's digital landscape, establishing a portable, maintainable, and centralized hub for your personal brand has become essential for professionals, creators, and thought leaders. This talk explores how static site generators offer the ideal balance between content focus and customization flexibility, making them the perfect foundation for personal blogs that truly represent your unique voice and expertise. Unlike platform-dependent solutions that lock you into proprietary ecosystems, static site generators provide complete ownership and portability of your content while maintaining the simplicity that keeps you focused on what matters most: writing and sharing your ideas. We'll examine how modern SSGs like Jekyll, enable you to create highly customizable blogs through templating systems that can evolve with your brand, all while generating lightning-fast, secure websites that perform exceptionally across all devices. The presentation will demonstrate practical approaches to content organization, theme development, and deployment strategies that ensure your blog remains maintainable as it grows. We'll also cover how SSGs integrate seamlessly with version control systems, enabling collaborative workflows and providing a complete history of your content evolution. Through real-world examples, attendees will see how static site generators eliminate the overhead of database management, security patches, and server maintenance, allowing creators to focus entirely on content creation while still having full control over design and functionality. Whether you're a developer looking to establish your professional presence, a designer showcasing your portfolio, or an entrepreneur building thought leadership, this talk will show you how static site generators provide the perfect foundation for a blog that truly serves as your digital home base—one that you own, control, and can take anywhere your career leads you.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Michael Lamb',
          title: 'Systems Analyst',
          company: 'C Spire',
          bio: 'Michael Lamb is a software engineer living in Jackson, Mississippi. He studied at Mississippi State University and Hinds Community College before taking a full-time position at C Spire where he is presently a Systems Analyst.',
          imageUrl: MichaelLamb,
        },
      },
      {
        id: '22',
        time: '3:00 PM',
        duration: '25 min',
        title: "That's bullshit: using the web to hold power accountable",
        description:
          "Whether you are doomscrolling or hate-reading, it's almost impossible to be online without the gauges on your emotions dashboard burning bright red. It's easy to become stuck in those feelings but in today's reality, tech workers have talents, access, and power that require us to act. In this talk, I'll share how I managed my own breaking point by using hypertext, HTML, and JavaScript--core technologies of the web--to speak truth to power, and share ways others might do the same.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Vincent Falconi',
          title: 'Senior Web Operations Manager',
          company: 'Sumo Logic',
          bio: 'Vincent is a recovering full-stack developer based in Jackson, Mississippi. He cusses a lot, but only because he cares.',
          imageUrl: VincentFalconi,
        },
      },
      {
        id: '23',
        time: '3:30 PM',
        duration: '10 min',
        title: 'Break',
        description: 'Grab a snack and network with your fellow developers',
        type: 'break',
      },
      {
        id: '24',
        time: '3:40 PM',
        duration: '25 min',
        title: 'Post It Anyway: From Blank Screen to Finding Your Voice in Tech',
        description:
          'This talk is for developers, designers, engineers, and technologists who want to show up online but get stuck at the starting line. Drawing from personal experience, this session explores how to overcome perfectionism, why consistency beats virality, and what kinds of posts actually resonate in the tech community. You’ll walk away with practical tips for generating content ideas, using platforms like Twitter or Bluesky more intentionally, and sharing your work in a way that builds community.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Calypso Hernandez',
          title: 'Executive Operations Lead',
          company: 'This Dot Labs',
          bio: 'Calypso is a versatile professional with a unique background in theatre, education, and tech. After years of experience in theatre and teaching, Calypso recently transitioned into the tech industry, working with innovative startups where she applies her skills in communication, design, and collaboration to fast-paced, high-growth environments. This blend of creative and technical experience has equipped Calypso with a deep understanding of how to foster constructive feedback, empower teams, and drive continuous improvement. Calypso also thrives on building strong, connected communities. She brings a fresh perspective on collaboration, communication, and community building in both creative and tech spaces.',
          imageUrl: CalypsoHernandez,
        },
      },
      {
        id: '25',
        time: '4:10 PM',
        duration: '25 min',
        title:
          'Taming the Caveman: Understanding and Managing Stress and Anxiety in a Hyperconnected World',
        description:
          'In today’s always-on environment of perpetual notifications, back-to-back meetings, and global uncertainty, stress has become a defining feature of modern life. Yet our brains are still wired for the Stone Age, reacting to perceived threats with primal urgency that can sabotage our well-being and performance. This session unpacks the science of stress and anxiety in an engaging, relatable way. We’ll explore: The difference between eustress (beneficial stress) and distress (harmful stress) How the amygdala can hijack our rational thinking in moments of pressure—what I call “the caveman effect” Real-world examples, including high-profile public meltdowns, to illustrate how even the most successful people are vulnerable Practical strategies for recognizing triggers and regaining control over your internal “control panel” Attendees will walk away with insights into how stress hormones shape their reactions, how to balance emotion and reason, and what tools and resources can help manage anxiety proactively.  Whether you’re a leader seeking to build healthier teams or an individual striving for better resilience, this session offers a compelling blend of neuroscience, storytelling, and actionable guidance.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Abhisek Chatterjee',
          title: 'Director, IT',
          company: 'C Spire',
          bio: '20+ Years’ experience in the Wireless and Telecom Industry. Brilliant Problem Solver, an expert in, separating symptoms from causes and resolving issues at the root. Highly experienced in working with executive leadership in formulating strategies and in anchoring their execution. Expert in all things web, including e-commerce, user experience mapping, and usability best practices. Leading the Digital Transformation of the largest privately held wireless carrier in the U.S. ',
          imageUrl: AbhishekChatterjee,
        },
      },
      {
        id: '26',
        time: '4:40 PM',
        duration: '25 min',
        title: 'Beyond Vibe Coding: High Velocity Engineering with AI Across the SDLC',
        description:
          'AI-assisted development isn\'t just about autocompleting code—it\'s about accelerating the entire software delivery lifecycle. In this talk, we’ll explore High Velocity Engineering, a disciplined, AI-augmented approach to software development that leverages intelligent agents from specification to deployment. You’ll see how we use AI not just to write code, but to: Translate product requirements into structured specifications Build secure, scalable CI/CD pipelines Automate environment provisioning and infrastructure as code Continuously evolve systems based on real-time insights We’ll go beyond the hype of ""prompt-driven development"" and dig into how developers can collaborate with AI agents to produce systems that are well-architected, maintainable, and testable. This is not about replacing engineering judgment—it\'s about amplifying it. High Velocity Engineering empowers you to move faster and smarter. Whether you\'re an individual contributor or a team lead, this session will give you practical strategies and real-world patterns to responsibly integrate AI throughout your SDLC and redefine what developer velocity means in 2025.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Michael Brown',
          title: 'Senior Software Engineer',
          company: 'Synaptic Weave',
          bio: 'Michael Brown is a seasoned technologist with over 30 years of experience in software development and innovation. Michael is a leading voice in Hypervelocity Engineering (HVE)—a framework for eliminating engineering friction to deliver value at speed. He is also the founder of the Juneteenth Conference, launched in 2020 to celebrate and elevate Black professionals in tech. Through his work, Michael bridges innovation and inclusion to drive lasting impact.',
          imageUrl: MichaelBrown,
        },
      },
      {
        id: '27',
        time: '5:05PM',
        duration: '10 min',
        title: 'Closing & Costume Contest Winner',
        description: '',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Kenneth LaFrance',
          title: 'MC',
          bio: '',
          imageUrl: KennethLaFrance,
        },
      },
    ],
  },
  {
    date: 'October 23, 2025',
    dayName: 'Day 3',
    talks: [
      {
        id: '28',
        time: '8:30 AM',
        duration: '30 min',
        title: 'Registration & Coffee',
        description: 'Fuel up for another great day',
        type: 'break',
      },
      {
        id: '29',
        time: '9:00 AM',
        duration: '10 min',
        title: 'Welcome & Intro',
        description: '',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Kenneth LaFrance',
          title: 'MC',
          bio: '',
          imageUrl: KennethLaFrance,
        },
      },
      {
        id: '30',
        time: '9:10 AM',
        duration: '25 min',
        title: 'Safety & Deception: The Impact on Accessibility',
        description:
          'The talk will focus on the work I have done for the W3C & WCAG 3 guidelines regarding safety and deception and the impact on accessibility as well as the inner parts that make up the guideline in development for the future WCAG 3 guidelines.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Todd Libby',
          title: 'Founder, RouteReady, W3C Invited Expert WCAG',
          bio: 'Desert nomad, active lobsterholic, former executive head chef.',
          imageUrl: ToddLibby,
        },
      },
      {
        id: '31',
        time: '9:40 AM',
        duration: '25 min',
        title: 'The schematic to community as told by Rick Astley',
        description:
          "It's simple. Never Give Up, Never let anyone down, never run around or dessert (sp) anyone. Never make them cry, or say goodbye, never tell lies or hurt them. Rick Astley put it so eloquently in the early 80's but WTF does that have to do with community building? Well let me show you.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Jason Torres',
          title: 'Community Manager',
          company: 'Torc',
          bio: 'uh. well I spent 15 years, then moved over to tech where I taught myself to code and then realized hey I want to help people and moved to community. Now I talk about how Rick Astley created the best framework to create thriving tech communities and why quitting shit is ok to do sometimes.',
          imageUrl: JasonTorres,
        },
      },
      {
        id: '32',
        time: '10:10 AM',
        duration: '20 min',
        title: 'Break',
        description: 'Grab a snack and network with your fellow developers',
        type: 'break',
      },
      {
        id: '33',
        time: '10:30 AM',
        duration: '25 min',
        title: '#gitPanic - Restoring Lost Work',
        description:
          "When it's time to run a git command, do you #gitPanic? Have you ever opened a PR and suddenly realized some of your or your coworker's work is missing? This talk will give you some git confidence. Learn how make sure you have a back up copy before you even start, and how to stop commands that are going horribly wrong. Then we'll talk about how git maintains references for months, and how you can use those refs to restore any recent lost work.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Abbey Perini',
          title: 'Mid-level Vue Developer',
          company: 'Hygiena',
          bio: "Abbey Perini is many things - a metro Atlanta native, a person of many hobbies, and a full-stack web developer. Passionate about accessibility, she's worked in Vue, React, and even AngularJS (2013). She's happiest problem solving in the front-end, back-end, and all the APIs and microservices in between. She's spent her development career rectifying tech debt in existing codebases. She loves blogging and speaking about fun and useful things about programming, especially if it helps other developers.",
          imageUrl: AbbeyPerini,
        },
      },
      {
        id: '34',
        time: '11:00 AM',
        duration: '25 min',
        title: 'A JavaScript Less Future?',
        description:
          "In recent years we've seen browsers deliver powerful APIs such as popover, anchor, Navigation, View Transition, interpolate-size, :has(), and many more. Each addresses a problem that was previously only solve-able with JavaScript. What does this mean for the future of React development? A future with less JavaScript for interaction logic. In this talk we'll discuss how you can leverage these new APIs and the impacts they will have on, application performance, developer experience, user experience, and the future of React app development.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Ameer Sami',
          title: 'Senior Software Engineer',
          company: 'S&C Electric Company',
          bio: 'Ameer is a Senior Software Engineer with 15+ years of experience. Behind the keyboard he is passionate about developer experience, design systems, React, and building cool stuff. AFK he loves to bake and pick up heavy circles.',
          imageUrl: AmeerSami,
        },
      },
      {
        id: '35',
        time: '11:30 AM',
        duration: '25 min',
        title:
          'One Codebase, Three Platforms: Building Cross-Platform Products with Modern React Native',
        description:
          "Web and mobile platforms are converging, and React Native has emerged as the bridge bringing them together. This talk explores how developers can leverage their existing web and React expertise to build products that run seamlessly across web, iOS, and Android platforms. Drawing from real-world experience building a web-first product with React Native and adding a mobile companion app while maximizing code sharing, this talk will focus on the key points that enabled a truly cross-platform codebase and development experience. React Native was released in 2015, but we'll explore the recent changes in developer tools, cross-platform support, and performance that made this possible. Attendees will leave intrigued by React Native's potential and equipped with practical guidance to start their own cross-platform journey.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Thorben Primke',
          title: 'Product Engineer',
          company: 'Pinterest',
          bio: 'Product Engineer and engineering leader at Pinterest since 2015, building innovative mobile features including Collages/Shuffles, Pinterest TV Studio, and creator tools. Specializes in Android development and React Native for consumer applications reaching millions of users. Previously: Facebook, Jelly Industries, Gowalla.',
          imageUrl: ThorbenPrimke,
        },
      },
      {
        id: '36',
        time: '12:00 PM',
        duration: '45 min',
        title: 'Lunch Break',
        description: 'Network and enjoy a meal',
        type: 'break',
      },
      {
        id: '37',
        time: '12:45 PM',
        duration: '25 min',
        title: 'happy little screens: the art of your dev environment',
        description:
          'At this turning point in our industry created by AI technologies many people are looking back with nostalgia to the simpler times of the early web when fun, whimsy and weirdness were common place. While many of us can\'t exactly express that spirit in the code we write at our jobs, there are still ways to recapture that magic. happy little screens is a talk that explores ways technologists can recapture some of the spirit of the old web by injecting delight and beauty into their development environments. We "set the mood" or "set the scene" for so many things in our lives, why not do the same for the interfaces and tools we use on a daily basis? Why not actually enjoy setting up your new machine instead of dreading it? This talk will explore ways to add both enjoyment and efficiency to any desktop, terminal or code editor and seeks to inspire attendees to think about the ways in which they can make their own dev environments work for them both practically and aesthetically.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Audora Chalker',
          title: 'Frontend Engineer',
          bio: "Audora is a frontend engineer from Atlanta with over 7 years of proud pixel pushing experience. On the tech side of things, she's passionate about good developer experiences and crafting great component libraries. On the not-tech side of things, she's passionate about solo travel (when she can swing it) and  making her home the homiest it can be",
          imageUrl: AudoraChalker,
        },
      },
      {
        id: '38',
        time: '1:15 PM',
        duration: '25 min',
        title: 'TBD',
        description: 'TBD',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Nader Dabit',
          title: '',
          company: '',
          bio: '',
          imageUrl: '',
        },
      },
      {
        id: '39',
        time: '1:45 PM',
        duration: '25 min',
        title: 'A Tour of Go and Why You Should Learn it',
        description:
          "This talk aims to convince developers that learning Go can enhance programming abilities and the overall development experience. Go's design philosophy encourages a pragmatic approach to software construction, which helps developers write clearer, more efficient, and maintainable code. This talk will include an overview of the Go language, tools, ecosystem and its minimalistic pragmatic approach by writing an http server containing several routes which will give an overview of Go syntax, some standard libraries, testing, and more.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Brian Chirgwin',
          title: '',
          bio: 'Brian Chirgwin is a developer with over 40+ years of experience in many different industries including healthcare, weather, law enforcement, and insurance. He has learned many programming languages over the years such as Pascal, C/C++, Java, JavaScript, Go and others. Used many frameworks such as Angular and React and even wrote one. He has a Bachelors Degree in Computer Science from Central Connecticut State University. Brian lives in East New Mexico, also known as West West Texas, with his wife Theresa and dog Roulette, a half Black Dachshund and Red Heeler and enjoys Whiskey and Bourbon.',
          imageUrl: BrianChirgwin,
        },
      },
      {
        id: '40',
        time: '2:15 PM',
        duration: '15 min',
        title: 'Break',
        description: 'Grab a snack and network with your fellow developers',
        type: 'break',
      },
      {
        id: '41',
        time: '2:30 PM',
        duration: '25 min',
        title: "Don't Miss the Forest for the Trees",
        description:
          'This is a case study talk about finding good abstractions. Many people will tell you that abstractions take extra time and should be avoided. In this talk, I walk through the example of a countdown timer in React and show how finding the right abstraction had unexpected benefits in a real project.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Amy Blankenship',
          title: 'FullStack Developer',
          bio: "After getting a BFA from Mississippi State University, I fell into development when I was too inexperienced to understand job descriptions. In the intervening years, I've worked in a variety of technologies, working for myself as well as for companies as small as 10 people up to large corporations and government contractors.",
          imageUrl: AmyBlankenship,
        },
      },
      {
        id: '42',
        time: '3:00 PM',
        duration: '25 min',
        title: 'The Web Can Be Weird',
        description:
          "The web is often seen as a place for forms, buttons, and websites, but it's capable of so much more. In this interactive session, we’ll step away from the usual frontend frameworks and dive into the weird, wonderful world of native web APIs that let your browser do things you probably didn’t know were possible. We'll explore the untapped potential of APIs like WebHID, WebMIDI, WebSerial, and others—technologies that allow your web app to talk directly to hardware, send MIDI signals to real instruments, and even control synthesizers or gamepads, all using vanilla JavaScript. No build tools, no React! Just raw browser power. Along the way, we’ll livedemo a few fun and chaotic experiments, and maybe even make some music together (audience participation optional but encouraged). Whether you're a frontend dev looking for inspiration or just curious about what else your browser can do, this talk will open your eyes to the playful side of the web. Because sometimes, the best way to learn is to get weird.",
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Elian Van Cutsem',
          title: 'CTO @ Vulpo | Lead DevRel @ React Bricks | Astro Maintainer',
          bio: 'Elian Van Cutsem or "ElianCodes" is a full-stack developer, creative technologist, and all-around internet troublemaker based in Belgium. He’s the CTO at Vulpo and works in Developer Relations at React Bricks focusing on developer experience, documentation, and education. Previously, he was a Software Engineer and core maintainer at Astro. Elian is also a co-organizer of several major JavaScript communities and events, including BeJS, React Paris, React Brussels, and React Africa. Alongside his professional work, he creates provocative and experimental AI projects, designed to challenge our assumptions about ethics, automation, and human behavior. His work blends code and commentary, often in ways that are both hilarious and uncomfortably real. Elian is known for his passion, puns, and offbeat sense of humor. His talks combine technical insight with a strong dose of creative chaos—guaranteed fun on stage.',
          imageUrl: ElianVanCutsem,
        },
      },
      {
        id: '43',
        time: '3:30 PM',
        duration: '10 min',
        title: 'Break',
        description: 'Grab a snack and network with your fellow developers',
        type: 'break',
      },
      {
        id: '44',
        time: '3:40 PM',
        duration: '25 min',
        title: 'Adopting AI Coding Tools: Enterprise Lessons in Speed and Scale',
        description:
          'This talk explores real-world lessons from rolling out AI coding tools in enterprise frontend development at Sigma Computing. Despite rapid initial adoption—60% of developers using the tool weekly—usage varied widely. The talk unpacks key barriers, such as hallucinations and lack of context in large codebases, and presents actionable principles to boost effectiveness: providing better context, automating tedious tasks, and integrating AI throughout the workflow. It also highlights areas, such as debugging, where the coding tool had a noticeable edge over human understanding, accelerating time to resolution. With practical examples and insights on a few mindset shifts that have empowered developers, it’s a candid look at how to make AI a true coding partner— not just a novelty.',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Christina Yu',
          title: 'Senior Software Engineer',
          company: 'Sigma Computing',
          bio: 'Senior Software Engineer at Sigma Computing. Previously at Citadel and PayPal. New York transplant sampling my way through the city, one bagel at a time. Currently saving my dog from being replaced by my AI coding assistant as my favorite coworker.  ',
          imageUrl: ChristinaYu,
        },
      },
      {
        id: '45',
        time: '4:10 PM',
        duration: '25 min',
        title: 'DevTool Wars: Across the Browser-verse',
        description:
          'Most developers use Chrome DevTools, but what about Firefox, Safari, and Edge? Venture off the well-traveled path, and we’ll find each browser hiding its own set of overlooked tools. We’ll explore how they uniquely tackle accessibility, design, debugging, and more. Let’s follow the firefox, dive beneath the chrome on a cross-browser safari, and discover where each dev tool has the edge!',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Will Klein',
          title: 'Lead Developer Relations Engineer, Developer Experience',
          company: 'North',
          bio: "Will is dedicated to crafting exceptional developer experiences that help us increase our understanding, creativity, and flow. Throughout his career, he's shared expertise building developer tools, organized meetups, and helped build thriving technical communities. Now at North Developer, he leads the effort to elevate the developer experience of their APIs and payments platform, through clear documentation, practical examples, and by working with the developer community to solve their challenges.",
          imageUrl: WillKlein,
        },
      },
      {
        id: '47',
        time: '4:40 PM',
        duration: '10 min',
        title: 'Closing & Costume Contest Winner',
        description: '',
        type: 'talk',
        room: 'Main Hall',
        speaker: {
          name: 'Kenneth LaFrance',
          title: 'MC',
          bio: '',
          imageUrl: KennethLaFrance,
        },
      },
    ],
  },
]

const TalkCard = ({ talk }: { talk: Talk }) => {
  if (talk.type === 'break') {
    return (
      <Card className='p-4 border-muted bg-gray-900'>
        <div className='flex items-start gap-4'>
          <div className='flex flex-col items-center min-w-[80px]'>
            <span className='text-sm font-medium text-muted-foreground'>{talk.time}</span>
            <span className='text-xs text-muted-foreground'>{talk.duration}</span>
          </div>
          <div className='flex-1'>
            <h3 className='font-semibold text-white'>{talk.title}</h3>
            <p className='text-sm text-gray-400 mt-1'>{talk.description}</p>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className='p-4 cursor-pointer transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/20 bg-gray-800'>
          <div className='flex items-start gap-4'>
            <div className='flex flex-col items-center min-w-[80px]'>
              <span className='text-sm font-medium text-orange-500'>{talk.time}</span>
              <span className='text-xs text-muted-foreground'>{talk.duration}</span>
            </div>

            <div className='flex-1 min-w-0'>
              <div className='flex items-start gap-3 mb-2'>
                {talk.speaker && (
                  <Avatar className='h-12 w-12 border-2 border-primary/20'>
                    <AvatarImage src={talk.speaker.imageUrl} alt={talk.speaker.name} />
                    <AvatarFallback>{talk.speaker.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div className='flex-1 min-w-0'>
                  <h3 className='font-semibold text-white text-base sm:text-lg leading-tight'>
                    {talk.title}
                  </h3>
                  {talk.speaker && (
                    <p className='text-sm text-muted-foreground mt-1'>
                      {talk.speaker.name}
                      {talk.speaker.company && ` • ${talk.speaker.company}`}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-2xl pr-8'>{talk.title}</DialogTitle>
        </DialogHeader>

        <div className='space-y-6'>
          {talk.speaker && (
            <div className='flex items-start gap-4'>
              <Avatar className='h-20 w-20 border-2 border-primary'>
                <AvatarImage src={talk.speaker.imageUrl} alt={talk.speaker.name} />
                <AvatarFallback>{talk.speaker.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className='flex-1'>
                <h3 className='font-semibold text-lg'>{talk.speaker.name}</h3>
                <p className='text-sm text-muted-foreground'>
                  {talk.speaker.title}
                  {talk.speaker.company && ` at ${talk.speaker.company}`}
                </p>
              </div>
            </div>
          )}

          <div>
            <h4 className='font-semibold mb-2 text-orange-500'>Talk Description</h4>
            <p className='text-foreground leading-relaxed'>{talk.description}</p>
          </div>

          {talk.speaker?.bio && (
            <div>
              <h4 className='font-semibold mb-2 text-orange-500'>About the Speaker</h4>
              <p className='text-muted-foreground leading-relaxed'>{talk.speaker.bio}</p>
            </div>
          )}

          <div className='flex flex-wrap gap-4 pt-4 border-t border-border'>
            <div className='flex items-center gap-2'>
              <Clock className='h-4 w-4 text-orange-500' />
              <div>
                <p className='text-xs text-muted-foreground'>Time</p>
                <p className='text-sm font-medium'>{talk.time}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <Clock className='h-4 w-4 text-orange-500' />
              <div>
                <p className='text-xs text-muted-foreground'>Duration</p>
                <p className='text-sm font-medium'>{talk.duration}</p>
              </div>
            </div>
            {talk.room && (
              <div className='flex items-center gap-2'>
                <MapPin className='h-4 w-4 text-orange-500' />
                <div>
                  <p className='text-xs text-muted-foreground'>Room</p>
                  <p className='text-sm font-medium'>{talk.room}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1')

  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-8 sm:py-12'>
      <div className='text-center mb-8 sm:mb-12'>
        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4'>
          <span className='text-orange-500'>Conference</span>{' '}
          <span className='text-purple-400'>Schedule</span>
        </h2>
        <p className='text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto'>
          Join us for three spine-tingling days of software development insights
        </p>
      </div>

      <Tabs value={activeDay} onValueChange={setActiveDay} className='w-full'>
        <TabsList className='grid w-full grid-cols-3 mb-8 h-auto'>
          {scheduleData.map((day, index) => (
            <TabsTrigger
              key={`day${index + 1}`}
              value={`day${index + 1}`}
              className='flex flex-col py-3 data-[state=active]:bg-orange-500 data-[state=active]:text-primary'
            >
              <span className='font-semibold text-sm sm:text-base'>{day.dayName}</span>
              <span className='text-xs opacity-80 mt-1 hidden sm:inline'>{day.date}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {scheduleData.map((day, index) => (
          <TabsContent key={`day${index + 1}`} value={`day${index + 1}`} className='space-y-4'>
            <div className='sm:hidden text-center mb-4 text-sm text-muted-foreground'>
              {day.date}
            </div>
            {day.talks.map((talk) => (
              <TalkCard key={talk.id} talk={talk} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
