import { v4 as uuidv4 } from "uuid";

const projectOptions = [
  { id: uuidv4(), value: "all", text: "Show All" },
  { id: uuidv4(), value: "Node.js", text: "Node.js" },
];

export default projectOptions;
