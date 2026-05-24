'use client'; // Required for animations

import { HeroContent } from "@/components/sub/hero-content";
import { motion } from "framer-motion";

export const Hero = () => {
  // Animation variants for the whole right section entrance
  const rightSectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 1, 
        delay: 0.5, 
        ease: "easeOut",
        staggerChildren: 0.2 // delay the name entrance after the image
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20 opacity-60">
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      {/* Hero Layout */}
      <div className="relative flex flex-row items-center justify-between w-full h-full px-8 md:px-20 z-10">
        {/* Left: existing hero content */}
        <div className="flex-1">
          <HeroContent />
        </div>

        {/* Right: Profile Image + Name — hidden on mobile, visible md+ */}
        {/* 'group' allows internal elements to react when hovering anywhere here */}
        <motion.div 
          className="hidden md:flex flex-col items-center justify-center relative flex-shrink-0 ml-10 group"
          initial="hidden"
          animate="visible"
          variants={rightSectionVariants}
        >
          {/* IMAGE & RINGS CONTAINER */}
          <div className="relative flex items-center justify-center h-[350px] w-[350px]">
            
            {/* Outer slow-rotating conic ring - Reacts to group hover */}
            <div
              className="absolute rounded-full animate-spin-slow transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12"
              style={{
                width: "320px",
                height: "320px",
                background:
                  "conic-gradient(from 0deg, transparent 60%, #7042f88b 80%, #00c3ff 90%, transparent 100%)",
                filter: "blur(2px)",
              }}
            />

            {/* Inner counter-rotating accent ring - Reacts intensely to group hover */}
            <div
              className="absolute rounded-full animate-spin-reverse transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12"
              style={{
                width: "290px",
                height: "290px",
                background:
                  "conic-gradient(from 180deg, transparent 65%, #ff6ec755 85%, #7042f844 95%, transparent 100%)",
                filter: "blur(1px)",
              }}
            />

            {/* Pulsing Glow aura behind image */}
            <div
              className="absolute rounded-full animate-pulse-slow"
              style={{
                width: "260px",
                height: "260px",
                background:
                  "radial-gradient(circle, rgba(112,66,248,0.3) 0%, rgba(0,195,255,0.15) 60%, transparent 80%)",
                filter: "blur(20px)",
              }}
            />

            {/* Profile image with static float animation */}
            <div
              className="relative rounded-full overflow-hidden animate-float z-10"
              style={{
                width: "240px",
                height: "240px",
                border: "2px solid rgba(112, 66, 248, 0.6)",
                boxShadow:
                  "0 0 30px rgba(112,66,248,0.4), 0 0 60px rgba(0,195,255,0.15), inset 0 0 20px rgba(112,66,248,0.1)",
              }}
            >
              <img
                src="/riyas.jpg"
                alt="Mohamed Riyas Profile"
                className="w-full h-full object-cover object-top"
              />
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(112,66,248,0.08) 100%)",
                }}
              />
            </div>

            {/* Orbiting cyan dot */}
            <div
              className="absolute rounded-full animate-spin-slow pointer-events-none z-20"
              style={{ width: "320px", height: "320px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#00c3ff",
                  top: "6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 10px #00c3ff, 0 0 20px #00c3ff88",
                }}
              />
            </div>

            {/* Orbiting purple dot */}
            <div
              className="absolute rounded-full animate-spin-reverse pointer-events-none z-20"
              style={{ width: "290px", height: "290px" }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: "7px",
                  height: "7px",
                  background: "#7042f8",
                  bottom: "4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 8px #7042f8, 0 0 16px #7042f855",
                }}
              />
            </div>
          </div>

          {/* NAME & TITLE SECTION BELOW IMAGE */}
          <motion.div variants={itemVariants} className="text-center mt-8 flex flex-col items-center">
            {/* The Name with gradient and neon glow */}
            <h2 className="text-4xl font-extrabold tracking-tighter text-white
              bg-gradient-to-r from-[#7042f8] via-[#b49bff] to-[#00c3ff] bg-clip-text text-transparent
              drop-shadow-[0_0_15px_rgba(112,66,248,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(112,66,248,0.8)] transition-all duration-300">
              Mohamed Riyas
            </h2>
            {/* A subtle role subtitle */}
            <p className="text-gray-400 text-lg mt-2 font-medium tracking-wide">
              Full Stack Developer | Freelancer
            </p>
            {/* Minimal decorator line */}
            <div className="w-16 h-1 bg-[#7042f88b] rounded-full mt-4 group-hover:w-24 transition-all duration-500"/>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};