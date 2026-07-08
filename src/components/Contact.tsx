import React, { useState } from 'react';
import { motion } from 'motion/react';
import { USER } from '../data';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${USER.email}?subject=${subject}&body=${body}`;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark text-white px-8 md:px-24">
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[1px] bg-accent"
          ></motion.span>
          <span className="text-[10px] uppercase tracking-widest text-accent">Get In Touch</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[64px] font-display text-white uppercase leading-[0.85] mb-8"
            >
              LET'S BUILD <br/> <span className="text-accent">SOMETHING</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-400 font-light mb-12 max-w-sm"
            >
              Available for freelance opportunities and full-time positions. 
              Let's discuss how we can work together.
            </motion.p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 border-t border-thin pt-8"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-6 group cursor-default">
                <div className="text-accent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Location</h4>
                  <p className="font-light text-gray-300 group-hover:text-white transition-colors">{USER.location}</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-6 group cursor-default">
                <div className="text-accent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Email</h4>
                  <a href={`mailto:${USER.email}`} className="font-light text-gray-300 hover:text-accent transition-colors">{USER.email}</a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-6 group cursor-default">
                <div className="text-accent opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">Phone</h4>
                  <a href={`tel:${USER.phone}`} className="font-light text-gray-300 hover:text-accent transition-colors">{USER.phone}</a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="bg-white/5 p-8 border border-thin rounded-sm flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="text-[10px] uppercase tracking-[0.3em] mb-2 text-gray-500">Send a Message</div>
              
              <div className="relative group/field">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-dark border border-thin rounded-sm px-4 py-3 text-white font-light focus:outline-none focus:border-accent/50 transition-colors text-sm"
                  placeholder="Your Name"
                  required
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-accent transition-all duration-300 -translate-x-1/2 group-focus-within/field:w-full" />
              </div>
              
              <div className="relative group/field">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-dark border border-thin rounded-sm px-4 py-3 text-white font-light focus:outline-none focus:border-accent/50 transition-colors text-sm"
                  placeholder="Your Email"
                  required
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-accent transition-all duration-300 -translate-x-1/2 group-focus-within/field:w-full" />
              </div>
              
              <div className="relative group/field">
                <textarea 
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-dark border border-thin rounded-sm px-4 py-3 text-white font-light focus:outline-none focus:border-accent/50 transition-colors text-sm resize-none"
                  placeholder="Your Message..."
                  required
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-accent transition-all duration-300 -translate-x-1/2 group-focus-within/field:w-full" />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: '#ffffff', color: '#050505' }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-dark font-display text-xl px-8 py-4 uppercase tracking-wider transition-colors mt-2 cursor-pointer"
              >
                Send Request
              </motion.button>
            </form>
          </motion.div>

        </div>

        <footer className="mt-24 flex flex-col md:flex-row justify-between items-end border-t border-thin pt-8 gap-8">
          <div className="text-[40px] font-display leading-none opacity-20 order-2 md:order-1 select-none">2026 EDITION</div>
          <div className="flex gap-12 md:gap-20 order-1 md:order-2 w-full md:w-auto">
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-tighter text-gray-500 mb-1">GitHub Activity</div>
              <div className="text-xl font-light">Active</div>
            </div>
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-tighter text-gray-500 mb-1">Primary Stack</div>
              <div className="text-xl font-light">MERN Stack</div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

