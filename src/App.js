import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WelcomeCard from "./WelcomeCard";

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <WelcomeCard
                course="Welcome to Fullstack Development - I"
                lab="React JS Programming Week09 Lab Exercise"
                studentId="100516804"
                studentName="Minilik Meja"
                college="George Brown College, Toronto"
            />
        </div>
    );
}

export default App;
