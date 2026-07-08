import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { USER } from '../data';
import { ExternalLink, Github, X } from 'lucide-react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof USER.projects[0] | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 100
      }
    }
  };

  const numberVariants = {
    initial: { x: 0, y: 0, opacity: 0.03, scale: 1 },
    hover: { 
      x: -12, 
      y: 8, 
      opacity: 0.08, 
      scale: 1.08,
      transition: { type: 'spring', stiffness: 120, damping: 15 }
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-dark px-8 md:px-24 border-b border-thin relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[1px] bg-accent"
          ></motion.span>
          <span className="text-[10px] uppercase tracking-widest text-accent">Selected Works</span>
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[64px] font-display text-white uppercase leading-[0.85] mb-16"
        >
          FEATURED <br/> <span className="text-accent">PROJECTS</span>
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {USER.projects.map((project, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
              className="bg-white/5 border border-thin rounded-sm flex flex-col group relative overflow-hidden transition-colors duration-300 hover:border-accent/40 cursor-pointer"
            >
              <div className="p-8 flex-1 flex flex-col border-b border-thin relative overflow-hidden">
                <motion.div 
                  variants={numberVariants}
                  initial="initial"
                  className="absolute -right-4 -top-4 text-[120px] font-display text-white pointer-events-none leading-none select-none"
                >
                  0{i + 1}
                </motion.div>
                
                <h3 className="text-3xl font-light text-white mb-3 group-hover:text-accent transition-colors relative z-10">{project.title}</h3>
                <p className="text-gray-400 font-light text-sm mb-6 flex-1 relative z-10">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] tracking-wider text-gray-500 uppercase border border-thin px-2 py-1 bg-dark">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 flex justify-between items-center bg-dark/50 z-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium hover:text-white transition-colors">
                  View Project Info
                </span>
                <div className="flex gap-4">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a 
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="text-gray-500 hover:text-white transition-colors cursor-pointer"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark/80 backdrop-blur-md"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              className="bg-dark border border-thin w-full max-w-2xl rounded-md overflow-hidden relative z-10 max-h-[85vh] flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer z-50 p-1 bg-white/5 rounded-full"
              >
                <X size={20} />
              </button>

              <div className="p-8 overflow-y-auto flex-1 flex flex-col gap-6">
                <div>
                  <span className="text-[10px] tracking-[0.2em] text-accent uppercase font-medium">Project Showcase</span>
                  <h3 className="text-4xl font-display text-white mt-1 uppercase">{selectedProject.title}</h3>
                </div>

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">Description</h4>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">{selectedProject.description}</p>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-400 font-light">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="text-xs text-gray-300 border border-thin px-3 py-1 bg-white/5 font-light">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 border-t border-thin pt-6 mt-auto">
                  <motion.a 
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 border border-accent text-accent py-3 uppercase tracking-wider text-xs font-semibold rounded-sm hover:bg-accent/5 transition-colors cursor-pointer text-center"
                  >
                    <Github size={16} />
                    <span>GitHub Code</span>
                  </motion.a>
                  
                  <motion.a 
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02, backgroundColor: '#F27D26', color: '#050505' }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 flex items-center justify-center gap-2 bg-accent text-dark py-3 uppercase tracking-wider text-xs font-semibold rounded-sm transition-colors cursor-pointer text-center"
                  >
                    <ExternalLink size={16} />
                    <span>Live Preview</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


