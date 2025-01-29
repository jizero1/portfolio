import './App.css';
import { useState, useEffect, useCallback } from 'react';
import React from 'react';
// import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
function App() {

  const MainContainer = () => {
    return (
      <div className="main-container">
        <div className="main-text">
          <p>CHOI JIYOUNG</p>
          <p>front-end developer</p>
          <p>portfolio</p>
        </div>
        <div className="main-circle">
          <div className="circle">
            <div className="circle-box"></div>
          </div>
        </div>
        
      </div>
    )
  }

  const AboutContainer = () => {
    return (
      <div className="about-container">
        <motion.div
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        trasition={{duration: 1}}
        style= {{
          background: "white",
          color: "black",
          padding: "20px",
          width: "80%",
          textAlign: "center",
        }}
        >ㅇㅇㅇㅇ</motion.div>
        {/* <motion.div
        initial={{ opacity: 0, y: 50 }} // 초기 상태
        animate={{ opacity: 1, y: 0 }} // 애니메이션 완료 상태
        transition={{ duration: 1 }}   // 애니메이션 지속 시간
        style={{
          background: "blue",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "200px",
          textAlign: "center",
        }}
      >
        Framer Motion
      </motion.div> */}
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
