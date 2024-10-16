import project1 from "../assets/project_1.jpg"
import project2 from "../assets/project_2.jpg"
import project3 from "../assets/project_3.jpg";


export const HERO_CONTENT = `Hello! I'm a dedicated developer with a passion for crafting innovative and user-friendly web applications. My journey in the tech world is fueled by curiosity and a commitment to excellence. Let's build something extraordinary together!`;

export const ABOUT_TEXT = `I'm an innovative developer with a strong proficiency in React, TypeScript, Tailwind CSS, and Appwrite. I have a proven track record of creating versatile and responsive web applications, from social platforms to banking solutions. My projects consistently feature robust authentication, real-time data management, and exceptional user experiences, demonstrating my ability to handle complex technical challenges with ease.Let's create something extraordinary together!`;



export const PROJECTS = [
  {
    title: "Social web",
    image: project1,
    description:
      "A fully functional social media website with features like posting photos, messaging, and user authentication.",
    technologies: [ "React", "tailwind Css","React-Query", "Appwrite"],
  },
  {
    title: "Banking Website",
    image: project2,
    description:
      "The banking website I developed offers full banking functionalities, including account management, secure transactions, real-time data visualization, and comprehensive financial services.",
    technologies: ["React", "Next js", "Shadcn", "Tailwind css","Appwrite"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React js", "Tailwind Css", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Gorakhpur, Uttar Pradesh ",
  phoneNo: "+918081153148",
  email: "mohdsufiyan99770@gmail.com",
};