import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeremy Marx | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Developer Portfolio for Jeremy Marx', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  name: 'Jeremy Marx',
  subtitle: 'Junior JavaScript Developer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'After several years of freelance music performance and instruction in the New Orleans area, I have begun my journey as a JavaScript Web Developer.',
  paragraphTwo: 'I have completed the curriculum of Web Development on Codecademy, gone through the bootcamp phase of the program at Operation Spark, and recently completed the JavaScript App Development course at Tech Talent South.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jammingImg.png',
    title: 'Jamming',
    info: 'Capstone Project for React Unit of Codecademy Web Development Career Path Certificate.  Design boiler plate provided.',
    info2: 'I refactored and set up The Context API for Global State and added the logo at the top, clearing the search bar. Deployed using Surge.sh',
    url: 'http://jamming-codecademy.surge.sh/',
    repo: 'https://github.com/jeremydmarx813/jamming-codecademy-project', 
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jeremydmarx'
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/jeremydmarx813'
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeremydmarx/'
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jeremydmarx813'
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
