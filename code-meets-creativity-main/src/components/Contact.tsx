import { useState } from 'react';
import { Mail, Github, Linkedin, Send, Download } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-20">
      <div className="absolute inset-0 flex">
        {/* Developer Side - Left */}
        <div className="w-1/2 bg-[hsl(var(--dev-bg))] flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
          {/* Floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-[hsl(var(--dev-accent))] rounded-full animate-float"></div>
          <div className="absolute bottom-32 right-32 w-3 h-3 bg-[hsl(var(--dev-accent))] rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-lg w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--dev-text))] font-code mb-2 neon-glow-blue">
              {'> contact.init()'}
            </h2>
            <p className="text-[hsl(var(--dev-accent))] mb-8 font-code text-sm">
              // Let's build something together
            </p>

            {/* Terminal window */}
            <div className="bg-[hsl(var(--dev-surface))] rounded-lg border border-[hsl(var(--dev-accent))/0.3] box-glow-blue overflow-hidden">
              <div className="flex gap-2 px-4 py-3 bg-[hsl(var(--dev-bg))] border-b border-[hsl(var(--dev-accent))/0.3]">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6 space-y-2 font-code text-sm">
                <p className="text-[hsl(var(--dev-accent))]">
                  {'>'} <span className="text-purple-400">const</span> <span className="text-[hsl(var(--dev-text))]">email</span> = <span className="text-green-400">"goutham090205@gmail.com"</span>;
                </p>
                <p className="text-[hsl(var(--dev-accent))]">
                  {'>'} <span className="text-purple-400">function</span> <span className="text-yellow-400">sendMessage</span>() {'{'}
                </p>
                <p className="text-[hsl(var(--dev-accent))] pl-4">
                  <span className="text-pink-400">return</span> <span className="text-green-400">"Let's connect!"</span>;
                </p>
                <p className="text-[hsl(var(--dev-accent))]">
                  {'}'}
                </p>
                <p className="text-[hsl(var(--dev-accent))]">
                  {'>'} <span className="terminal-cursor"></span>
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
              <a
                href="mailto:goutham090205@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--dev-surface))] text-[hsl(var(--dev-accent))] rounded-lg border border-[hsl(var(--dev-accent))/0.3] hover:border-[hsl(var(--dev-accent))] hover:box-glow-blue transition-all duration-300 font-code text-sm"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="https://github.com/Goutham-K-CODES"
                className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--dev-surface))] text-[hsl(var(--dev-accent))] rounded-lg border border-[hsl(var(--dev-accent))/0.3] hover:border-[hsl(var(--dev-accent))] hover:box-glow-blue transition-all duration-300 font-code text-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/goutham-k-693695254"
                className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--dev-surface))] text-[hsl(var(--dev-accent))] rounded-lg border border-[hsl(var(--dev-accent))/0.3] hover:border-[hsl(var(--dev-accent))] hover:box-glow-blue transition-all duration-300 font-code text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="/resume.pdf"
                download="Goutham_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--dev-surface))] text-[hsl(var(--dev-accent))] rounded-lg border border-[hsl(var(--dev-accent))/0.3] hover:border-[hsl(var(--dev-accent))] hover:box-glow-blue transition-all duration-300 font-code text-sm"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Designer Side - Right */}
        <div className="w-1/2 bg-blue-100 flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
          {/* Dreamy gradient blobs */}
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-300 to-transparent rounded-full opacity-15 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-cyan-200 to-transparent rounded-full opacity-15 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-blue-200 to-transparent rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          
          {/* Floating sparkle particles */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="particle bg-white"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`,
                opacity: Math.random() * 0.4 + 0.2
              }}
            />
          ))}
          
          <div className="max-w-lg w-full relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-design mb-2">
              Get In Touch
            </h2>
            <p className="text-blue-700 mb-8 font-design">
              Have a project in mind? Let's create something amazing together!
            </p>

            {/* Contact Form with glassmorphism */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-blue-800 text-sm font-medium mb-2 font-design">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-blue-50/80 border border-blue-200 text-blue-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50 backdrop-blur-sm transition-all duration-300 font-design placeholder:text-blue-400 hover:border-blue-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-blue-800 text-sm font-medium mb-2 font-design">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 bg-blue-50/80 border border-blue-200 text-blue-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50 backdrop-blur-sm transition-all duration-300 font-design placeholder:text-blue-400 hover:border-blue-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-blue-800 text-sm font-medium mb-2 font-design">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-3 bg-blue-50/80 border border-blue-200 text-blue-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-50 backdrop-blur-sm transition-all duration-300 resize-none font-design placeholder:text-blue-400 hover:border-blue-300"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-2xl font-medium font-design hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <Send className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                <span className="relative z-10">Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5 bg-gradient-to-b from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] animate-pulse-glow"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-b from-[hsl(var(--divider-start))] to-[hsl(var(--divider-end))] opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default Contact;
