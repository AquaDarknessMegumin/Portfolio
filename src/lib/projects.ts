export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  objectFit?: "cover" | "contain";
}

export const projects: Project[] = [
  {
    title: "DentEase",
    subtitle: "Dental Booking App",
    description: "A dental appointment booking application that streamlines the process of scheduling and managing dental visits. Built as a final project for Application Development.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    tags: ["React", "App Development", "Booking System"],
    githubUrl: "https://github.com/AquaDarknessMegumin/AppDev_FinalProj_Dentease",
    liveUrl: "https://github.com/AquaDarknessMegumin/AppDev_FinalProj_Dentease",
  },
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
    title: "SRN Portfolio",
    subtitle: "Creative Personal Portfolio",
    description: "A premium personal portfolio website showcasing software engineering craft, clean design, and smooth animations. Optimized for fast rendering and fluid navigation.",
    image: "/projects/portfolio.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/AquaDarknessMegumin/Portfolio",
    liveUrl: "https://srn-portfolio-zeta.vercel.app/",
    objectFit: "cover",
  }
];
