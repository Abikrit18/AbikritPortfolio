import React from 'react';
import { EXPERIENCES } from '../constants';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <SectionHeading title="Professional Experience" subtitle="My career journey so far" />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-800"></div>

          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-darker z-10"></div>

              {/* Content */}
              <div className="md:w-1/2 pl-8 md:pl-0">
                <div className={`bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-gray-700 transition-all duration-300 ${idx % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                  <div className="flex flex-col gap-1 mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for other side */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;