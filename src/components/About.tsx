import { motion } from 'motion/react';
import { USER } from '../data';
import { Code2, Layout, Server } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Projects Done', value: '10+', icon: <Code2 className="text-accent" size={24} /> },
    { label: 'Technologies', value: '15+', icon: <Layout className="text-accent" size={24} /> },
    { label: 'Frontend', value: 'React', icon: <Layout className="text-accent" size={24} /> },
    { label: 'Backend', value: 'Node.js', icon: <Server className="text-accent" size={24} /> },
  ];

  return (
    <section id="about" className="py-24 bg-dark px-8 md:px-24 border-b border-thin">
      <div className="max-w-5xl mx-auto">
        
        <div className="flex items-center gap-4 mb-16">
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[1px] bg-accent"
          ></motion.span>
          <span className="text-[10px] uppercase tracking-widest text-accent">About Me</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-[64px] font-display text-white tracking-tight uppercase leading-[0.85] mb-8">
              BEHIND <br/> THE <span className="text-accent">CODE</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              {USER.objective}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300 border-t border-thin pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Degree</span>
                <span className="font-light">{USER.education[0].degree}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Institution</span>
                <span className="font-light">{USER.education[0].institution}</span>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ 
                  scale: 1.04, 
                  rotateZ: i % 2 === 0 ? 0.8 : -0.8,
                  borderColor: 'rgba(242, 125, 38, 0.4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)'
                }}
                className="bg-white/5 p-8 border border-thin flex flex-col items-start transition-colors group cursor-default"
              >
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <h4 className="text-[32px] font-display text-white mb-2 leading-none">{stat.value}</h4>
                <p className="text-gray-500 font-light text-[10px] tracking-[0.2em] uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

