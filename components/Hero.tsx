import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, ArrowDown, FileText, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'linkedin': return <Linkedin size={24} />;
      case 'github': return <Github size={24} />;
      case 'mail': return <Mail size={24} />;
      default: return <Mail size={24} />;
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-500 font-semibold tracking-wide mb-4 text-lg">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {PROFILE.name}
          </h1>
          <h3 className="text-2xl md:text-3xl text-gray-300 mb-6">
            {PROFILE.title}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            {PROFILE.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {SOCIAL_LINKS.map((link, idx) => (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800/50 hover:bg-blue-600 hover:text-white text-gray-300 transition-all duration-300 border border-gray-700 hover:border-blue-500"
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
             <a 
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/25"
            >
              View Work
            </a>
            <a 
              href="#"
              className="px-8 py-3 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 group"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
           {/* Placeholder for abstract tech visual since we don't have a photo */}
           <div className="w-full aspect-square relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="text-center p-8">
                <Code size={80} className="text-blue-500 mx-auto mb-4 opacity-50" />
                <p className="text-gray-500 font-mono text-sm">
                  &lt;Developer /&gt;<br/>
                  &lt;Innovator /&gt;<br/>
                  &lt;ProblemSolver /&gt;
                </p>
              </div>
              
              {/* Decorative code lines */}
              <div className="absolute top-6 left-6 w-20 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute top-10 left-6 w-12 h-2 bg-gray-800 rounded-full"></div>
              <div className="absolute bottom-6 right-6 w-24 h-2 bg-gray-800 rounded-full"></div>
           </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;