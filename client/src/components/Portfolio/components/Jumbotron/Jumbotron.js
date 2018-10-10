import React from "react";
import './jumbotron.css';


const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, clear: "both", paddingTop: 50, textAlign: "center", border: "10px", borderColor: "#fff" }} className="jumbotron jumbotron-fluid bg-transparent text-white border rounded-corner text-center" >
    {/* style={{ height: 100, clear: "both", paddingTop: 50, textAlign: "center", border: "5px", borderColor: "#fff" }} className="jumbotron jumbotron-fluid bg-transparent text-white border rounded-corners" > */}
    {children}
  </div>
);

export default Jumbotron;

// text-center mdb-color darken-2 white-text z-depth-2