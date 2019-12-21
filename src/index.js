import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import "./stylesheets/footer.css";

import "./stylesheets/header.css"
import Main from "./components/Main";
import "./stylesheets/main.css";
import Down from "./components/Down";
import "./stylesheets/down.css";


function App(){
  return(
    <div>
    
    <div className="head">
  <Header/>

    </div>
      
      <div className="down">
      <Main/>
      <Down/>
      
      <Footer/>
      </div>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
