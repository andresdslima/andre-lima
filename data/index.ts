import { NavItem } from "../components/ui/FloatingNavbar";
import b1 from "../public/b1.svg";
import grid from "../public/grid.svg";
import b4 from "../public/b4.svg";
import b5 from "../public/b5.svg";
import p1 from "../public/p1.svg";
import re from "../public/re.svg";
import tail from "../public/tail.svg";
import ts from "../public/ts.svg";
import three from "../public/three.svg";
import fm from "../public/fm.svg";
import p2 from "../public/p2.svg";
import next from "../public/next.svg";
import stream from "../public/stream.svg";
import c from "../public/c.svg";
import p3 from "../public/p3.svg";
import p4 from "../public/p4.svg";
import gsap from "../public/gsap.svg";
import me from "../public/me.png";
import cloud from "../public/cloud.svg";
import app from "../public/app.svg";
import s from "../public/s.svg";
import dock from "../public/dock.svg";
import exp1 from "../public/exp1.svg";
import exp2 from "../public/exp2.svg";
import exp3 from "../public/exp3.svg";
import exp4 from "../public/exp4.svg";
import git from "../public/git.svg";
import link from "../public/link.svg";
import file20 from "../public/file-20.png";
import upArrow from "../public/up-arrow.png";

const JS = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg";
const ANGULAR = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg";
const NODE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg";
const SASS = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg";
const BOOTSTRAP = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg";
const REDUX = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg";

export const navItems: NavItem[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    // img: b1,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
    // img: grid,
    // spareImg: b4,
  },

  {
    id: 5,
    title: "Currently building a JS/TS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    // img: b5,
    // spareImg: grid,
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Pet Match",
    des: "Web app to find the best match for your next beautiful pet. You can choose from different breeds and filter by location.",
    img: "/petmatch.png",
    iconLists: [
      "/re.svg",
      REDUX,
      BOOTSTRAP,
      JS,
      NODE,
    ],
    // img: p1,
    // iconLists: [
    //   "/re.svg",
    //   REDUX,
    //   BOOTSTRAP,
    //   JS,
    //   NODE,
    // ],
    link: "https://thepetmatch.vercel.app",
  },
  {
    id: 2,
    title: "Dealer BMW",
    des: "Simple example page for a car dealership. You can click on the car to hear its engine running.",
    img: "/dealer.png",
    iconLists: ["/re.svg", JS, SASS],
    // img: p2,
    // iconLists: ["/re.svg", JS, SASS],
    link: "https://andresdslima-autoforce.vercel.app",
  },
  {
    id: 3,
    title: "Fastfood",
    des: "Web app to order your favorite fast food. Includes: Order page, Kitchen page (staff only) and Pickup page.",
    img: "/fastfood.png",
    iconLists: ["/re.svg", "/ts.svg", SASS],
    // img: p3,
    // iconLists: ["/re.svg", "/ts.svg", SASS],
    link: "https://andresdslima-devio.vercel.app",
  },
  {
    id: 4,
    title: "Weather app",
    des: "Minimalistic weather app displaying the current weather conditions of a given location.",
    img: "/weather.png",
    iconLists: [ANGULAR, JS, "/ts.svg", SASS],
    // img: p4,
    // iconLists: [ANGULAR, JS, "/ts.svg", SASS],
    link: "https://angular-weather-andresdslima.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with André at VIA Consulting, where he demonstrated strong expertise in React and React Native. André consistently suggested thoughtful refactorings that improved code quality and maintainability. He also approached problems with creativity, often presenting multiple viable solutions. His technical skills and proactive mindset made a significant impact on our projects.",
    name: "João Henrique Wind Santos",
    title: "Software Developer",
    link: "https://www.linkedin.com/in/joaowind/",
    img: "/joao-wind.png",
    // img: me,
  },
  {
    quote:
      "André is the definition of a professional, an amazing software engineer, anything javascript/typescript related, this guy knows it all, awesome communication skills, just an overall top notch guy, I 100% recommend him to any software engineering job!",
    name: "Lucas Soares",
    title: "AI/ML Software Engineer",
    link: "https://www.linkedin.com/in/lucas-soares-969044167/",
    img: "/lucas-soares.png",
  },
  {
    quote:
      "Andre is not just a skilled Software Developer, he's a reliable and collaborative team member who elevates every project he engages in. His proficiency spans Web and Mobile Development, REST APIs and an array of technologies, including TypeScript, React, Django and more. Andre's commitment to excellence, problem-solving prowess, and mastery of collaborative tools make him an invaluable asset to any project...",
    name: "Diego Hartmann",
    title: "Software Engineer",
    link: "https://www.linkedin.com/in/diegohart/",
    img: "/diego.png",
  },
  {
    quote:
      "André is a pro-active and self-driven team-player, aware of the value-add and expected contribution to common team-goals. During his internship he learned continuously and managed to build the required competence in order to achieve the planned goals. Proved to be successful in contributing to production level code. Reliable and precise in performing his tasks and removing obstacles.",
    name: "Sándor Szilágyi",
    title: "Product Development Leader",
    link: "https://www.linkedin.com/in/s%C3%A1ndor-szil%C3%A1gyi-390a493/",
    img: "/sandor.png",
  },
  {
    quote:
      "I had the pleasure of working with André for some time at Critical Techworks, and his dedication to the team and company culture stood out. Beyond being a skilled and eager-to-learn developer, he brought people together by organizing team-building activities and actively engaging in company initiatives. André’s positive energy and collaborative spirit made him a valuable part of the team.",
    name: "Manuel Pimenta",
    title: "Product Owner",
    link: "https://www.linkedin.com/in/manuelpimenta/",
    img: "/manuel.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "BMW Group",
    img: "/bmw.png",
    // img: cloud,
    link: "https://www.linkedin.com/company/bmw-group/",
  },
  {
    id: 2,
    name: "Critical Techworks",
    img: "/ctw.png",
    // img: app,
    link: "https://www.linkedin.com/company/criticaltechworks/",
  },
  {
    id: 3,
    name: "Otovo",
    img: "/otovo.png",
    // img: s,
    link: "https://www.linkedin.com/company/otovo/",
  },
  {
    id: 4,
    name: "VIA Consulting",
    img: "/via.png",
    // img: dock,
    link: "https://www.linkedin.com/company/via-consulting-s.a./",
  },
  {
    id: 5,
    name: "Ericsson",
    img: "/ericsson.png",
    // img: dock,
    link: "https://www.linkedin.com/company/ericsson/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Fullstack Software Developer @ Critical Techworks - BMW Group",
    desc: "Focused on the MAESTRO Finance platform for BMW Group. Developed, maintained and gave support to the web and server code in different environments (Development, Staging, Production), enabling BMW managers to plan and keep track of all necessary tools (including overall costs) for the production line of new and current projects. Collaborated directly with BMW Team members, handling business knowledge, requirements, and backlogs for our product.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    // thumbnail: exp1,
  },
  {
    id: 2,
    title: "Fullstack Software Developer @ Otovo",
    desc: "Worked on the development of a Solar Energy platform/app, where Customers could have a first budget for installing solar panels on their houses. Also, the platform was able to calculate an estimation of how much energy would be produced by these solar panels (according to different specifications and manufacturers).",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    // thumbnail: exp2,
  },
  {
    id: 3,
    title: "Fullstack Software Developer @ VIA Consulting",
    desc: "Worked on the development of a Finance platform/app for a Portuguese bank. The application had the standard features of bank apps, for instance: transaction history, money transfers, payments, etc. We started this application from zero and also worked on the maintenance and support.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    // thumbnail: exp3,
  },
  {
    id: 4,
    title: "Fullstack Software Developer @ Ericsson",
    desc: "Worked on the development of a Cybersecurity Management Web app for Telecommunication companies. The app basically handled the communication between several devices of a Telecom network, such as: antennas, stores, warehouses, etc. Also, worked on the maintenance and support.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    // thumbnail: exp4,
  },
];

export const footerButtons = [
  {
    id: 1,
    img: "/git.svg",
    // img: git,
    link: "https://github.com/andresdslima",
  },
  {
    id: 2,
    img: "/link.svg",
    // img: link,
    link: "https://www.linkedin.com/in/andrelimadev",
  },
  {
    id: 3,
    img: "/file-20.png",
    // img: file20,
    link: "https://bit.ly/andrelimadev",
  },
  {
    id: 4,
    img: "/up-arrow.png",
    // img: upArrow,
    link: "#home",
  },
];
