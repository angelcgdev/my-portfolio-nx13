import { Project } from "../../models/project.model";

export const data = {
  name: "Luis Caro",
  role: "Frontend and mobile developer",
  location: "Lima - Perú",

  socials: [
    { title: "Github", link: "https://github.com/angelcgdev" },
    { title: "LinkedIn", link: "https://www.linkedin.com/in/angelcgdev/" },
    { title: "Twitter", link: "https://twitter.com/angelcgdev" },
    // { title: "Blog", link: "https://blog.angelcgdev.com/" },
    { title: "Email", link: "mailto:luisangelcarogaloc@gmail.com" },
  ],

  // End Header Details -----------------------

  // Portfolio Section ------------------------

  // End Portfolio Section -----------------------

  // Services Section ---------------

  services: [
    {
      title: "Art Direction",
      description:
        "We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.",
    },
    {
      title: "Branding",
      description:
        "We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.",
    },
    {
      title: "Web Design",
      description:
        "We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel.",
    },
    {
      title: "3D Design",
      description:
        "We combine creative design and technical skills to build striking 3D visualisations that bring your project to life.",
    },
  ],

  // End Services Section --------------------------

  // About Secton --------------
  aboutpara: `Peruvian Frontend Developer with +3 years of experience, I have developed and maintained web and mobile applications using JavaScript, React, flutter, Firebase, NodeJs, MySQL along with other technologies, always motivated to help the team with my knowledge and experience.
  I am a technology fanatic always motivated to learn new things and take on new challenges. I love discussing topics related to efficiency optimization and use of best practices. I would like to work on projects related to blockchain and intelligence.`,
  technologies: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "React Native",
    "Redux Toolkit",
    "Flutter",
  ],
  //   End About Section ---------------------
  // Experience --------------------
  experience: [
    // {
    //   id: 3,
    //   position: "Tech Coach",
    //   company: "Talently",
    //   range: "Febrary 2023 - Currently",
    //   activities: [
    //     "Mentoring 1:1 with developers of all levels.",
    //     "Teach different technologies such as Javascript, TypeScript, React, flutter, Solid Principles.",
    //   ],
    // },
    {
      id: 2,
      position: "FullStack developer",
      company: "GRUPO EBIM",
      range: "July 2022 - Currently",
      activities: [
        "Improve previus implementations.",
        "Make proposals for some customers.",
        "Write clean code and test it.",
      ],
    },
    {
      id: 1,
      position: "Frontend developer",
      company: "Cooporación Mallky",
      range: "Octuber 2020 - Jun 2022",
      activities: [
        "Developed and maintained code.",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness.",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, NextJs, Flutter.",
      ],
    },
  ],
  // End Experience Section --------------------
  // Contact Secton --------------
  contactpara: "If you need to tell me something, contact me.",
  //   End Contact Section ---------------------
};

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com

export default data;
