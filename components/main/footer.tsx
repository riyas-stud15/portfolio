'use client';

import { useState } from "react";
import Link from "next/link";
import { FOOTER_DATA } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (
  e: React.MouseEvent<HTMLAnchorElement>,
  emailAddress: string
) => {
  e.preventDefault();
  navigator.clipboard.writeText(emailAddress);
  setCopied(true);

  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  return (
    <footer className="w-full bg-transparent text-gray-400 border-t border-gray-800/50 pt-[40px] pb-[20px] px-[15px]">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center m-auto">
        
        {/* Links Section */}
        <div className="w-full flex flex-row items-start justify-around flex-wrap gap-10 mb-[40px]">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] flex flex-col items-center md:items-start justify-start"
            >
              <h3 className="font-bold text-[18px] text-gray-200 mb-[15px] tracking-wide">
                {column.title}
              </h3>
              
              {column.data.map(({ icon: Icon, name, link }) => {
                // Check if this specific link is an email
                const isEmail = link.startsWith("mailto:");
                const actualEmail = isEmail ? link.replace("mailto:", "") : "";

                if (isEmail) {
                  return (
                    <div key={`${column.title}-${name}`} className="relative flex items-center">
                      <button
                        onClick={(e) => handleCopyEmail(e, actualEmail)}
                        className="group flex flex-row items-center my-[8px] transition-all duration-300 hover:text-white hover:translate-x-1 cursor-pointer bg-transparent border-none outline-none"
                      >
                        {Icon && (
                          <Icon className="text-xl group-hover:scale-110 transition-transform duration-300" />
                        )}
                        <span className="text-[15px] ml-[10px] font-medium">{name}</span>
                      </button>

                      {/* Floating Copied Tooltip */}
                      <AnimatePresence>
                        {copied && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -25, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.8 }}
                            className="absolute left-8 -top-2 bg-gradient-to-r from-[#7042f8] to-[#00c3ff] text-white text-xs font-bold px-3 py-1 rounded-md shadow-[0_0_15px_rgba(112,66,248,0.5)] pointer-events-none flex items-center gap-1 z-10"
                          >
                            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied!
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // If it's a normal link, render the standard Next.js Link
                return (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex flex-row items-center my-[8px] transition-all duration-300 hover:text-white hover:translate-x-1"
                  >
                    {Icon && (
                      <Icon className="text-xl group-hover:scale-110 transition-transform duration-300" />
                    )}
                    <span className="text-[15px] ml-[10px] font-medium">{name}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="w-full border-t border-gray-800/50 pt-[20px] flex flex-col items-center justify-center text-[14px] text-gray-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} Mohamed Riyas. All rights reserved.
          </p>
          <p className="mt-[4px] text-[12px] opacity-75">
            Designed & Built with Next.js and Tailwind CSS.
          </p>
        </div>
        
      </div>
    </footer>
  );
};