import MobileToggle from './MobileToggle';
import { useMobileView } from '@/contexts/MobileViewContext';

const Skills = () => {
  const { mobileView, setMobileView } = useMobileView();
  
  const devSkills = [
    { name: "React", level: 4 },
    { name: "Flask", level: 4.5 },
    { name: "MongoDB", level: 4 },
    { name: "Java", level: 2.5 }
  ];

  const designSkills = [
    { name: "Figma", level: 92 },
    { name: "UI/UX", level: 90 },
    { name: "Prototyping", level: 88 },
    { name: "Illustration", level: 78 },
    { name: "Canva", level: 95 }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20">
      <MobileToggle activeView={mobileView} onToggle={setMobileView} />
      
      <div className="absolute inset-0 flex">
        {/* Developer Side - Left */}
        <div className={`bg-[hsl(var(--dev-bg))] flex items-center justify-center p-8 md:p-16 transition-all duration-500 w-full md:w-1/2 ${
          mobileView === 'developer' ? 'flex' : 'hidden md:flex'
        }`}>
          <div className="max-w-lg w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dev-text))] font-code mb-2 neon-glow-blue">
              {'{ skills }'}
            </h2>
            <p className="text-[hsl(var(--dev-accent))] mb-12 font-code text-sm">
              // Technical expertise
            </p>

            <div className="space-y-6">
              {devSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[hsl(var(--dev-text))] font-code text-sm">
                      {skill.name}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`w-4 h-4 ${
                            star <= Math.floor(skill.level)
                              ? 'text-[hsl(var(--dev-accent))] fill-current'
                              : star - 0.5 === skill.level
                              ? 'text-[hsl(var(--dev-accent))]'
                              : 'text-[hsl(var(--dev-accent))/0.3]'
                          }`}
                          fill={star - 0.5 === skill.level ? 'url(#half)' : 'currentColor'}
                          viewBox="0 0 20 20"
                        >
                          {star - 0.5 === skill.level && (
                            <defs>
                              <linearGradient id="half">
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                              </linearGradient>
                            </defs>
                          )}
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <style>{`
              @keyframes slideIn {
                from {
                  width: 0%;
                }
              }
            `}</style>
          </div>
        </div>

        {/* Designer Side - Right */}
        <div className={`bg-blue-100 flex items-center justify-center p-6 md:p-12 relative overflow-hidden transition-all duration-500 w-full md:w-1/2 ${
          mobileView === 'designer' ? 'flex' : 'hidden md:flex'
        }`}>
          {/* Dreamy ambient blobs */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-300 to-transparent rounded-full opacity-15 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
          
          {/* Bokeh particles */}
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="particle bg-white opacity-40"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.5}s`
              }}
            />
          ))}
          
          <div className="w-full max-w-2xl mx-auto relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-design mb-2 text-center">
              Creative Skills
            </h2>
            <p className="text-blue-700 mb-8 font-design text-center">
              Design tools & expertise
            </p>

            <div className="grid grid-cols-3 gap-6">
              {designSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 group"
                  style={{ animation: `fadeInScale 0.6s ease-out ${index * 0.1}s backwards` }}
                >
                  <div className="relative">
                    {/* Glassmorphic background circle */}
                    <div className="absolute inset-0 bg-blue-100/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                    
                    {/* Main SVG circle */}
                    <svg className="w-20 h-20 md:w-24 md:h-24 transform -rotate-90 relative">
                      {/* Background circle with gradient */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r="38%"
                        stroke="url(#gradient-bg-{index})"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.2"
                      />
                      
                      {/* Progress circle with multi-color gradient */}
                      <circle
                        cx="50%"
                        cy="50%"
                        r="38%"
                        stroke="url(#gradient-{index})"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 38}`}
                        strokeDashoffset={`${2 * Math.PI * 38 * (1 - skill.level / 100)}`}
                        className="transition-all duration-1000 ease-out filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                      />
                      
                      {/* Define gradients for each skill */}
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={index === 0 ? "rgb(147, 51, 234)" : index === 1 ? "rgb(236, 72, 153)" : index === 2 ? "rgb(251, 146, 60)" : index === 3 ? "rgb(34, 197, 94)" : "rgb(168, 85, 247)"} />
                          <stop offset="50%" stopColor={index === 0 ? "rgb(168, 85, 247)" : index === 1 ? "rgb(244, 114, 182)" : index === 2 ? "rgb(252, 165, 165)" : index === 3 ? "rgb(52, 211, 153)" : "rgb(196, 181, 253)"} />
                          <stop offset="100%" stopColor={index === 0 ? "rgb(196, 181, 253)" : index === 1 ? "rgb(251, 207, 232)" : index === 2 ? "rgb(254, 202, 202)" : index === 3 ? "rgb(167, 243, 208)" : "rgb(221, 214, 254)"} />
                        </linearGradient>
                        <linearGradient id={`gradient-bg-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={index === 0 ? "rgb(196, 181, 253)" : index === 1 ? "rgb(251, 207, 232)" : index === 2 ? "rgb(254, 215, 170)" : index === 3 ? "rgb(167, 243, 208)" : "rgb(221, 214, 254)"} />
                          <stop offset="100%" stopColor={index === 0 ? "rgb(221, 214, 254)" : index === 1 ? "rgb(252, 231, 243)" : index === 2 ? "rgb(255, 237, 213)" : index === 3 ? "rgb(204, 251, 241)" : "rgb(237, 233, 254)"} />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Percentage with glassmorphic background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-blue-100 border border-blue-200 rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-blue-800 font-bold text-sm font-design">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    
                    {/* Floating glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"></div>
                  </div>
                  
                  <p className="text-blue-800 text-sm font-medium text-center font-design group-hover:scale-105 transition-transform">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

            <style>{`
              @keyframes fadeInScale {
                from {
                  opacity: 0;
                  transform: scale(0.8) translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                }
              }
            `}</style>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-gradient-to-b from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] animate-pulse-glow"></div>
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-b from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default Skills;
