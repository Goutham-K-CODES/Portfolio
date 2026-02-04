import { Github, ExternalLink, Figma } from 'lucide-react';
import MobileToggle from './MobileToggle';
import { useMobileView } from '@/contexts/MobileViewContext';

const Projects = () => {
  const { mobileView, setMobileView } = useMobileView();
  
  const devProjects = [
    {
      title: "FreshFares – Restaurant Website",
      description: "Built a responsive restaurant website using HTML, CSS, and JavaScript to display menus and branch details, hosted on Netlify for fast performance.",
      tech: ["HTML", "CSS", "JavaScript", "Netlify"],
      github: "https://github.com/Goutham-K-CODES/Fresh-Fare",
      demo: "https://freshfares.netlify.app"
    },
    {
      title: "To-Do List Web App",
      description: "Developed an interactive to-do list app using JavaScript, HTML, and CSS for task management, deployed on Vercel with a clean and responsive design.",
      tech: ["JavaScript", "HTML", "CSS", "Vercel"],
      github: "https://github.com/Goutham-K-CODES/To-Do-list",
      demo: "https://to-do-list-eight-jet.vercel.app"
    },
    {
      title: "IEEE Student Branch Website",
      description: "Designed in Figma and developed using React.js and Tailwind CSS to showcase IEEE events and team activities, hosted on Vercel with responsive UI.",
      tech: ["React.js", "Tailwind CSS", "Figma", "Vercel"],
      github: "https://github.com/Goutham-K-CODES/IEEE_FRONTEND",
      demo: "https://ieee-frontend-lyart.vercel.app"
    }
  ];

  const designProjects = [
    {
      title: "IEEE Website",
      description: "Complete website design for IEEE student branch with modern UI/UX principles, featuring clean navigation and engaging content sections.",
      tools: ["Figma", "UI/UX Design"],
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=250&fit=crop&crop=center",
      link: "https://www.figma.com/design/bMTwwuzEQXaSdEmxboOKNr/IEEE?node-id=0-1&p=f&t=Z718iw13xKbsorLf-0"
    },
    {
      title: "Restaurant Wireframe",
      description: "Comprehensive wireframe design for a modern restaurant website with intuitive user flow and optimized booking experience.",
      tools: ["Figma", "Wireframing"],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop&crop=center",
      link: "https://www.figma.com/design/xi43qfG42TAh56E6VQXjop/Untitled?t=9K8QGRnKcayYM2Cb-0"
    },
    {
      title: "StockPulse Mobile App",
      description: "Mobile application design for stock market tracking and analysis with real-time data visualization and user-friendly interface.",
      tools: ["Figma", "Mobile UI"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop&crop=center",
      link: "https://www.figma.com/design/lVjYjRZqpl5lyluvtyhLbo/STOCKPULSE?node-id=0-1&p=f&t=Z17FhcHYkH2oqqIe-0"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20">
      <MobileToggle activeView={mobileView} onToggle={setMobileView} />
      
      <div className="absolute inset-0 flex">
        {/* Developer Side - Left */}
        <div className={`bg-[hsl(var(--dev-bg))] p-8 md:p-16 overflow-auto transition-all duration-500 w-full md:w-1/2 ${
          mobileView === 'developer' ? 'block' : 'hidden md:block'
        }`}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dev-text))] font-code mb-2 neon-glow-blue">
              {'<Projects />'}
            </h2>
            <p className="text-[hsl(var(--dev-accent))] mb-12 font-code text-sm">
              // Building scalable solutions
            </p>

            <div className="space-y-6">
              {devProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[hsl(var(--dev-surface))] rounded-lg p-6 border border-[hsl(var(--dev-accent))/0.3] hover:border-[hsl(var(--dev-accent))] transition-all duration-300 hover:box-glow-blue group"
                >
                  <h3 className="text-xl font-bold text-[hsl(var(--dev-text))] mb-2 group-hover:text-[hsl(var(--dev-accent))] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[hsl(var(--dev-accent))/0.1] text-[hsl(var(--dev-accent))] rounded-full text-xs font-code border border-[hsl(var(--dev-accent))/0.3]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-[hsl(var(--dev-accent))] hover:text-[hsl(var(--dev-accent-bright))] transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-[hsl(var(--dev-accent))] hover:text-[hsl(var(--dev-accent-bright))] transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Designer Side - Right */}
        <div className={`bg-blue-100 flex items-center justify-center p-6 md:p-12 relative overflow-hidden transition-all duration-500 w-full md:w-1/2 ${
          mobileView === 'designer' ? 'flex' : 'hidden md:flex'
        }`}>
          {/* Floating ambient elements */}
          <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-blue-300 to-transparent rounded-full opacity-15 blur-3xl animate-float"></div>
          <div className="absolute bottom-32 left-20 w-72 h-72 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Bokeh particles */}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="particle bg-white opacity-30"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
          
          <div className="w-full max-w-2xl mx-auto relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-xl max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-design mb-2 text-center">
              Design Portfolio
            </h2>
            <p className="text-blue-700 mb-8 font-design text-center">
              Crafting beautiful user experiences
            </p>

            <div className="space-y-4">
              {designProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-blue-50/80 border border-blue-200 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 group backdrop-blur-sm"
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards` }}
                >
                  {/* Project Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                    
                    {/* Floating glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-300 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-4 relative">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300 font-design">
                        {project.title}
                      </h3>
                      <p className="text-blue-700 mb-3 text-sm font-design leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium font-design hover:scale-110 transition-transform border border-blue-200"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium font-design hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        <Figma className="w-4 h-4" />
                        View Design
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(30px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
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

export default Projects;
