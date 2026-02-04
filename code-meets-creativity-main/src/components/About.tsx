import profilePhoto from '@/assets/profile.jpg';
import { Code2, Palette, Zap, Heart } from 'lucide-react';
import MobileToggle from './MobileToggle';
import { useMobileView } from '@/contexts/MobileViewContext';

const About = () => {
  const { mobileView, setMobileView } = useMobileView();

  return (
    <section className="relative min-h-screen flex items-center">
      <MobileToggle activeView={mobileView} onToggle={setMobileView} />
      
      <div className="absolute inset-0 flex">
        {/* Developer Side - Left */}
        <div className={`bg-[hsl(var(--dev-bg))] flex items-center justify-center p-8 md:p-16 transition-all duration-500 w-full md:w-1/2 ${
          mobileView === 'developer' ? 'flex' : 'hidden md:flex'
        }`}>
          <div className="max-w-lg">
            <pre className="font-code text-[hsl(var(--dev-accent))] text-sm md:text-base leading-relaxed">
              <span className="text-[hsl(var(--dev-accent))/0.6]">// Developer Profile</span>{'\n'}
              <span className="text-purple-400">const</span> <span className="text-[hsl(var(--dev-text))]">developer</span> = {'{'}{'\n'}
              {'  '}name: <span className="text-green-400">"Goutham"</span>,{'\n'}
              {'  '}role: <span className="text-green-400">"Full-Stack Developer"</span>,{'\n'}
              {'  '}location: <span className="text-green-400">"India"</span>,{'\n'}
              {'  '}skills: [{'\n'}
              {'    '}<span className="text-green-400">"JavaScript"</span>,{'\n'}
              {'    '}<span className="text-green-400">"React"</span>,{'\n'}
              {'    '}<span className="text-green-400">"Flask"</span>,{'\n'}
              {'    '}<span className="text-green-400">"MongoDB"</span>,{'\n'}
              {'    '}<span className="text-green-400">"HTML"</span>,{'\n'}
              {'    '}<span className="text-green-400">"CSS"</span>,{'\n'}
              {'  '}],{'\n'}
              {'  '}passion: <span className="text-green-400">"Building scalable solutions"</span>,{'\n'}
              {'  '}coffee: <span className="text-yellow-400">true</span>{'\n'}
              {'}'};{'\n\n'}
              <span className="text-[hsl(var(--dev-accent))]">developer.init()</span>;
            </pre>
          </div>
        </div>

        {/* Designer Side - Right */}
        <div className={`bg-blue-100 flex items-center justify-center p-8 md:p-16 relative overflow-hidden transition-all duration-500 w-full md:w-1/2 ${
          mobileView === 'designer' ? 'flex' : 'hidden md:flex'
        }`}>
          {/* Ambient background blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300 to-transparent rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          {/* Floating sparkles */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="particle w-1.5 h-1.5 bg-white opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.8}s`
              }}
            />
          ))}
          
          <div className="max-w-lg space-y-8 relative z-10">
            {/* Profile Photo with dreamy effect */}
            <div className="flex justify-center">
              <div className="relative group">
                <img 
                  src={profilePhoto} 
                  alt="Goutham - Developer & Designer" 
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bio with artistic flair */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-design">
                Full Stack Developer
              </h2>
              <p className="text-blue-700 font-design leading-relaxed">
                A passionate full-stack developer with strong technical skills and a drive to   <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">build impactful,</span>,
                <span className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent">real-world solutions.</span>.
              </p>
            </div>

            {/* Features with glassmorphism */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 border border-blue-200 rounded-3xl p-4 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Code2 className="relative w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="relative text-sm font-semibold text-blue-800 font-design">Clean Code</p>
              </div>
              <div className="bg-blue-100 border border-blue-200 rounded-3xl p-4 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Palette className="relative w-6 h-6 text-cyan-600 mb-2 group-hover:scale-110 transition-transform" />
                <p className="relative text-sm font-semibold text-cyan-800 font-design">UI/UX Design</p>
              </div>
              <div className="bg-blue-100 border border-blue-200 rounded-3xl p-4 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Zap className="relative w-6 h-6 text-blue-500 mb-2 group-hover:scale-110 transition-transform" />
                <p className="relative text-sm font-semibold text-blue-800 font-design">Fast & Efficient</p>
              </div>
              <div className="bg-blue-100 border border-blue-200 rounded-3xl p-4 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Heart className="relative w-6 h-6 text-cyan-500 mb-2 group-hover:scale-110 transition-transform" />
                <p className="relative text-sm font-semibold text-blue-800 font-design">User-Centric</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-gradient-to-b from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] animate-pulse-glow"></div>
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-b from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default About;
