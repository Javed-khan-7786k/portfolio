import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { USER } from '../data';

export default function Sidebar() {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'RESUME', href: '#resume' },
    { name: 'WORK', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Top Header (visible on mobile/tablet) */}
      <header className="fixed top-0 left-0 right-0 h-14 flex md:hidden items-center justify-between px-6 bg-dark/90 backdrop-blur-md border-b border-thin z-50">
        <a href="#home" className="text-xs font-display tracking-widest text-white uppercase select-none">
          {USER.name}
        </a>
        <div className="flex gap-5 text-white">
          <motion.a 
            href={USER.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            whileTap={{ scale: 0.9 }}
            className="opacity-70 active:opacity-100 text-gray-300 hover:text-accent transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a 
            href={USER.github} 
            target="_blank" 
            rel="noreferrer" 
            whileTap={{ scale: 0.9 }}
            className="opacity-70 active:opacity-100 text-gray-300 hover:text-accent transition-colors"
          >
            <Github size={18} />
          </motion.a>
          <motion.a 
            href={`mailto:${USER.email}`} 
            whileTap={{ scale: 0.9 }}
            className="opacity-70 active:opacity-100 text-gray-300 hover:text-accent transition-colors"
          >
            <Mail size={18} />
          </motion.a>
        </div>
      </header>

      {/* Desktop Left Sidebar (hidden on mobile/tablet) */}
      <aside className="fixed left-0 top-0 h-screen w-16 md:flex flex-col hidden z-50 border-r border-thin bg-dark py-8 items-center justify-between">
        <div className="vertical-text text-[10px] tracking-[0.4em] uppercase opacity-40 text-white select-none">
          Portfolio Vol. 01
        </div>

        <nav className="flex flex-col items-center gap-8 my-8">
          {navItems.map((item) => (
            <motion.a 
              key={item.name} 
              href={item.href}
              whileHover={{ scale: 1.15, color: '#F27D26' }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="vertical-text text-[10px] tracking-[0.2em] uppercase text-white opacity-50 hover:opacity-100 transition-opacity"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="flex flex-col gap-6 text-white">
          <motion.a 
            href={USER.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            whileHover={{ scale: 1.25, color: '#F27D26', y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            href={USER.github} 
            target="_blank" 
            rel="noreferrer" 
            whileHover={{ scale: 1.25, color: '#F27D26', y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href={`mailto:${USER.email}`} 
            whileHover={{ scale: 1.25, color: '#F27D26', y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </aside>
    </>
  );
}


