import challenge from "./assets/images/challenge.png";
import tracker from "./assets/images/Ip tracker.jpg";
import sociaMedia from "./assets/images/social media.jpg";
import getlinked from "../src/assets/images/getlinked.png";
import untitled from "../src/assets/images/untitled.png";
import moil from "../src/assets/images/moil.png";

const logotext = "TAIWO";
const meta = {
  title: "Taiwo Ola-Balogun",
  description: "I’m Taiwo Ola-Balogun, a Full stack devloper",
};

const introdata = {
  title: "I’m Taiwo Ola-Balogun",
  animated: {
    first: "I am a Fullstack Developer",
    second: "I am a Software Engineer",
    third: "I am a Mobile App Developer",
  },
  description:
    "Taiwo Ola-Balogun is a Software Engineer with years of experience building dynamic and user friendly web applications",
  your_img_url:
    "https://ddgimgs-f43e.kxcdn.com/2147107/ymctd0_a04173f4cc9734d8087aeceac8444055f13b845c.jpg",
};

const dataabout = {
  title: "About myself",
  aboutme:
    "I am a dedicated Software Engineer with a strong commitment to crafting user-friendly interfaces. My primary focus revolves around front-end development, where I specialize in using React to create intuitive and engaging user experiences. Additionally, I am proficient in back-end technologies, including Express, MySQL, and Node.js, allowing me to build robust and responsive web applications from end to end",
};
const worktimeline = [
  {
    jobtitle: "Software Engineer",
    where: "ALX",
    date: "02/2023 - 04/2023",
  },
  {
    jobtitle: "BackEnd Engineer",
    where: "Kreatif Mxnds",
    date: "02/2023 - 04/2023",
  },
  {
    jobtitle: "FrontEnd Engineer",
    where: "Kreatif Mxnds",
    date: "06/2023 - Date",
  },
];

const skills = [
  {
    name: "Python",
    value: '05',
  },
  {
    name: "Flask",
    value: '90',
  },
  {
    name: "Javascript",
    value: '75',
  },
  {
    name: "React",
    value: '90',
  },
  {
    name: "Jquery",
    value: '75',
  },
  {
    name: "Typescipt",
    value: '90',
  },
  {
    name: "Bash",
    value: '85',
  },
  {
    name: "C",
    value: '65',
  },
  {
    name: "Node JS",
    value: '90',
  },
  {
    name: "React Native",
    value: '65',
  },
  {
    name: "Express",
    value: '90',
  },
];

const services = [
  {
    title: "Mobile App Development",
    description:
      "As a software engineer, I specialize in mobile app development using React Native. React Native is a popular framework that allows me to build cross-platform mobile applications using JavaScript. It enables me to write code once and deploy it on both iOS and Android platforms, saving time and effort.ith React Native, I can create native-like user interfaces and leverage platform-specific features and APIs. I use React Native's component-based architecture to develop reusable UI components, resulting in a consistent and efficient development process. The framework provides a wide range of pre-built components and libraries, making it easier to implement various functionalities in the app.",
  },
  {
    title: "Web Application Development",
    description:
      "As a software engineer, I specialize in web app development using React. React is a popular JavaScript library that allows me to build dynamic and interactive user interfaces for web applications.With React, I can break down the user interface into reusable components, making the development process more modular and efficient. Each component manages its own state and updates the user interface when changes occur, resulting in a smooth and responsive user experience.",
  },
];

const dataportfolio = [
  {
    img: getlinked,
    description:
      "An application built for getLinkedAI using React. It allows teams to sign up and participate in hackathons",
    link: "https://get-linked-taiwo.vercel.app/",
  },
  {
    img: moil,
    description:
      "An job posting and resume builder application built for moil Company, Texas.",
    link: "https://moilapp.com",
  },
  {
    img: untitled,
    description:
      "An untitled application built as a boiler plate for SaaS applications. This application is still under development",
    link: "https://untitled-design.vercel.app/",
  },
  {
    img: challenge,
    description:
      "An application that allow programmers to challenge themselves",
    link: "https://challengedeveloper.netlify.app/",
  },
  {
    img: sociaMedia,
    description: "Social Media management dashboard",
    link: "https://github.com/Titre123/social-media-dashboard",
  },
  {
    img: tracker,
    description:
      "An Ip tracker to track Ip of domains across the globe and their Location on map",
    link: "https://ip-address-tracker-master-ten-gules.vercel.app/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "taiwotriumphant@gmail.com",
  YOUR_FONE: "+2349015314257",
  description:
    "Connect with me through a user-friendly contact form. Reach out for inquiries, collaborations, or questions. I'm just a message away.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "Portfolio",
  YOUR_TEMPLATE_ID: "template_1k3asth",
  YOUR_USER_ID: "zhtvYM7bstoZ-u3XZ",
};

const socialprofils = {
  github: "https://github.com/Titre123",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/taiwo-triumphant-codex/",
  twitter: "https://twitter.com/DumbDevs",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
