import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="What I've built" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 bg-gray-800 text-gray-500 text-xs rounded border border-gray-700">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 mt-auto pt-4 border-t border-gray-800">
                  <a href="#" className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    <Github size={16} />
                    Code
                  </a>
                  <a href="#" className="flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors ml-auto">
                    <ExternalLink size={16} />
                    Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;