import { meta, shopify, starbucks, tesla } from "../assets/images/index";
import {
  antDesign,
  appSync,
  car,
  contact,
  css,
  dynamoDB,
  estate,
  express,
  git,
  github,
  graphql,
  html,
  javascript,
  lambda,
  lightsail,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  recaho,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: antDesign,
    name: "Ant Design",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: dynamoDB,
    name: "DynamoDB",
    type: "Database",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
    type: "Backend",
  },
  {
    imageUrl: lambda,
    name: "AWS Lambda Functions",
    type: "Backend",
  },
  {
    imageUrl: appSync,
    name: "AWS Appsync",
    type: "Backend",
  },
  {
    imageUrl: lightsail,
    name: "AWS Lightsail",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Amonex Technology Private Limited",
    icon: recaho,
    iconBg: "#fbc3bc",
    date: "August 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Amonex Technology Private Limited",
    icon: recaho,
    iconBg: "#fbc3bc",
    date: "Jan 2023 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing robust back-end solutions using Node.js, Aws Lambda Functions and GraphQL, optimizing data retrieval and manipulation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "My 3D Portfolio",
    description:
      "My 3D portfolio, built with React and Three.js, showcases a dynamic collection of interactive models and environments. This project highlights my skills in modern web development, combining the power of React with the flexibility of Three.js to create immersive, real-time 3D experiences directly in the browser.",
    link: "https://github.com/Puneet-singh-bijjan/Hangman-App",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Hangman App",
    description:
      "The Hangman app reflects my commitment to delivering not just a game but an interactive and enjoyable experience. With a focus on user-centric design and leveraging cutting-edge technologies.",
    link: "https://github.com/Puneet-singh-bijjan/Hangman-App/tree/master",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "BAS | Buy and Sell App",
    description:
      "A React Native Application where I spearheaded the end-to-end development of a dynamic Buy and Sell application, aiming to provide users with a modern, efficient, and secure platform for trading goods and services.",
    link: "https://github.com/Puneet-singh-bijjan/BAS-react-native",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Web-Based Todo List App",
    description:
      "The Web-Based Todo List App is a dynamic and responsive solution aimed at providing users with a seamless and intuitive platform for organizing and tracking tasks using technologies such as Node.js, Express.js, Ejs template etc.",
    link: "https://github.com/Puneet-singh-bijjan/toDoListApp",
  },
];
