"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer (MERN)
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Will Provide{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            services.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;am a Full Stack Developer specializing in the MERN stack 
          and currently working as a Full Stack Developer Intern.
        </motion.p>

       <motion.a
        href="https://www.fiverr.com/sriyas15/build-a-full-stack-web-application-using-mern-stack?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=99ba6bf47f0d4f24976ead59e2033f8b&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&seller_online=true&imp_id=95ba2ab8-d062-44c7-b6b8-31895ff26cac"
        target="_blank"
        rel="noopener noreferrer"
        variants={slideInFromLeft(1)}
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
      >
        Hire Me
      </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
