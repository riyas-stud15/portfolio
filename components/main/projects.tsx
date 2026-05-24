'use client'; // Required for Framer Motion

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { motion } from "framer-motion";

export const Projects = () => {
  // Animation for the staggered entrance of the cards when scrolling into view
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Decorative Background Blurs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-16"
      >
        <h1 className="text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          My Projects
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 opacity-50" />
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Triggers when 10% of the section is visible
        className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 max-w-7xl mx-auto z-10"
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            // The "Pop up" effect on hover
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group h-full"
          >
            {/* Hover Glow Effect behind the card */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
            
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};