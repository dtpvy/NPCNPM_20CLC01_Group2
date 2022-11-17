import React from "react";
import Header from "./components/Header.jsx";
import Catagory from "./components/Catagory.jsx";
import "./style.css";
import Suggestion from "./components/Suggestion.jsx";
const App = () => {
  return (
    <div>
      <Header />
      <Catagory />
      <Suggestion />
    </div>
  );
};

export default App;
