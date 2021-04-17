import nytt from "../Images/nyt.png";
import todoo from "../Images/note.png";
import tictactoe from "../Images/tictactoe.png";
import shiritori from "../Images/shiritori.png";
import crudapi from "../Images/crudapi.png";

import { v4 as uuidv4 } from "uuid";

const projects = [
  {
    name: "NYT API",
    img: crudapi,
    id: uuidv4(),
    url: "https://dazzling-wright-f8bd93.netlify.app/",
    description:
      "A CRUD API built with Node.js, Express, MongoDB, and Mongoose for the back end and React for the front end. The back end is deployed to Heroku and Frontend is deployed to Netlify. The CRUD API allows users to create a user profile with 3 attributes, Name, Username, and Age. The Database stores a maximum of 3 users, so the oldest user profile will be deleted when a POST request is sent to create a new user.",
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
    name: "NYT API",
    img: nytt,
    id: uuidv4(),
    url: "https://xenodochial-mcclintock-d84f7d.netlify.app/",
    description:
      "A project utilizing the NYT API to read condensed articles. The user can either type in a keyword or simply click on the suggested tag like 'news' and make a request that way. If no matching article is found, a message notifying the user is rendered instead.",
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
    name: "TODO APP",
    img: todoo,
    id: uuidv4(),
    url: "https://wonderful-euclid-5863c6.netlify.app/",
    description:
      "A todo app that allows users to create a todo list and either mark the post as completed or remove it. Users also have the option to change the background color of the post as well as sort their posts where the new posts appear at the top or bottom.",
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
    name: "Tic-Tac-Toe Game",
    img: tictactoe,
    id: uuidv4(),
    url: "https://unruffled-wright-087758.netlify.app/",
    description:
      "A simple Tic Tac Toe game. 2 players can play the game where one player is represented with 'X' and the other is represented with 'O'. There are a possible 8 winning combination and once that winning combination is met by player O or X, the game is finished.",
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
    name: "Shiritori Game",
    img: shiritori,
    id: uuidv4(),
    url: "https://goofy-lamport-69eea7.netlify.app/",
    description:
      "Shiritori is a Japanese word game in which the starting player picks a word of their choosing and the competing player must pick a word that begins with the ending character from the preceding player. The rule implementation for this app is a player loses when they choose a word that ends with the character 'N' or runs out of time (30 seconds).",
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
];

export default projects;
