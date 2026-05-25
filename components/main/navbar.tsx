'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants for the mobile menu container
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Animation variants for individual mobile links
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-md z-50 px-10 border-b border-[#2A0E61]/50"
    >
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        
        {/* Logo + Developer Tag */}
        <Link href="#about-me" className="flex items-center group">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              draggable={false}
              className="cursor-pointer"
            />
          </motion.div>
          
          {/* Replaced Name with stylized <Developer /> Tag */}
          <div className="hidden md:flex items-center ml-[12px] font-mono text-lg font-bold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7042f8] to-[#b49bff] group-hover:drop-shadow-[0_0_10px_rgba(112,66,248,0.8)] transition-all duration-300">
              &lt;
            </span>
            <span className="text-gray-300 group-hover:text-white transition-colors duration-300 mx-1">
              Developer
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b49bff] to-[#00c3ff] group-hover:drop-shadow-[0_0_10px_rgba(0,195,255,0.8)] transition-all duration-300">
              /&gt;
            </span>
          </div>
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 shadow-[0_0_15px_rgba(112,66,248,0.15)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="relative cursor-pointer text-sm font-medium hover:text-white transition-colors group"
              >
                {link.title}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#b49bff] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}

          </div>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <motion.div key={name} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }}>
              <Link href={link} target="_blank" rel="noreferrer noopener">
                <Icon className="h-6 w-6 text-gray-400 hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Animated Hamburger Icon */}
        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none flex flex-col justify-center items-center w-8 h-8 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out my-1 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-[65px] left-0 w-full bg-[#030014]/95 backdrop-blur-xl border-b border-[#2A0E61]/50 p-6 flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] md:hidden origin-top"
          >
            {/* Links */}
            <div className="flex flex-col items-center gap-6 w-full">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.title} variants={itemVariants} className="w-full">
                  <Link
                    href={link.link}
                    className="block w-full text-center text-lg text-gray-300 hover:text-white hover:bg-[#2A0E61]/30 py-2 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              
            </div>

            {/* Social Icons (Mobile) */}
            <motion.div variants={itemVariants} className="flex justify-center gap-8 mt-8 pb-4">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={name}
                  className="p-2 bg-[#2A0E61]/30 rounded-full hover:bg-[#2A0E61]/80 transition-colors"
                >
                  <Icon className="h-6 w-6 text-gray-300 hover:text-white" />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};