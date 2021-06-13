import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//global context
import ContextProvider from "./ContextProvider/ContextProvider";

const MainApp = () => {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
