import nytt from "../Images/nyt.png";
import todoo from "../Images/note.png";
import tictactoe from "../Images/tictactoe.png";
import shiritori from "../Images/shiritori.png";
import crudapi from "../Images/crudapi.png";
import shopping from "../Images/shopping.png";
import flex from "../Images/flex.png";
import { v4 as uuidv4 } from "uuid";
import timer from "../Images/timer.png";
import delay from "../Images/delay.png";
import bubble from "../Images/bubble.png";

const projects = [
  {
    name: "CRUD API",
    img: crudapi,
    id: uuidv4(),
    url: "https://dazzling-wright-f8bd93.netlify.app/",
    description:
      "A CRUD API built with Node.js, Express, MongoDB, and Mongoose for the back end and React for the front end. The CRUD API allows users to create a user profile with 3 attributes, Name, Username, and Age.",
    details: [
      {
        title: "Header",
        content:
          "Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content",
      },
      {
        title: "Header",
        content:
          "Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "React Router", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Fetch API", id: uuidv4() },
      { tag: "Node.js", id: uuidv4() },
      { tag: "Express.js", id: uuidv4() },
      { tag: "MongoDB", id: uuidv4() },
      { tag: "Mongoose", id: uuidv4() },
    ],
  },
  {
    name: "Flex Playground",
    img: flex,
    id: uuidv4(),
    url: "https://csb-3nczf.netlify.app/",
    description:
      "An app that helps users learn about the Flex Layout by playing with a visual tool.",
    details: [
      {
        title: "Header",
        content:
          "Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content",
      },
      {
        title: "Header",
        content:
          "Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
    ],
  },
  {
    name: "Shopping App",
    img: shopping,
    id: uuidv4(),
    url: "https://quizzical-lovelace-17ea0b.netlify.app/",
    description:
      "An app designed to help users to help their shopping experience by allowing them to list what they need to buy.",
    details: [
      {
        title: "Header",
        content:
          "Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content",
      },
      {
        title: "Header",
        content:
          "Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content Fillter content",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Localforage", id: uuidv4() },
      { tag: "Fetch API", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
    ],
  },
  {
    name: "NYT API",
    img: nytt,
    id: uuidv4(),
    url: "https://xenodochial-mcclintock-d84f7d.netlify.app/",
    description:
      "A project utilizing the NYT API to read condensed articles. The user can either type in a keyword or simply click on the suggested tag like 'news' and make a request that way.",
    details: [{ title: "Header", content: "Content" }],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "React Router", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Fetch API", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
    ],
  },
  {
    name: "Bubble Sort Algorithm Visualized",
    img: bubble,
    id: uuidv4(),
    url: "https://modest-ptolemy-30f1ac.netlify.app/",
    description:
      "An App that visualizes how the bubble sort algorithm sorts the displayed array.",
    details: [{ title: "Header", content: "Content" }],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "JsonPlaceHolder", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
    ],
  },
  {
    name: "<Delay/>",
    img: delay,
    id: uuidv4(),
    url: "https://amazing-hoover-fd23f2.netlify.app/",
    description:
      "A React <Delay/> component that allows users to delay the data from rendering.",
    details: [{ title: "Header", content: "Content" }],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "JsonPlaceHolder", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
    ],
  },
  {
    name: "TODO APP",
    img: todoo,
    id: uuidv4(),
    url: "https://wonderful-euclid-5863c6.netlify.app/",
    description:
      "A todo app that allows users to create a todo list and either mark the post as completed or remove it. The app allows for setting changes like note background and sort order.",
    details: [{ title: "Header", content: "Content" }],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
    ],
  },
  {
    name: "Shiritori Game",
    img: shiritori,
    id: uuidv4(),
    url: "https://goofy-lamport-69eea7.netlify.app/",
    description:
      "Shiritori is a Japanese word game in which the starting player picks a word of their choosing and the competing player must pick a word that begins with the ending character from the preceding player. A Player loses when a word that ends with 'N' is chosen or 30 seconds have passed.",
    details: [{ title: "Header", content: "Content" }],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "owlbot-js", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
    ],
  },
  {
    name: "Tic-Tac-Toe Game",
    img: tictactoe,
    id: uuidv4(),
    url: "https://unruffled-wright-087758.netlify.app/",
    description:
      "A simple Tic Tac Toe game. 2 players can play the game where one player is represented with 'X' and the other is represented with 'O'. There are a possible 8 winning combination and once that winning combination is met by player O or X, the game is finished.",
    details: [{ title: "Header", content: "Content" }],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "React Confetti", id: uuidv4() },
    ],
  },
  {
    name: "Timer App",
    img: timer,
    id: uuidv4(),
    url: "https://keen-northcutt-0a7688.netlify.app/",
    description: "A Timer App built with React.",
    details: [{ title: "Header", content: "Content" }],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "setInterval", id: uuidv4() },
    ],
  },
];

export default projects;
