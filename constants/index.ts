import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaEnvelope,FaProjectDiagram } from "react-icons/fa";

// Usage in your component:
// <FaEnvelope className="w-6 h-6 text-white" />

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "Framer Motion",
  //   image: "framer.png",
  //   width: 80,
  //   height: 80,
  // },
  // {
  //   skill_name: "Stripe",
  //   image: "stripe.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/sriyas15", 
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/sriyas15",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/Xh9dvHjIZU", 
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  // {
  //   skill_name: "React Query",
  //   image: "reactquery.png",
  //   width: 80,
  //   height: 80,
  // },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  // {
  //   skill_name: "Firebase",
  //   image: "firebase.png",
  //   width: 55,
  //   height: 55,
  // },
  // {
  //   skill_name: "PostgreSQL",
  //   image: "postgresql.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  // {
  //   skill_name: "Graphql",
  //   image: "graphql.png",
  //   width: 80,
  //   height: 80,
  // },
] as const;

export const FULLSTACK_SKILL = [
  // {
  //   skill_name: "React Native",
  //   image: "reactnative.png",
  //   width: 70,
  //   height: 70,
  // },
  // {
  //   skill_name: "Tauri",
  //   image: "tauri.png",
  //   width: 70,
  //   height: 70,
  // },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "GitHub",
    image: "github.png",
    width: 100,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "Blog Application",
    description:
      'I developed a Blog Application to allow users to easily create, manage, and share blog posts in an organized way. The application provides a clean and user-friendly interface where users can write articles, edit their content, and publish posts for others to read. It focuses on simplicity and accessibility so that anyone can quickly start writing and sharing their ideas.',
    image: "/projects/blog.png",
    link: "https://blog-nine-navy-20.vercel.app",
  },
  {
    title: "Workspace for Office",
    description:
      'I developed a Mattermost Replica Application that mimics the core features of a modern team communication platform. The application allows users to join workspaces, participate in channels, and communicate with team members through real-time messaging. It is designed to simulate the collaborative environment used in many organizations, enabling users to exchange messages, share updates, and stay connected within a structured workspace.',
    image: "/projects/workspace.png",
    link: "https://matter-most-replica.vercel.app",
  },
  // {
  //   title: "Space Themed Website",
  //   description:
  //     'Embark on an interstellar journey with my "Space Themed Website", a mesmerizing space-themed website that invites you to explore the cosmic wonders beyond our world. Immerse yourself in an awe-inspiring digital experience that blends cutting-edge design with the mysteries of the universe.',
  //   image: "/projects/project-3.png",
  //   link: "https://example.com",
  // },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect with me",
    data: [
      {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/sriyas15", 
  },
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/sriyas15",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/Xh9dvHjIZU", 
  },
    ],
  },
  {
    title: "Quick Links",
    data: [
      { name: "About Me", icon: null, link: "#about" },
      { name: "Projects", icon: FaProjectDiagram, link: "#projects" },
      { name: "sriyas1508@gmail.com", icon: FaEnvelope, link: "mailto:sriyas1508@gmail.com" },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
