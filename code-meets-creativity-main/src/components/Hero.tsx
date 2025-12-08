import { useEffect, useState } from 'react';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> goutham.init()\n> loading_projects...\n> creative_mode: ON';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex">
        {/* Developer Side - Left */}
        <div className="w-1/2 bg-[hsl(var(--dev-bg))] relative overflow-hidden">
          {/* Circuit pattern background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 border border-[hsl(var(--dev-accent))] rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 border border-[hsl(var(--dev-accent))] rounded-full"></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[hsl(var(--dev-accent))] rounded-full animate-float"></div>
          <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-[hsl(var(--dev-accent))] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-[hsl(var(--dev-accent))] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Designer Side - Right */}
                {/* Designer Side - Right - CREATIVE DESIGN */}
        <div className="w-1/2 bg-blue-100 relative overflow-hidden">
          {/* Dreamy gradient blobs */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-300 to-blue-200 rounded-full opacity-20 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          
          {/* Floating creative elements */}
          <div className="absolute top-1/4 right-1/4 w-16 h-16 border-2 border-blue-400 rotate-45 animate-float opacity-40"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-cyan-300 rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-2/3 right-1/5 w-8 h-8 bg-blue-400 rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
          
          {/* Sparkle particles */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="particle w-2 h-2 bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2.5}s`
              }}
            />
          ))}
        </div>

        {/* Gradient Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-gradient-to-b from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] animate-pulse-glow"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-b from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] opacity-20 blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Left - Terminal */}
          <div className="flex-1 flex justify-end">
            <div className="max-w-md w-full space-y-4">
              <div className="bg-[hsl(var(--dev-surface))] rounded-lg p-6 md:p-8 border border-[hsl(var(--dev-accent))/0.3] box-glow-blue">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="font-code text-[hsl(var(--dev-accent))] text-sm md:text-base neon-glow-blue whitespace-pre-wrap">
                  {terminalText}<span className="terminal-cursor"></span>
                </pre>
              </div>
              
              {/* Download Resume Button */}
              <div className="flex justify-center">
                <a
                  href="/K.Goutham_resume.pdf"
                  download="K.Goutham_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 bg-[hsl(var(--dev-surface))] text-[hsl(var(--dev-accent))] rounded-lg border border-[hsl(var(--dev-accent))/0.3] hover:border-[hsl(var(--dev-accent))] hover:box-glow-blue transition-all duration-300 font-code text-sm group"
                >
                  <svg className="w-4 h-4 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Center - Title */}
          <div className="text-center px-4 md:px-8 relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="block text-[hsl(var(--dev-text))] md:text-[hsl(var(--dev-text))] font-code neon-glow-blue">
                GOUT<span className="text-blue-900">HAM K </span>
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] mb-6"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide">
              Code Meets Creativity
            </p>
          </div>

          {/* Right - Quote */}
          <div className="flex-1">
            <div className="max-w-md w-full space-y-4">
              <div className="bg-blue-100/90 border-2 border-blue-400 backdrop-blur-sm rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:scale-105 transition-transform duration-500 shadow-lg">
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-300 to-transparent rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-blue-300 to-transparent rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-opacity"></div>
                
                <blockquote className="relative font-design text-blue-800 text-lg md:text-xl italic leading-relaxed">
                  "Design is not just what it looks like and feels like.
                  <span className="block mt-3 font-semibold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
                    Design is how it works."
                  </span>
                </blockquote>
                <p className="relative mt-4 text-blue-600 text-sm font-design">— Steve Jobs</p>
              </div>
              
              {/* Contact Me Button - Outside the box */}
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium font-design hover:scale-105 hover:shadow-lg transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
