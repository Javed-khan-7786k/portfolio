import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { USER } from '../data';

export default function Hero() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateXSpring = useSpring(useTransform(y, [0, 1], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateYSpring = useSpring(useTransform(x, [0, 1], [-15, 15]), { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  const nameContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      }
    }
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 120
      }
    }
  };

  const firstName = USER.name.split(' ')[0];
  const lastName = USER.name.split(' ')[1];

  return (
    <section id="home" className="min-h-screen flex items-center bg-dark relative overflow-hidden px-8 md:px-24 border-b border-thin">
      <div className="w-full relative z-10 flex flex-col justify-center">
        
        <header className="absolute top-8 left-0 right-0 flex justify-between items-baseline mb-12 w-full hidden md:flex">
          <div className="text-[11px] tracking-widest uppercase opacity-80 text-white">{USER.role}</div>
          <div className="text-[11px] tracking-widest uppercase opacity-80 text-white">Based in {USER.location.split(',')[0]}</div>
        </header>

        <div className="relative mt-20 md:mt-0 w-full">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 mb-12">
            <div className="relative">
              <div className="absolute -left-4 md:-left-10 top-0 text-[100px] md:text-[180px] font-display opacity-[0.03] select-none text-white pointer-events-none">
                {firstName.toUpperCase()}
              </div>
              
              <motion.h1 
                variants={nameContainer}
                initial="hidden"
                animate="visible"
                className="text-[80px] md:text-[112px] font-display relative z-10 text-white leading-[0.85] uppercase flex flex-col"
              >
                <span className="flex overflow-hidden">
                  {firstName.split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariant} className="inline-block origin-bottom">
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="text-accent flex overflow-hidden">
                  {lastName.split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariant} className="inline-block origin-bottom">
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </div>

            <motion.div 
              style={{
                perspective: 1000,
              }}
              className="relative w-64 h-80 lg:w-[280px] lg:h-[360px] shrink-0 z-10 mx-auto lg:mx-0"
            >
              <motion.div
                style={{
                  rotateX: rotateXSpring,
                  rotateY: rotateYSpring,
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="w-full h-full relative group cursor-pointer"
              >
                <div className="absolute inset-0 border border-accent translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                <img 
                  src="/profile.jpg" 
                  alt={USER.name} 
                  className="w-full h-full object-cover border border-thin rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-20 pointer-events-none group-hover:opacity-0 transition-opacity rounded-sm" />
              </motion.div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between gap-12 border-t border-thin pt-10 w-full">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-[1px] bg-accent"
                ></motion.span>
                <span className="text-[10px] uppercase tracking-widest text-accent">Introduction</span>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-gray-400 font-light max-w-sm text-sm leading-relaxed"
              >
                {USER.objective}
              </motion.p>
            </div>
            
            <div className="flex flex-col w-full md:w-80 lg:w-96">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/5 p-8 border border-thin rounded-sm "
              >
                <div className="text-[10px] uppercase tracking-[0.3em] mb-6 text-gray-500">Contact Information</div>
                <div className="grid grid-cols-1 gap-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Email</span>
                    <a href={`mailto:${USER.email}`} className="font-light text-gray-300 hover:text-accent transition-colors break-all text-sm">{USER.email}</a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">Phone</span>
                    <a href={`tel:${USER.phone}`} className="font-light text-gray-300 hover:text-accent transition-colors text-sm">{USER.phone}</a>
                  </div>
                  <div className="flex flex-col gap-1 pt-3 border-t border-thin">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Status</span>
                    <span className="text-accent font-light flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> Available for Hire
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2 }}
          className="relative bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] tracking-[0.2em] uppercase text-gray-500 hidden md:flex"
        >
          <span>Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-3 bg-accent rounded-full"
          />
        </motion.div>

      </div>
    </section>
  );
}

