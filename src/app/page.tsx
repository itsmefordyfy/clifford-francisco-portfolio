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
    ],
  };

  const experiences = [
    {
      role: 'Mobile App Developer & Full Stack Developer',
      type: 'Tech Lead & Software Development',
      duration: '9+ Years',
      description: 'Versatile developer with expertise in both mobile and full-stack development, leading software projects from conception to completion. Experienced tech lead with a proven track record of guiding teams to success and delivering high-quality applications across multiple platforms.',
      highlights: [
        'Tech Lead experience - Leading software development from scratch to MVP and production-ready solutions',
        'Guiding development teams to success with best practices and mentorship',
        'Working with international clients across London, Australia, Pakistan, US, and Canada',
        'Building and deploying mobile apps (React Native) and full-stack web applications',
        'Managing end-to-end project lifecycles including architecture, development, testing, and deployment',
        'Collaborating with cross-functional global teams and stakeholders',
      ],
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
            <a href="#home" className="text-2xl font-bold relative group">
              <span className="gradient-text-glow">&lt;CF/&gt;</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
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
              {['Home', 'About', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
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
            
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30"></div>
              <p className="relative text-xl sm:text-2xl lg:text-3xl mb-8 text-blue-300 font-mono glass-panel px-6 py-4 rounded-lg">
                <span className="text-purple-400">&gt;_</span> Building Smarter, Faster MVPs with AI & React Native
              </p>
            </div>
            
            <p className="text-lg sm:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
              <span className="text-blue-400 font-mono">const</span> experience = <span className="text-green-400">&quot;9+ Years&quot;</span>;
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
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl border border-blue-500/20 hover-lift">
              <div className="code-window mb-6">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {`{`}</div>
                  <div className="ml-4"><span className="text-green-400">experience</span>: <span className="text-yellow-400">&quot;9+ years&quot;</span>,</div>
                  <div className="ml-4"><span className="text-green-400">degree</span>: <span className="text-yellow-400">&quot;IT - Software Engineering&quot;</span>,</div>
                  <div className="ml-4"><span className="text-green-400">specialization</span>: <span className="text-yellow-400">&quot;AI-Accelerated Mobile Apps&quot;</span>,</div>
                  <div className="ml-4"><span className="text-green-400">platform</span>: <span className="text-yellow-400">&quot;React Native&quot;</span></div>
                  <div>{`}`};</div>
                </div>
              </div>
              
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                With over <span className="text-blue-400 font-semibold glow-text">9 years of software engineering experience</span> and a degree in Information Technology (Software Engineering), I specialize in building AI-accelerated mobile applications that transform ideas into scalable, real-world solutions.
              </p>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                My core expertise lies in <span className="text-blue-400 font-semibold glow-text">React Native</span>, where I design and develop cross-platform apps for iOS and Android—from rapid AI-assisted MVPs to production-grade products across fintech, healthcare, and e-commerce industries.
              </p>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                I leverage <span className="text-purple-400 font-semibold glow-text">AI coding tools and automation workflows</span> to accelerate development, enhance scalability, and deliver cleaner, more maintainable code—helping startups and teams ship faster and smarter.
              </p>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                I&apos;ve collaborated with global teams and startup founders, contributing to product design, feature planning, and performance optimization. From integrating native modules, push notifications, and analytics, to publishing apps on the <span className="text-blue-400 font-semibold">App Store</span> and <span className="text-green-400 font-semibold">Google Play</span>, I deliver with precision and efficiency.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-4 rounded-xl border-l-4 border-blue-500 hover-glow">
                  <h3 className="font-bold text-xl mb-3 text-blue-400">💡 Core Strengths</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">▹</span> AI-Driven Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">▹</span> Mobile App Development
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">▹</span> API Integration
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-400">▹</span> Cross-Platform Performance
                    </li>
                  </ul>
                </div>
                <div className="glass-panel p-4 rounded-xl border-l-4 border-purple-500 hover-glow">
                  <h3 className="font-bold text-xl mb-3 text-purple-400">🎯 Approach</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Agile Practices
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Clear Communication
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Fast & Reliable Solutions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-400">▹</span> Scalable Architecture
                    </li>
                  </ul>
                </div>
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
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {skills.frontend.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card-modern glass-card rounded-xl p-4 text-center border border-blue-500/20 hover:border-blue-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                        unoptimized
                      />
                    </div>
                    <div className="font-semibold text-sm text-gray-300 group-hover:text-blue-400 transition-colors">{skill.name}</div>
                    <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="skill-section">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 font-mono flex items-center gap-2">
                <span className="text-purple-500">{'{'}</span> Backend Development <span className="text-purple-500">{'}'}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {skills.backend.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card-modern glass-card rounded-xl p-4 text-center border border-purple-500/20 hover:border-purple-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                        unoptimized
                      />
                    </div>
                    <div className="font-semibold text-sm text-gray-300 group-hover:text-purple-400 transition-colors">{skill.name}</div>
                    <div className="h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="skill-section">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-mono flex items-center gap-2">
                <span className="text-cyan-500">{'{'}</span> Databases <span className="text-cyan-500">{'}'}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {skills.databases.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card-modern glass-card rounded-xl p-4 text-center border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                        unoptimized
                      />
                    </div>
                    <div className="font-semibold text-sm text-gray-300 group-hover:text-cyan-400 transition-colors">{skill.name}</div>
                    <div className="h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mt-2 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="skill-section">
              <h3 className="text-2xl font-bold mb-6 text-green-400 font-mono flex items-center gap-2">
                <span className="text-green-500">{'{'}</span> Tools & Platforms <span className="text-green-500">{'}'}</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {skills.tools.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="skill-card-modern glass-card rounded-xl p-4 text-center border border-green-500/20 hover:border-green-500 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Image 
                        src={`https://skillicons.dev/icons?i=${skill.icon}&theme=dark`} 
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="w-12 h-12"
                        unoptimized
                      />
                    </div>
                    <div className="font-semibold text-sm text-gray-300 group-hover:text-green-400 transition-colors">{skill.name}</div>
                    <div className="h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full mt-2 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-blue-400 font-mono">&lt;</span>
            <span className="gradient-text-glow">Experience</span>
            <span className="text-blue-400 font-mono">/&gt;</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="glass-card rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover-lift"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-blue-300">{exp.role}</h3>
                    <p className="text-purple-400 font-semibold mb-2 font-mono text-lg">&gt;_ {exp.type}</p>
                  </div>
                  <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-medium">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-lg mb-6 text-gray-300 leading-relaxed">{exp.description}</p>
                <div className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <span className="text-blue-400 group-hover:text-purple-400 transition-colors text-lg flex-shrink-0">▹</span>
                      <span className="text-gray-300 group-hover:text-white transition-colors text-base">{highlight}</span>
                    </div>
                  ))}
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
