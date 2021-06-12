import React from "react";
import Container from "@material-ui/core/Container";
import Helmet from "react-helmet"; 
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
//    skills: {containerBg:'#f8f9fa', itemBG: "#212529" }

const Lists = styled.article`
  border-radius: 5px;
  background: ${props => props.theme.skills.itemBG};
   padding: 10px;
  text-align: left;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  span {
    font-weight: 900;
  }
  p {
    padding: 4px;
    margin: 0;
    color: ${props => props.theme.skills.itemColor};
}
  p:first-child {
    font-weight: 900;
    color: ${props => props.theme.link.color};
  }
  p:nth-child(2) {
    padding-left: 35px;
  }
  p:nth-child(3) {
    font-weight: 600;    
    color: ${props => props.theme.link.color};
  }
  p:nth-child(4) {
    padding-left: 35px;
  }
  margin: 0 10px;
`;

const tools = [
  {
    header: "VS Code",
    language: "I use VS Code for almost all my projects, with helpful extensions aiding my developer process.",
    experience: "4 years",
    id: uuidv4()
  },
  {
    header: "Git",
    language: "I fully embrace version control with Git.",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "GitHub",
    language: "I store most of my projects on Github, and deploy my projects to Netlify by pushing commits to GitHub.",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "Parcel",
    language: "Before Create-React-App, I used Parcel to build my React apps, and still occasionally use for projects like `CSS Grid Blog Layout`.",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "Prettier",
    language: "Mostly used as a VS Code Extension, but occasionally use it as a npm package.",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "ESLint",
    language: "Mostly use React ESLint plugins, but also other plugins if the need arises.",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "Terminal",
    language: "Comfortable with basic commands, and I have some understanding of bash scripts.",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "Netlify",
    language: "All of my projects are deployed to Netlify with GitHub.",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "CodePen",
    language: "Not using it much anymore, but it was a great tool when I was learning and testing HTML and CSS.",
    experience: "4 years",
    id: uuidv4()
  },
  {
    header: "CodeSandbox",
    language: "Completely switched over to CodeSandbox from CodePen, and used it for some of my projects. I also write a lot of my Re-Usable components in CodeSandbox.",
    experience: "1 year",
    id: uuidv4()
  },
  {
    header: "Create React App",
    language: "All of my React projects use Create React App, like my portfolio.",
    experience: "2 years",
    id: uuidv4()
  }, 
  {
    header: "Weebly",
    language: "My interest in websites in general started with Weebly, and that's what I used when I started with my website business.",
    experience: "7 years",
    id: uuidv4()
  },
  {
    header: "WordPress",
    language: "Switched to Wordpress as Weebly was too limited. Also used WordPress in my job as a performance marketer.",
    experience: "3 years",
    id: uuidv4()
  }, 
  {
    header: "Figma",
    language: "Most of my wireframing work is done on Figma.",
    experience: "1 year",
    id: uuidv4()
  },
  {
    header: "Preview",
    language: "Comfortable in using Mac OS's Preview application. Started using it when I ran my website business.",
    experience: "5 years",
    id: uuidv4()
  }
];

const languages = [
  {
    header: "HTML5",
    language: "HTML5: semantic HTML, Accessibility, etc.",
    experience: "4 years",
    id: uuidv4()
  },
  {
    header: "CSS3",
    language:
      "Box Model, Responsive design, Media Queries, Grid Layout, Flexbox, Position etc.",
    experience: "4 years",
    id: uuidv4()
  },
  {
    header: "JavaScript (ES6)",
    language:
      "Template Literals, Shorthand Property Names, Arrow Functions, Destructuring. Parameter Defaults, Rest/Spread, ESModules, Ternaries, Array Methods, Object Methods, IIFE, RegEx, Nullish Coalescing Operator, Optional Chaining, Promises, async/await etc.",
    experience: "3 years",
    id: uuidv4()
  },
  {
    header: "UI Library",
    language: " React JS - Class Components & Function Components",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "Testing",
    language: "Jest and React Testing Library",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "UI Framework",
    language: " Material UI and React Bootstrap",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "CSS in JS",
    language: "styled-components and emotion",
    experience: "2 years",
    id: uuidv4()
  },
  {
    header: "Routing",
    language: "React Router",
    experience: "1 year",
    id: uuidv4()
  },
  {
    header: "Static Site Generator",
    language: "Gatsby",
    experience: "6 months",
    id: uuidv4()
  },
  {
    header: "Currently Learning",
    language:
      "Typescipt, Node.js, and Next.js. Planned things to learn Vue.js and Electron.",
    id: uuidv4()
  }
];

const Language = ({ header, language, experience }) => {
  return (
    <Lists>
      {header && <p>{header}:</p>}
      {language && <p>{language}</p>}
      {experience && (
        <>
          <p>Experience:</p>
          <p>{experience}</p>
        </>
      )}
    </Lists>
  );
};
 //    skills: {containerBg:'#f8f9fa', itemBG: "#212529", titleColor: "white", itemColor: "black" }

const SkillsContainer = styled.article`
  h1 {
    color: ${props => props.theme.skills.titleColor};
  }
  margin-top:20px;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
  background: ${props => props.theme.skills.containerBg};
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
`;

const Skill = ({ datas, children }) => {
  return (
    <SkillsContainer>
      <h1>{children}</h1>
      {datas.map((data) => (
        <Language key={data.id} {...data} />
      ))}
    </SkillsContainer>
  );
};

const Canvas = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  > * {
    flex: 0 1 350px;
  }
`;
 


const Skills = () => {
    return <><Helmet><title>Skills Page</title></Helmet>
    <Container maxWidth="md">  
    <Canvas>
    <Skill datas={languages}>Languages and Libraries:</Skill>
    <Skill datas={tools}>Dev Tools and Toolchains:</Skill>
  </Canvas>
  </Container></>
}

export default Skills;