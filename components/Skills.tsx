import React from 'react';
import { SKILLS, CERTIFICATIONS } from '../constants';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-darker relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Skills" subtitle="Languages, frameworks, and tools I use" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award size={32} className="text-yellow-500" />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <span key={idx} className="px-6 py-2 bg-blue-600/20 text-blue-200 rounded-full border border-blue-500/30 font-medium">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;