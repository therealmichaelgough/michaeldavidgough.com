import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael Gough | Data Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Greetings, fellow traveler :)', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Michael Gough',
  subtitle: 'I build quality software',
  cta: 'Tell Me More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a software developer from Seattle. In my free time, I enjoy trail running, crossfit, and playing guitar.",
  paragraphTwo: "I love my craft, and I obsess over my customers. I combine my limitless imagination with a relentless insistence on the highest standards. I work with scientists, startup owners, and dreamers to build scalable data processing and analytics solutions.",
  paragraphThree: "I’m a stickler for documentation and clean, modular designs which ensure that my code can be maintained by others well after my last commit. I’m an expert with Python, and have 7 years of experience designing, deploying, and monitoring full production ecosystems on AWS - including containerized micro-services, SQL+No-SQL databases, web applications and serverless endpoints.",
  resume: 'http://resume.michaeldavidgough.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
