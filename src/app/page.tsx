'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Clifford Francisco";

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const skills = {
    frontend: [
      { name: 'React', icon: 'react' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Vue', icon: 'vue' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Material UI', icon: 'materialui' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Swift', icon: 'swift' },
      { name: 'Java', icon: 'java' },
      { name: 'C#', icon: 'cs' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'CSS', icon: 'css' },
      { name: 'HTML', icon: 'html' },
    ],
    backend: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'C#', icon: 'cs' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Nest.js', icon: 'nestjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Supabase', icon: 'supabase' },
    ],
    databases: [
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'DynamoDB', icon: 'dynamodb' },
      { name: 'Firebase', icon: 'firebase' },
      { name: 'Supabase', icon: 'supabase' },
    ],
    tools: [
      { name: 'Git', icon: 'git' },
      { name: 'AWS', icon: 'aws' },
      { name: 'GCP', icon: 'gcp' },
      { name: 'Docker', icon: 'docker' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Bitbucket', icon: 'bitbucket' },
      { name: 'GitHub', icon: 'github' },
      { name: 'Sentry', icon: 'sentry' },
      { name: 'Jest', icon: 'jest' },
      { name: 'Expo', icon: 'expo' },
    ],
  };


  const workingExperiences = [
    {
      company: 'Think Digitally',
      position: 'Sr. Software Engineer',
      duration: 'Oct 2024 – August 2025',
      location: 'Karachi Division, Sindh, Pakistan',
      description: 'Led mobile app projects in Android and iOS, collaborating with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Led mobile app projects in Android and iOS, collaborating with cross-functional teams to deliver high-quality solutions',
        'Maintained mobile app projects in Android and iOS, ensuring seamless functionality and user experience',
        'Developed new features and user interfaces from wireframe models to enhance app usability',
        'Fixed bugs and performance issues promptly to optimize app performance',
        'Deployed mobile apps to Google Play and App stores, expanding reach and increasing user engagement',
      ],
      technologies: ['React Native', 'Android', 'iOS', 'Google Play', 'App Store'],
    },
    {
      company: 'Karta',
      position: 'Full Stack Software Engineer',
      duration: 'Jul 2022 – Sep 2024',
      location: 'Sydney, Australia',
      description: 'Developed core APIs and B2C web/mobile applications for Karta Gift Cards, ensuring customer needs were met at the center of all projects.',
      achievements: [
        'Developed core APIs and B2C web/mobile applications for Karta Gift Cards',
        'Collaborated with cross-functional teams to identify bottlenecks, risks, and form contingency plans',
        'Conducted functionality testing, debugging, and ensured up-to-date software documentation',
        'Participated in agile ceremonies and supported team members',
        'Contributed to creating a culture of performance and quality assurance',
      ],
      technologies: ['React Native', 'Node.js', 'APIs', 'B2C Applications', 'Agile'],
    },
    {
      company: 'Changing Digital',
      position: 'Full Stack Software Engineer',
      duration: 'Sep 2021 – Nov 2022',
      location: 'Great Chesterford, England, United Kingdom',
      description: 'Maintained APIs and mobile app projects in Android and iOS, ensuring smooth functionality and user experience.',
      achievements: [
        'Maintained APIs and mobile app projects in Android and iOS',
        'Developed new features and user interfaces from wireframe models',
        'Fixed bugs and performance issues promptly to optimize app performance',
        'Deployed mobile apps to Google Play and App stores',
        'Enhanced app usability and reached wider audience',
      ],
      technologies: ['React Native', 'APIs', 'Android', 'iOS', 'Google Play', 'App Store'],
    },
    {
      company: 'Genius Giant',
      position: 'Sr. Software Engineer',
      duration: 'Jan 2020 – Sep 2021',
      location: 'Naga, Bicol Region, Philippines',
      description: 'Led mobile app projects in Android and iOS, collaborating with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Led mobile app projects in Android and iOS with cross-functional teams',
        'Developed new features and user interfaces from wireframe models',
        'Deployed mobile apps to Google Play and App stores',
        'Met aggressive schedules using Agile/Scrum methodologies',
        'Ensured seamless user experience across platforms',
      ],
      technologies: ['React Native', 'Android', 'iOS', 'Agile', 'Scrum', 'Google Play', 'App Store'],
    },
    {
      company: 'Bald Puppies Solutions',
      position: 'Full Stack Software Engineer',
      duration: 'Jan 2019 – Jan 2020',
      location: 'Naga, Bicol Region, Philippines',
      description: 'Maintained and developed APIs and mobile app projects in Android and iOS, collaborating with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Maintained and developed APIs and mobile app projects in Android and iOS',
        'Integrated online payment solutions like PayPal, Dragonpay, and PayMongo',
        'Enhanced user experience and drove revenue growth',
        'Collaborated with cross-functional teams for high-quality solutions',
        'Delivered comprehensive mobile and web applications',
      ],
      technologies: ['React Native', 'APIs', 'PayPal', 'Dragonpay', 'PayMongo', 'Android', 'iOS'],
    },
    {
      company: 'SpotHop',
      position: 'Software Engineer',
      duration: 'Jan 2018 – Jan 2019',
      location: 'New York, New York, United States',
      description: 'Maintained mobile app projects in Android and iOS, ensuring smooth functionality and developing new features.',
      achievements: [
        'Maintained mobile app projects in Android and iOS',
        'Developed new features and user interfaces from wireframe models',
        'Fixed bugs and performance issues promptly',
        'Deployed mobile apps to Google Play and App stores',
        'Enhanced user experience and ensured widespread availability',
      ],
      technologies: ['React Native', 'Android', 'iOS', 'Google Play', 'App Store'],
    },
    {
      company: 'Department of Information and Communications Technology - Philippines',
      position: 'Software Engineer Intern',
      duration: 'Jan 2018 – Jan 2019',
      location: 'Quezon City, National Capital Region, Philippines',
      description: 'Assisted in developing and maintaining web-based applications for government services.',
      achievements: [
        'Assisted in developing and maintaining web-based applications for government services',
        'Collaborated with cross-functional teams to align software solutions with project requirements',
        'Participated in testing and debugging software applications',
        'Contributed to maintaining software documentation',
        'Optimized databases for better performance',
      ],
      technologies: ['Web Development', 'Government Services', 'Database Optimization', 'Testing', 'Documentation'],
    },
  ];

  const education = [
    {
      institution: 'University of Nueva Caceres',
      degree: 'Bachelor\'s degree, Information Technology',
      year: '2018',
      location: 'Naga, Bicol Region, Philippines',
      description: 'Comprehensive study of Information Technology covering software development, database management, networking, and system analysis.',
      highlights: [
        'Specialized in Software Engineering and Development',
        'Completed coursework in Database Management Systems',
        'Studied Computer Networks and System Administration',
        'Gained foundation in Programming and Software Architecture',
        'Developed problem-solving and analytical thinking skills',
      ],
    },
  ];

  const recommendations = [
    {
      name: 'Anwar Gul',
      position: 'Lead Software Engineer | MVPs Consultant',
      company: 'Helping you launch in 4-weeks 🚀',
      date: 'August 22, 2025',
      relationship: 'Anwar managed Clifford directly',
      review: 'My experience working with Clifford was a great one, as his lead I would recommend him any day for React Native. I was impressed by his hardworking attitude and creative solutions. He was the main guy that I was relying on.',
      rating: 5,
    },
    {
      name: 'Erny Marvin Dalire',
      position: 'Software Developer',
      company: 'Team Collaboration',
      date: 'August 22, 2024',
      relationship: 'Erny Marvin worked with Clifford on the same team',
      review: 'I had the pleasure of working with Clifford on several React Native projects, and he consistently impressed me with his deep expertise, problem-solving abilities, and commitment to delivering high-quality work. Clifford is not only skilled at writing clean, efficient code, but he also excels at team collaboration. His positive attitude and dedication to continuous learning make him a standout developer and a valuable asset to any team.',
      rating: 5,
    },
    {
      name: 'Elli Justine Vistan',
      position: 'QA Automation Specialist | Senior QA Test Lead | Consultant',
      company: 'Electronics Engineer',
      date: 'August 9, 2024',
      relationship: 'Elli Justine worked with Clifford on the same team',
      review: 'Clifford is an outstanding Full Stack Software Engineer who consistently delivers high-quality work. During his time at Karta Gift Cards, he played a key role in developing B2C web and mobile applications, as well as core APIs. His collaboration with various teams ensured projects were completed to a high standard. Clifford\'s technical skills in NestJS and C#, along with his commitment to continuous improvement, make him a valuable asset to any development team.',
      rating: 5,
    },
    {
      name: 'Aubrey Ivan Apungan',
      position: 'Full-stack developer',
      company: 'Team Collaboration',
      date: 'August 9, 2024',
      relationship: 'Aubrey Ivan worked with Clifford on the same team',
      review: 'I highly recommend Clifford as a full-stack developer. His work on Ekata services has been exceptional, showcasing his strong technical skills in both front-end and back-end development. He consistently delivers high-quality solutions and approaches challenges with a proactive and detail-oriented mindset. Clifford is also a great team player, communicating clearly and collaborating effectively. His positive attitude and willingness to help others make him a valuable asset to any team. I am confident he will continue to excel in his career.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-purple-950"></div>
        <div className="grid-background"></div>
        <div className="code-rain"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-nav z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold">
        <Image
                src="/fordytech-logo.png"
                alt="FordyTech Solutions Logo"
                width={120}
                height={40}
                className="h-15 w-auto"
                unoptimized
              />
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Work History', 'Education', 'Recommendations', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="nav-link relative group"
                >
                  <span className="text-gray-300 hover:text-blue-400 transition-colors">
                    {item}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-blue-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 glass-panel rounded-lg mb-4 p-4">
              {['Home', 'About', 'Skills', 'Work History', 'Education', 'Recommendations', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="block text-gray-300 hover:text-blue-400 transition-colors py-2" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center section-padding pt-24">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="particle particle-1"></div>
              <div className="particle particle-2"></div>
              <div className="particle particle-3"></div>
            </div>

            <div className="code-bracket text-blue-400 text-2xl mb-4 opacity-60">&lt;developer&gt;</div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6">
              <span className="text-gray-400">Hi, I&apos;m </span>
              <div className="gradient-text-animated inline-block">
                {displayedText}
                <span className="typing-cursor">|</span>
              </div>
              <span className="wave-emoji">👋</span>
            </h1>
            
            <div className="text-center mb-8">
              <p className="text-xl sm:text-2xl lg:text-3xl text-blue-300 font-mono">
                <span className="text-purple-400">&gt;_</span> Building Smarter, Faster MVPs with AI & React Native
              </p>
            </div>
            
            <p className="text-lg sm:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
               <span className="text-blue-400 font-mono">const</span> experience = <span className="text-green-400">&quot;10 Years&quot;</span>;
              <br />
              <span className="text-blue-400 font-mono">const</span> focus = <span className="text-green-400">&quot;AI-Accelerated Mobile Development&quot;</span>;
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#about" 
                className="btn-glow group relative px-8 py-4 rounded-full font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform group-hover:scale-105"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
          </a>
          <a
                href="#contact" 
                className="btn-outline group relative px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <span className="relative group-hover:text-white transition-colors">Get In Touch</span>
              </a>
            </div>

            <div className="code-bracket text-blue-400 text-2xl mt-8 opacity-60">&lt;/developer&gt;</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-blue-400 font-mono">&lt;</span>
            <span className="gradient-text-glow">About Me</span>
            <span className="text-blue-400 font-mono">/&gt;</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <div className="glass-card p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover-lift mb-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-2xl">
                    <Image
                      src="/face.png"
                      alt="Clifford Francisco"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4 text-blue-300">Clifford Francisco</h3>
                  <p className="text-xl text-purple-400 font-semibold mb-4">AI-Accelerated Mobile App Developer</p>
                  <div className="code-window">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="font-mono text-sm space-y-2">
                      <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {`{`}</div>
                      <div className="ml-4"><span className="text-green-400">experience</span>: <span className="text-yellow-400">&quot;10 years&quot;</span>,</div>
                      <div className="ml-4"><span className="text-green-400">degree</span>: <span className="text-yellow-400">&quot;IT - Software Engineering&quot;</span>,</div>
                      <div className="ml-4"><span className="text-green-400">specialization</span>: <span className="text-yellow-400">&quot;AI-Accelerated Mobile Apps&quot;</span>,</div>
                      <div className="ml-4"><span className="text-green-400">platform</span>: <span className="text-yellow-400">&quot;React Native&quot;</span></div>
                      <div>{`}`};</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="glass-card p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover-lift mb-8">
              <h4 className="text-2xl font-bold mb-6 text-blue-400">About Me</h4>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  With over <span className="text-blue-400 font-semibold glow-text">10 years of software engineering experience</span> and a degree in Information Technology (Software Engineering), I specialize in building AI-accelerated mobile applications that transform ideas into scalable, real-world solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My core expertise lies in <span className="text-blue-400 font-semibold glow-text">React Native</span>, where I design and develop cross-platform apps for iOS and Android—from rapid AI-assisted MVPs to production-grade products across fintech, healthcare, and e-commerce industries.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I leverage <span className="text-purple-400 font-semibold glow-text">AI coding tools and automation workflows</span> to accelerate development, enhance scalability, and deliver cleaner, more maintainable code—helping startups and teams ship faster and smarter.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I&apos;ve collaborated with global teams and startup founders, contributing to product design, feature planning, and performance optimization. From integrating native modules, push notifications, and analytics, to publishing apps on the <span className="text-blue-400 font-semibold">App Store</span> and <span className="text-green-400 font-semibold">Google Play</span>, I deliver with precision and efficiency.
                </p>
              </div>
            </div>

            {/* Strengths & Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover-lift">
                <h4 className="font-bold text-xl mb-6 text-blue-400 flex items-center gap-2">
                  <span className="text-2xl">💡</span> Core Strengths
                </h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400 text-lg">▹</span> 
                    <span>AI-Driven Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400 text-lg">▹</span> 
                    <span>Mobile App Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400 text-lg">▹</span> 
                    <span>API Integration</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-400 text-lg">▹</span> 
                    <span>Cross-Platform Performance</span>
                  </li>
                </ul>
              </div>
              <div className="glass-card p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover-lift">
                <h4 className="font-bold text-xl mb-6 text-purple-400 flex items-center gap-2">
                  <span className="text-2xl">🎯</span> Approach
                </h4>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="text-purple-400 text-lg">▹</span> 
                    <span>Agile Practices</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-400 text-lg">▹</span> 
                    <span>Clear Communication</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-400 text-lg">▹</span> 
                    <span>Fast & Reliable Solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-purple-400 text-lg">▹</span> 
                    <span>Scalable Architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-blue-400 font-mono">&lt;</span>
            <span className="gradient-text-glow">Skills & Technologies</span>
            <span className="text-blue-400 font-mono">/&gt;</span>
          </h2>
          
          <div className="space-y-12">
            {/* Frontend */}
            <div className="skill-section">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 font-mono flex items-center gap-2">
                <span className="text-blue-500">{'{'}</span> Frontend Development <span className="text-blue-500">{'}'}</span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                {skills.frontend.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card-modern glass-card rounded-lg p-3 text-center border border-blue-500/20 hover:border-blue-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                        unoptimized
                      />
                    </div>
                    <div className="font-medium text-xs text-gray-300 group-hover:text-blue-400 transition-colors">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="skill-section">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 font-mono flex items-center gap-2">
                <span className="text-purple-500">{'{'}</span> Backend Development <span className="text-purple-500">{'}'}</span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                {skills.backend.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card-modern glass-card rounded-lg p-3 text-center border border-purple-500/20 hover:border-purple-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                        unoptimized
                      />
                    </div>
                    <div className="font-medium text-xs text-gray-300 group-hover:text-purple-400 transition-colors">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="skill-section">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-mono flex items-center gap-2">
                <span className="text-cyan-500">{'{'}</span> Databases <span className="text-cyan-500">{'}'}</span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                {skills.databases.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card-modern glass-card rounded-lg p-3 text-center border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                        unoptimized
                      />
                    </div>
                    <div className="font-medium text-xs text-gray-300 group-hover:text-cyan-400 transition-colors">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="skill-section">
              <h3 className="text-2xl font-bold mb-6 text-green-400 font-mono flex items-center gap-2">
                <span className="text-green-500">{'{'}</span> Tools & Platforms <span className="text-green-500">{'}'}</span>
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
                {skills.tools.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card-modern glass-card rounded-lg p-3 text-center border border-green-500/20 hover:border-green-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                        unoptimized
                      />
                    </div>
                    <div className="font-medium text-xs text-gray-300 group-hover:text-green-400 transition-colors">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Working Experiences Section */}
      <section id="work-history" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-blue-400 font-mono">&lt;</span>
            <span className="gradient-text-glow">Working Experiences</span>
            <span className="text-blue-400 font-mono">/&gt;</span>
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="glass-card rounded-2xl p-6 border border-blue-500/20">
              <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-800 pr-4">
                <div className="space-y-6">
                  {workingExperiences.map((work, index) => (
                    <div 
                      key={index}
                      className="glass-panel rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-blue-300 mb-1">{work.position}</h3>
                          <p className="text-purple-400 font-semibold text-lg">{work.company}</p>
                          <p className="text-gray-400 text-sm">{work.location}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-medium text-sm mt-2 md:mt-0">
                          {work.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">{work.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-blue-400 font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {work.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="text-blue-400 text-sm">▹</span>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-purple-400 font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {work.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-black/50 text-gray-300 text-xs rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {workingExperiences.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-400 text-lg">Please add your working experiences from your CV</p>
                      <p className="text-gray-500 text-sm mt-2">Edit the workingExperiences array in the code</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-blue-400 font-mono">&lt;</span>
            <span className="gradient-text-glow">Education</span>
            <span className="text-blue-400 font-mono">/&gt;</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-blue-300">{edu.institution}</h3>
                    <p className="text-purple-400 font-semibold text-xl mb-2">{edu.degree}</p>
                    <p className="text-gray-400 text-lg">{edu.location}</p>
                  </div>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-medium text-lg mt-4 md:mt-0">
                    {edu.year}
                  </span>
                </div>
                
                <p className="text-lg mb-6 text-gray-300 leading-relaxed">{edu.description}</p>
                
                <div>
                  <h4 className="text-blue-400 font-semibold mb-4 text-xl">Key Areas of Study:</h4>
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 group">
                        <span className="text-blue-400 group-hover:text-purple-400 transition-colors text-lg flex-shrink-0">▹</span>
                        <span className="text-gray-300 group-hover:text-white transition-colors text-base">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-blue-400 font-mono">&lt;</span>
            <span className="gradient-text-glow">Recommendations</span>
            <span className="text-blue-400 font-mono">/&gt;</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recommendations.map((rec, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-blue-300">{rec.name}</h3>
                    <p className="text-purple-400 font-semibold text-lg mb-1">{rec.position}</p>
                    <p className="text-gray-400 text-base mb-2">{rec.company}</p>
                    <p className="text-gray-500 text-sm">{rec.relationship}</p>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-medium text-sm mb-2">
                      {rec.date}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(rec.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-blue-500/20 font-serif">&ldquo;</div>
                  <blockquote className="text-lg text-gray-300 leading-relaxed italic pl-6">
                    {rec.review}
                  </blockquote>
                  <div className="absolute -bottom-2 -right-2 text-6xl text-blue-500/20 font-serif">&rdquo;</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-blue-400 font-mono">&lt;</span>
            <span className="gradient-text-glow">Let&apos;s Connect</span>
            <span className="text-blue-400 font-mono">/&gt;</span>
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">
              Ready to build smart mobile experiences that leverage AI to scale faster and deliver meaningful impact? 
              Whether you&apos;re launching a new idea or elevating your existing product, let&apos;s connect!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <a 
                href="https://www.linkedin.com/in/cliffordfrancisco/"
          target="_blank"
          rel="noopener noreferrer"
                className="social-card glass-card flex items-center justify-center gap-3 px-8 py-6 rounded-xl hover-lift border border-blue-500/20 hover:border-blue-500 group"
              >
                <svg className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-semibold text-lg text-gray-300 group-hover:text-blue-400 transition-colors">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/itsmefordyfy"
          target="_blank"
          rel="noopener noreferrer"
                className="social-card glass-card flex items-center justify-center gap-3 px-8 py-6 rounded-xl hover-lift border border-purple-500/20 hover:border-purple-500 group"
              >
                <svg className="w-7 h-7 text-purple-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-semibold text-lg text-gray-300 group-hover:text-purple-400 transition-colors">GitHub</span>
              </a>
            </div>

            <div className="glass-card rounded-2xl p-8 border border-blue-500/20 hover-glow">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Email Me</h3>
              <a 
                href="mailto:clifford.francisco@example.com" 
                className="text-xl text-blue-300 hover:text-blue-400 transition-colors font-mono"
              >
                clifford.francisco@example.com
              </a>
              <p className="mt-6 text-gray-400">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-blue-500/20 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-mono">
            <span className="text-blue-400">&lt;</span>
            © {new Date().getFullYear()} Clifford Francisco
            <span className="text-blue-400">/&gt;</span>
          </p>
          <p className="mt-2 text-gray-500 text-sm">
            Built with <span className="text-red-500">❤️</span> using Next.js, React, and Tailwind CSS
          </p>
          <p className="mt-2 text-gray-600 text-xs font-mono">
            <span className="text-purple-400">const</span> innovation = <span className="text-green-400">&quot;endless&quot;</span>;
          </p>
        </div>
      </footer>
    </div>
  );
}
