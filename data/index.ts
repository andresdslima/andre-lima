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
    img: b1,
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
    img: grid,
    spareImg: b4,
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: b5,
    spareImg: grid,
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
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: p1,
    iconLists: [re, tail, ts, three, fm],
    link: "https://google.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: p2,
    iconLists: [next, tail, ts, stream, c],
    link: "https://google.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: p3,
    iconLists: [re, tail, ts, three, c],
    link: "https://google.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: p4,
    iconLists: [next, tail, ts, three, gsap],
    link: "https://google.com",
  },
];

export const testimonials = [
  {
    quote:
      "AAA Collaborating with Andre was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Andre's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Andre is the ideal partner.",
    name: "Andre Lima",
    title: "Fullstack Software Developer",
    img: me,
  },
  {
    quote:
      "Collaborating with Andre was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Andre's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Andre is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "",
  },
  {
    quote:
      "Collaborating with Andre was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Andre's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Andre is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "",
  },
  {
    quote:
      "Collaborating with Andre was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Andre's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Andre is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "Cloudinary",
    img: cloud,
    link: "https://www.google.com",
  },
  {
    id: 2,
    name: "Appwrite",
    img: app,
    link: "https://www.google.com",
  },
  {
    id: 3,
    name: "Stream",
    img: s,
    link: "https://www.google.com",
  },
  {
    id: 4,
    name: "Docker.",
    img: dock,
    link: "https://www.google.com",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: exp1,
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: exp2,
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: exp3,
  },
  {
    id: 4,
    title: "Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: exp4,
  },
];

export const footerButtons = [
  {
    id: 1,
    img: git,
    link: "https://github.com/andresdslima",
  },
  {
    id: 2,
    img: link,
    link: "https://www.linkedin.com/in/andrelimadev",
  },
  {
    id: 3,
    img: file20,
    link: "https://bit.ly/andrelimadev",
  },
  {
    id: 4,
    img: upArrow,
    link: "#home",
  },
];
