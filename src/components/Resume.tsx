import { motion } from 'motion/react';
import { USER } from '../data';
import { Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-dark px-8 md:px-24 border-b border-thin">
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-[1px] bg-accent"
            ></motion.span>
            <span className="text-[10px] uppercase tracking-widest text-accent">Capabilities</span>
          </div>

          <motion.a
            href="/resume.pdf"
            download="Javed_Alam_Resume.pdf"
            whileHover={{ scale: 1.05, backgroundColor: '#F27D26', color: '#050505' }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border border-accent text-accent px-4 py-2 text-[10px] uppercase tracking-widest transition-colors rounded-sm cursor-pointer font-medium"
          >
            <Download size={12} />
            <span>Download CV</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[48px] font-display text-white uppercase leading-[0.85] mb-10"
            >
              TECHNICAL <br /> <span className="text-accent">SKILLS</span>
            </motion.h2>

            <div className="space-y-8">
              {Object.entries(USER.skills).map(([category, items], catIdx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                  className="border-t border-thin pt-6"
                >
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          delay: catIdx * 0.05 + i * 0.02
                        }}
                        whileHover={{
                          scale: 1.1,
                          borderColor: '#F27D26',
                          color: '#F27D26',
                          backgroundColor: 'rgba(242, 125, 38, 0.05)',
                          boxShadow: '0 0 10px rgba(242, 125, 38, 0.2)'
                        }}
                        className="bg-white/5 text-gray-300 px-3 py-1 text-xs font-light border border-thin rounded-sm transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[48px] font-display text-white uppercase leading-[0.85] mb-10"
            >
              ACADEMIC <br /> <span className="text-accent">PATH</span>
            </motion.h2>

            <div className="ml-2 pl-8 pb-4 relative">
              {/* Timeline Lines */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-[1px] bg-white/10 origin-top"
              />
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '50%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                className="absolute left-0 top-0 w-[1px] bg-accent origin-top"
              />

              {/* Node dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute w-2.5 h-2.5 bg-accent -left-[4.5px] top-2 rounded-full border border-dark z-10"
              />

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/5 p-8 border border-thin rounded-sm group hover:border-accent/50 transition-colors"
              >
                <span className="inline-block text-accent text-[10px] tracking-[0.2em] uppercase mb-4">
                  {USER.education[0].date}
                </span>
                <h4 className="text-2xl font-light text-white mb-2 group-hover:text-accent transition-colors">{USER.education[0].degree}</h4>
                <p className="text-gray-400 font-light text-sm">{USER.education[0].institution}</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

