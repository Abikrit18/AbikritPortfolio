import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 bg-darker border-t border-gray-900">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-blue-900/10 border border-blue-900/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto"
            >
                <div className="flex items-center gap-6">
                    <div className="p-4 bg-blue-600 rounded-full text-white shadow-lg shadow-blue-600/30">
                        <GraduationCap size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">{EDUCATION.school}</h3>
                        <p className="text-blue-400 font-medium text-lg">{EDUCATION.degree}</p>
                    </div>
                </div>
                <div className="text-right md:text-left">
                    <p className="text-gray-400">{EDUCATION.period}</p>
                    <p className="text-white font-bold mt-1">GPA: {EDUCATION.gpa}</p>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Education;