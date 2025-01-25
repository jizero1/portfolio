import './App.css';
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {

  const MainContainer = () => {
    return (
      <div>
        <p>Front-end Developer</p>
        <p>CHOI JIYOUNG</p>
        <p>PortFolio</p>
      </div>
    )
  }

  const AboutContainer = () => {
    return (
      <div>

      </div>
    )
  }

  const ProjectContainer = () => {
    return (
      <div>

      </div>
    )
  }
  return (
    <div className="container">
      <MainContainer></MainContainer>
      <AboutContainer></AboutContainer>
      <ProjectContainer></ProjectContainer>
    </div>
  );
}

export default App;
