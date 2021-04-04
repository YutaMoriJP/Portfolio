import nytt from "../Images/nyt.png";
import todoo from "../Images/note.png";
import tictactoe from "../Images/tictactoe.png";
import { v4 as uuidv4 } from "uuid";

const projects = [
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
];

export default projects;
