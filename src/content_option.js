import challenge from './assets/images/challenge.png';
import tracker from './assets/images/Ip tracker.jpg';
import sociaMedia from './assets/images/social media.jpg';

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
    description: "Taiwo Ola-Balogun is a multifaceted individual, currently pursuing a medical degree at the College of Medicine, University of Lagos. Alongside his medical studies, he has ventured into the field of software engineering, successfully completing a rigorous 13-month ALX Africa Software Engineering Program.",
    your_img_url: "https://ddgimgs-f43e.kxcdn.com/2147107/ymctd0_a04173f4cc9734d8087aeceac8444055f13b845c.jpg",
};

const dataabout = {
    title: "About myself",
    aboutme: "I am a multifaceted individual, currently pursuing a medical degree at the College of Medicine, University of Lagos. Alongside my medical studies, I have ventured into the field of software engineering, successfully completing a rigorous 13-month ALX Africa Software Engineering Program.With a passion for both medicine and technology, I showcase a unique blend of skills and interests. My dedication to my medical education demonstrates my commitment to improving healthcare and making a positive impact on people's lives. Simultaneously, my foray into software engineering reveals my innovative thinking and desire to contribute to the technological advancements that shape our world. As a medical student, I am equipped with a deep understanding of human health and wellness, complemented by my expertise in software engineering. This diverse skill set allows me to approach healthcare challenges with a fresh perspective, utilizing technology to enhance patient care, medical research, and overall healthcare systems.My journey as a medical student and software engineer is a testament to my determination, adaptability, and intellectual curiosity. I am poised to make significant contributions to both fields, leveraging my unique background to bridge the gap between medicine and technology, ultimately improving the quality of healthcare delivery and shaping the future of healthcare innovation.",
};
const worktimeline = [{
        jobtitle: "BackEnd Developer",
        where: "Kreatif Mxnds",
        date: "2023",
    },
];

const skills = [{
        name: "Python",
        value: 80,
    },
    {
        name: "Flask",
        value: 90,
    },
    {
        name: "Javascript",
        value: 75,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "Jquery",
        value: 75,
    },
    {
        name: "Typescipt",
        value: 90,
    },
    {
        name: "Bash",
        value: 85,
    },
    {
        name: "C",
        value: 65,
    },
    {
        name: "Node JS",
        value: 80,
    },
    {
        name: "React Native",
        value: 65,
    },
    {
        name: "Express",
        value: 85,
    },
];

const services = [{
        title: "Mobile App Development",
        description: "As a software engineer, I specialize in mobile app development using React Native. React Native is a popular framework that allows me to build cross-platform mobile applications using JavaScript. It enables me to write code once and deploy it on both iOS and Android platforms, saving time and effort.ith React Native, I can create native-like user interfaces and leverage platform-specific features and APIs. I use React Native's component-based architecture to develop reusable UI components, resulting in a consistent and efficient development process. The framework provides a wide range of pre-built components and libraries, making it easier to implement various functionalities in the app.",
    },
    {
        title: "Web Application Development",
        description: "As a software engineer, I specialize in web app development using React. React is a popular JavaScript library that allows me to build dynamic and interactive user interfaces for web applications.With React, I can break down the user interface into reusable components, making the development process more modular and efficient. Each component manages its own state and updates the user interface when changes occur, resulting in a smooth and responsive user experience.",
    },
];

const dataportfolio = [
    {
        img: tracker,
        description: "An Ip tracker to track Ip of domains across the globe and their Location on map",
        link: "https://ip-address-tracker-master-ten-gules.vercel.app/",
    },
    {
        img: challenge,
        description: "An application that allow programmers to challenge themselves",
        link: "https://challengedeveloper.netlify.app/",
    },
    {
        img: sociaMedia,
        description: "Social Media management dashboard",
        link: "https://github.com/Titre123/social-media-dashboard",
    },
];

const contactConfig = {
    YOUR_EMAIL: "taiwotriumphant@gmail.com",
    YOUR_FONE: "+2349015314257",
    description: "Seamless communication made easy. Connect with me through a user-friendly contact form. Reach out for inquiries, collaborations, or questions. I'm just a message away. Efficient and secure contact form for prompt responses and professional communication.",
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