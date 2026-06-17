export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  objectFit?: "cover" | "contain";
  bgColor?: string;
}

export const projects: Project[] = [
  {
    title: "G-Events",
    subtitle: "Event Coordination Platform",
    description: "A modern event planning and coordination web application designed to simplify booking, organizing, and managing events seamlessly.",
    image: "/projects/g-events.png",
    tags: ["Next.js", "Tailwind CSS", "Event Booking"],
    githubUrl: "https://github.com/AquaDarknessMegumin",
    liveUrl: "https://g-events-phi.vercel.app/",
    objectFit: "cover",
  },
  {
    title: "Shawn Ryan",
    subtitle: "Creative Personal Portfolio",
    description: "A premium personal portfolio website showcasing software engineering craft, clean design, and smooth animations. Optimized for fast rendering and fluid navigation.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/AquaDarknessMegumin/Portfolio",
    liveUrl: "https://srn-portfolio-zeta.vercel.app/",
    objectFit: "cover",
  },
  {
    title: "G-Fitness",
    subtitle: "Gym & Fitness Mobile App",
    description: "A comprehensive workout and fitness tracking mobile application built with React Native and Expo. It features exercise logging, history tracking with an interactive calendar, and personalized progress dashboard.",
    image: "/projects/g-fitness-android.png",
    tags: ["React Native", "Expo", "Mobile App", "Fitness Tracker"],
    githubUrl: "https://github.com/AquaDarknessMegumin/Gym-Mobile-App",
    liveUrl: "https://github.com/AquaDarknessMegumin/Gym-Mobile-App",
    objectFit: "contain",
    bgColor: "bg-gradient-to-br from-[#1c183a] to-[#0c0a1b]",
  },
  {
    title: "DentEase",
    subtitle: "Dental Booking App",
    description: "A dental appointment booking application that streamlines the process of scheduling and managing dental visits. Built as a final project for Application Development.",
    image: "/projects/dentease.png",
    tags: ["React", "App Development", "Booking System"],
    githubUrl: "https://github.com/AquaDarknessMegumin/AppDev_FinalProj_Dentease",
    liveUrl: "https://github.com/AquaDarknessMegumin/AppDev_FinalProj_Dentease",
    objectFit: "cover",
  }
];
