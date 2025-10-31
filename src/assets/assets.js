// ================== ICON IMPORTS ==================
import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

// ================== IMAGE IMPORTS ==================
import profileImg from "../assets/dp.jpg";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/recipe.jpg";
import projectImg4 from "../assets/project4.avif";
/*
import projectImg3 from "../assets/project3.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";
*/
// ================== EDUCATION LOGOS ==================
import makautLogo from "../assets/makaut.png";
import wbhseLogo from "../assets/wbhse.webp";
import wbbseLogo from "../assets/wbbse-logo.png";

// ================== PROFILE IMAGE EXPORT ==================
export const assets = {
  profileImg,
};

// ================== ABOUT INFO ==================
export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

// ================== SKILLS ==================
export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express.js"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "VS Code", "Figma", "ChatGPT", "Gemini"],
  },
];

// ================== PROJECTS ==================
export const projects = [
  {
    title: "Weather Application",
    description: "A comprehensive Weather Application providing real-time weather updates and forecasts for the coming days.",
    image: projectImg1,
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://weather-info-vibes.netlify.app/",
    code: "https://github.com/SkSahinParvej2001/My-Weather-Application.git",
  },
  {
    title: "Recipe Application",
    description:
      "Helps to find recipes of various food items around the world with suitable instructions and videos",
    image: projectImg2,
    tech: ["HTML5", "CSS3", "JavaScript","REST API"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://foodie-vibes.netlify.app/",
    code: "https://github.com/SkSahinParvej2001/Recipe-Finder-Website-Foodie-Vibes-.git",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "",
  },
];

// ================== WORK EXPERIENCE ==================
export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple",
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink",
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue",
  },
];

// ================== EDUCATION ==================
export const education = [
  {
    institute: "Chhandra High School",
    board: "WBBSE",
    duration: "2011 - 2017",
    description:
      "Completed my Secondary Education with an average percentage of 83%.",
    logo: wbbseLogo,
    color: "orange",
    website:"https://wbbse.wb.gov.in/Web/Home?l=Z%2F%2F2JeEw6P%2FkXiUjdLauQg%3D%3D",
  },
  {
    institute: "Saidpur High School (H.S)",
    board: "WBCHSE",
    duration: "2018 - 2020",
    description:
      "Completed my Higher Secondary Education with an average percentage of 81%.",
    logo: wbhseLogo,
    color: "orange",
    website:"https://wbchse.wb.gov.in/home/",
  },
  {
    institute: "RERF (MAKAUT)",
    board: "MAKAUT WB",
    duration: "2021 - 2025",
    description:
      "Completed Bachelor of Technology in Computer Science and Engineering with a CGPA of 8.41.",
    logo: makautLogo,
    color: "orange",
    website:"https://makautwb.ac.in/",
  },
];
