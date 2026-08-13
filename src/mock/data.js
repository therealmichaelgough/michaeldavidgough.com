import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael Gough | Data Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description:
    'Michael Gough — data engineer in Fort Collins, Colorado. I design warehouse schemas, build the syncs that keep them current, and serve the data through fast APIs.',
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Michael Gough',
  subtitle: 'I build data systems from schema to interface.',
  cta: 'Tell Me More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a software developer from Fort Collins, Colorado. In my free time, I enjoy trail running, crossfit, and playing guitar.",
  paragraphTwo:
    'Data engineer with twelve years owning warehouses end to end — schema, sync, transformation, and the services on top. Most recently at NextEra Energy, where I designed the analytics warehouse and served it through a real-time GraphQL platform on AWS Redshift.',
  paragraphThree: '',
  resume: 'http://resume.michaeldavidgough.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.png',
    title: 'Tradar',
    info: 'A web app for financial index graphs and analysis.',
    info2:
      'Plot candlestick data for thousands of publicly-traded stocks, ETFs, and cryptocurrencies. Coming soon!',
    url: 'http://tradar.michaeldavidgough.com',
    repo: 'https://github.com/therealmichaelgough/tradar', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Need a data engineer?',
  btn: '',
  email: 'mdgough12@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michaeldavidgough/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/therealmichaelgough',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
