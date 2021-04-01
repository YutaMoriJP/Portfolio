import nytt from "../Images/nyt.png";
import todoo from "../Images/note.png";

import { v4 as uuidv4 } from "uuid";

const projects = [
  {
    name: "NYT API",
    img: nytt,
    id: uuidv4(),
    url: "https://xenodochial-mcclintock-d84f7d.netlify.app/",
    description: "A project utilizing the NYT API to read condensed articles.",
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "React Router", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Fetch API", id: uuidv4() },
    ],
  },
  {
    name: "TODO APP",
    img: todoo,
    id: uuidv4(),
    url: "https://wonderful-euclid-5863c6.netlify.app/",
    description: "A todo app that allows users to create a todo list.",
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
    ],
  },
];

export default projects;
