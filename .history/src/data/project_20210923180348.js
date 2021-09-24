import nytt from "../Images/nyt.png";
import todoo from "../Images/note.png";
import tictactoe from "../Images/tictactoe.png";
import shiritori from "../Images/shiritori.png";
import crudapi from "../Images/crudapi.png";
import shopping from "../Images/shopping.png";
import flex from "../Images/flex.png";
import timer from "../Images/timer.png";
import delay from "../Images/delay.png";
import bubble from "../Images/bubble.png";
import blogGrid from "../Images/blogGrid.png";
import usefulCSS from "../Images/css.png";
import clipboard from "../Images/clipboard.png";
import hooks from "../Images/hooks.png";
import components from "../Images/components.png";
import downloadfile from "../Images/downloadfile.png";
import canvas from "../Images/canvas.png";
import forum from "../Images/forum-min.png";
import { v4 as uuidv4 } from "uuid";

const projects = [
  {
    name: "Forum Website",
    img: forum,
    id: uuidv4(),
    url: "https://next-forum.netlify.app/",
    description:
      "A forum website built with NextJS, ExpressJS, MongoDB, and Serverless Functions. Users can create posts and comment on them.",
    details: [
      {
        title: "Forum Website",
        content:
          "This forum website is a fullstack appliaction built with the MERN Stack, and uses a serverless architecture with Netlify. Users can create an account with Netlify Identity, create posts and comment on them.",
      },
    ],
    extra: {
      url: "https://github.com/YutaMoriJP/next-forum",
      text: "Work In Progress",
    },
    tags: [
      { tag: "Next JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Fetch API", id: uuidv4() },
      { tag: "Node.js", id: uuidv4() },
      { tag: "Express.js", id: uuidv4() },
      { tag: "MongoDB", id: uuidv4() },
      { tag: "Mongoose", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "CRUD API",
    img: crudapi,
    id: uuidv4(),
    url: "https://user-profile-crud-api.netlify.app/",
    description:
      "A CRUD API built with Node.js, Express.js, MongoDB, and Mongoose for the back-end and React for the front-end. The CRUD API allows users to create a user profile with 3 attributes, Name, Username, and Age.",
    details: [
      {
        title: "CRUD API Description:",
        content:
          "I used Express.js for the server side to handle incoming requests from the front-end of my app, and I used MongoDB for the database to store the API data. This is a simple CRUD API that allows users to build a “User Profile” with data like `Name`, `Username`, and `Age`. They can send a POST request to create a new user profile, send a PUT request to update the user profile they created, send a DELETE request to delete the user profile they have created, as well as send a GET request to retrieve all the user profiles that are stored in the database (maximum 3), or fetch specific users by ID. The created user profile is deleted from the database after 10 minutes. For the frontend, I used React JS, and used the built in fetch API to send a request to the server. The front end is deployed to Netlify, while the back end is deployed to Heroku.",
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
      { tag: "Heroku", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "React Components",
    img: components,
    id: uuidv4(),
    url: "https://react-components-reusable.netlify.app/",
    description:
      "This project contains a collection of re-usable React Components.",
    details: [
      {
        title: "React Components",
        content:
          "This project is a collection of re-usable React components that I have developed to achieve common needs like notifying the user with a message when something went wrong or notify them about a successful action, simple Modal component, and more!",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
    ],
  },
  {
    name: "Custom React Hooks",
    img: hooks,
    id: uuidv4(),
    url: "https://custom-react-hooks.netlify.app/",
    description: "This project contains a collection of custom React Hooks.",
    details: [
      {
        title: "Custom React Hooks",
        content:
          "This project is a collection of useful custom React hooks that I have developed to either reduce boilerplate code or simplifies Web API usage, like window.localstorage by simply passing the key and value as arguments to the useLocalStorage hook. It includes a demo as well as a the CodeSandbox link.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
    ],
  },
  {
    name: "Flex Playground",
    img: flex,
    id: uuidv4(),
    url: "https://flexbox-playground-react.netlify.app/",
    description:
      "An app that helps users learn about the Flex Layout by playing with a visual tool.",
    details: [
      {
        title: "Flex Playground App:",
        content:
          "This app is designed for users wanting to learn the CSS layout model flexbox. The playground tries to incorporate almost all of the features of flexbox. Users can choose how many flex items they want to play around with, and apply the alignment on the flex container. Also, test the flex-grow, flex-shrink, and flex-basis properties on the flex item. To choose the flex item that needs to apply the flex property, they can pick from the “Select Flex item” selector.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "localStorage", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "Download Generated File",
    img: downloadfile,
    id: uuidv4(),
    url: "https://download-file-react.netlify.app/",
    description:
      "This React app allows users to fill in the input fields like first name, last name, and file name. Clicking the button will generate a download link to the created text file.",
    details: [
      {
        title: "Download Generated/Served File:",
        content:
          "This React app allows users to fill in the input fields like first name, last name, and file name. Clicking the button will generate a download link to the created text file. The content is in JSON format. The important component accepts a URL prop that can either be a blob object or the location of the resource. If it's a resource URL, it will fetch the resource and call Response.blob() and allow the user to download the requested resource. The Fetch button below the form sends an HTTP GET request to the jsonplaceholder API and generates a download link to the fetched content. ",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Blob API", id: uuidv4() },
      { tag: "URL API", id: uuidv4() },
      { tag: "JsonPlaceHolder API", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
    ],
  },
  {
    name: "NYT API",
    img: nytt,
    id: uuidv4(),
    url: "https://xenodochial-mcclintock-d84f7d.netlify.app/",
    description:
      "A project utilizing the NYT API to read condensed articles. The user can either type in a keyword or simply click on the suggested tag like 'news' and make a HTTP request that way.",
    details: [
      {
        title: "NYT API Description:",
        content:
          "This project is a news fetching website that communicates with the NYT API. When I was still learning how to use XHR and the browser built in window.fetch API, I built a similar website with vanilla JavaScript. But for this project, I used React JS to build the full UI. All styling for the components were done with the Material UI library, as well as the styled-components library for making minor tweaks.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "React Router", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Fetch API", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "Useful CSS Layouts",
    img: usefulCSS,
    id: uuidv4(),
    url: "https://csb-7slsg.netlify.app/",
    description:
      "A website that provides useful CSS layouts, like cernting the content or a card layout, using CSS Flexbox and CSS Grid.",
    details: [
      {
        title: "Useful CSS Layouts",
        content:
          "This project provides useful content placement method, like centering the content, using CSS layouts like CSS flexbox and CSS grid. When clicking on the top right “CSS” text, a modal pops up that shows the CSS code. I used a custom hook called useOpen to handle the “open” state of the modal. When the modal component renders, it subscribes a “click” event to the document.body element, and the event handler that gets executed is the onClose function that updates the “open” state to false, which closes the modal. This allows users to click anywhere on the screen to close the modal, but this also means clicking on the modal itself will close it, preventing users from copying the CSS. So, the modal’s parent element listens to a “click” event that calls event.stopPropagation, which prevents the click event from bubbling to the document.body.  So, clicking anywhere inside the modal will not close the modal.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "CSS Grid", id: uuidv4() },
      { tag: "CSS Flexbox", id: uuidv4() },
      { tag: "Styled-Components", id: uuidv4() },
    ],
  },
  {
    name: "Drawing App",
    img: canvas,
    id: uuidv4(),
    url: "https://drawing-app-react.netlify.app/",
    description: "A drawing app built with React and the Canvas API.",
    details: [
      {
        title: "Drawing Ap",
        content:
          "The drawing app allows users to draw freely on the dark background and download the content as an image. The 'CLEAR' button clears the canvas and allows users to re-start from a blank state.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Canvas API", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "Styled-Components", id: uuidv4() },
    ],
  },
  {
    name: "Shopping Helper App",
    img: shopping,
    id: uuidv4(),
    url: "https://quizzical-lovelace-17ea0b.netlify.app/",
    description:
      "An app designed to help users to help with their shopping experience by allowing them to list what they need to buy.",
    details: [
      {
        title: "Shopping Helper App:",
        content:
          "This app is designed for users to help with their shopping experience. To start, users type in the store name or any title of their choosing, and a box with options gets rendered to the screen. Inside the box, they can type in the shopping item they wish to buy as well as the needed count of the item. So that the data they have submitted does not get lost after the user leaves or refreshes the page, I use LocalForage, which is a storing library for JavaScript.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Localforage", id: uuidv4() },
      { tag: "Fetch API", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "TODO APP",
    img: todoo,
    id: uuidv4(),
    url: "https://wonderful-euclid-5863c6.netlify.app/",
    description:
      "A todo app that allows users to create a todo list and either mark the post as completed or remove it. The app allows for setting changes like note background and sort order.",
    details: [
      {
        title: "Todo App:",
        content:
          "This Note-Taking-App is not connected to a back-end, nor does it use browser storage options like window.localStorage, so once the user leaves the page, the submitted notes will be lost. As far as features are concerned, users must fill the “Title” and “Description” part, and then they can submit the note. Once the note is rendered to the screen, users can either “Remove” or “Check it” to show the completion of the task. There are also a couple configuration options like changing the background color of the submitted note as well as a sorting option, where the new submissions either appear at the top or at the bottom of the page.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "Shiritori Game",
    img: shiritori,
    id: uuidv4(),
    url: "https://goofy-lamport-69eea7.netlify.app/",
    description:
      "Shiritori is a Japanese word game in which the starting player picks a word of their choosing, and the competing player must pick a word that begins with the ending character from the preceding player. A Player loses when a word that ends with 'N' is chosen or 30 seconds have passed.",
    details: [
      {
        title: "Shiritori Game:",
        content:
          "Shiritori is a traditional Japanese word game that I often used to play with my family, as most kids in Japan do. As it’s strictly a word playing game, the exact rules cannot be replicated with the English language. This means that the rules are my interpretation, so that it makes sense in English. To put it simply, a user can lose the game if they choose a word that ends with the letter “n” or if they run out of time (30 seconds). The hard part in this project was to find a free way to verify that the chosen word is actually a valid word and not some gibberish. To solve this problem, I found an API called “owlbot-js” that does a good enough job to make the game functional.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "owlbot-js", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "useClipboard.js",
    img: clipboard,
    id: uuidv4(),
    url: "https://csb-r4x89.netlify.app/",
    description:
      "A custom React hook that copies the value passed to the hook to the clipboard.",
    details: [
      {
        title: "useClipboard.js",
        content:
          "A custom React hook that allows users to pass an object with the property toBeCopied that should point at a string value that should be copied to the clipboard. This hook will access the built in Clipboard API (window.navigator.clipboard), and copy the string value to the user’s clipboard. The hook returns an object with 4 properties – idle, resolved, rejected, and error. Idle, resolved, and rejected are status variables. If idle is truthy, then no action is taken, if resolved is truthy then the string was copied to the clipboard successfully, and if rejected is truthy then the copying action has failed. The error object contains a message property that explains what exactly went wrong, like permission issues. The user also has an option to pass a onOpen prop, that will be invoked regardless of the result of the asynchronous operation (copying to the clipboard). This can be used to open up a message with information like “copied” or “not copied",
      },
    ],
    extra: {
      url: "https://codesandbox.io/s/useclipboardjs-r4x89?file=/src/App.js",
      text: "Codesandbox",
    },
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled-Components", id: uuidv4() },
      { tag: "Clipboard API", id: uuidv4() },
    ],
  },

  {
    name: "Bubble Sort Algorithm Visualized",
    img: bubble,
    id: uuidv4(),
    url: "https://modest-ptolemy-30f1ac.netlify.app/",
    description:
      "An App that visualizes how the bubble sort algorithm sorts the displayed array.",
    details: [
      {
        title: "Bubble Sort Algorithm Visualized:",
        content:
          "This site visualizes how the bubble sort algorithm sorts a given unordered array. Users have the option to choose the length of the array by using the selection option located at the top right side of the page.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "JsonPlaceHolder", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "Grid Layout - Blog",
    img: blogGrid,
    id: uuidv4(),
    url: "https://optimistic-yalow-468b7e.netlify.app/",
    description:
      "A website that that uses CSS Grid to achieve a responsive blog like layout.",
    details: [
      {
        title: "Grid Layout - Blog",
        content:
          "This project tries to simulate a simple blog like layout with CSS Grid. The header's grid area covers the full 10 column grid cells. The sidebar only spans couple cells while the main section's grid area covers the remaining grid cells. The footer has the same treatment as the header. To make the layout responsive, I used media queries that makes changes to the grid-row property, which pushes the sidebar below the main section. This places the sidebar right below the main section of the blog layout. The other change in the mobile viewport is that the sidebar and main section's grid area now covers the entire column, like the header and footer area do. So, all sections become block level elements. The reasoning for that change is the limited view port of mobile devices.",
      },
    ],
    tags: [
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "CSS Grid", id: uuidv4() },
      { tag: "Parcel", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },

  {
    name: "<Delay/>",
    img: delay,
    id: uuidv4(),
    url: "https://csb-1do8l.netlify.app/",
    description:
      "A React <Delay/> component that allows users to delay the state from updating",
    details: [
      {
        title: "<Delay/> Component:",
        content:
          "This is a reusable component project that I built for fun. Users can wrap their components with the <Delay /> component that asynchronously delays the invocation of the state setter function with the use of the Promise constructor as well as the built in window.setTimeout API. In the demo, users can see how the state update is delayed with a <Counter/> component and a <Fetch/> component. As the name describes, <Counter /> simply allows users to asynchronously increment the count. When the user selects to play with the <Fetch/> component, then <Counter/> unmounts, which would lose the count state. In order to avoid that, I use window.localStorage to store the count state value in localStorage.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "JsonPlaceHolder", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "Material UI", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },

      { tag: "localStorage", id: uuidv4() },
    ],
  },
  {
    name: "Tic-Tac-Toe Game",
    img: tictactoe,
    id: uuidv4(),
    url: "https://unruffled-wright-087758.netlify.app/",
    description:
      "A simple Tic Tac Toe game. 2 players can play the game where one player is represented with 'X' and the other is represented with 'O'.",
    details: [
      {
        title: "Tic-Tac-Toe Game:",
        content:
          "For this project, I re-implemented the tic-tac-toe game from the React documentation with React hooks. I did all the styling with styled-components, and used a library called “React Confetti” to get a confetti animation after a player wins the game.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "React Confetti", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
  {
    name: "Timer App",
    img: timer,
    id: uuidv4(),
    url: "https://keen-northcutt-0a7688.netlify.app/",
    description:
      "A Timer App built with React. It uses the build in setInterval API, so the time can be slightly off.",
    details: [
      {
        title: "Timer App:",
        content:
          "A basic timer app built with React JS. For the implementation, I use the built in window.setInterval API inside the React.useEffect hook to run that effect and decrement the time every one second. Due to the implementation of the native setInterval API, the seconds are not 100% accurate, but they do a good enough job. As seconds, minutes, or hours cannot be less than 0, I defined an Error component that alerts the user when such violation occurs.",
      },
    ],
    tags: [
      { tag: "JavaScript", id: uuidv4() },
      { tag: "HTML5", id: uuidv4() },
      { tag: "CSS3", id: uuidv4() },
      { tag: "React JS", id: uuidv4() },
      { tag: "Styled Component", id: uuidv4() },
      { tag: "setInterval", id: uuidv4() },
      { tag: "Netlify", id: uuidv4() },
    ],
  },
];

export default projects;
