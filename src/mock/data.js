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
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
   {
    id: nanoid(),
    img: 'dailystockherokuscreenshot1.jpg',
    title: 'Daily Stock Updates',
    info: 'Simple React app with an Express.js server.  Uses third party API Polygon.io for stock information. Deployed to Heroku via GitHub.',
    info2: 'Next features to be added are styling and React Router to get more information on individual stocks.',
    url: 'https://stock-shares-via-polygon.herokuapp.com',
    repo: 'https://github.com/jeremydmarx813/mern-heroku-test', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jammingImg.png',
    title: 'Jammming',
    info: 'Capstone Project for React Unit of Codecademy Web Development Career Path Certificate.  Design boiler plate provided.',
    info2: 'I refactored and set up The Context API for Global State and added the logo at the top, clearing the search bar. Deployed using Surge.sh',
    url: 'http://jamming-codecademy.surge.sh/',
    repo: 'https://github.com/jeremydmarx813/jamming-codecademy-project', 
  }
  // ,
  // {
  //   id: nanoid(),
  //   img: 'triadPair.png',
  //   title: 'Random Triad Pair Generator',
  //   info: 'Small webpage to generate random combinations of a certain scale for musicians to practice.',
  //   info2: 'Made from scratch with HTML, CSS, vanilla JS, and Node. Deployed to Heroku.',
  //   url: 'https://stark-caverns-55248.herokuapp.com/',
  //   repo: 'https://github.com/jeremydmarx813/random-triad-pair-generator',
  // },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },

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
