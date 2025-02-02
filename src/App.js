import './App.css';
import { useState, useEffect, useCallback, useRef } from 'react';
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
          <p>Front-end Developer</p>
          <p>Portfolio</p>
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

    const [isIntroVisible, setIsIntroVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);

    const introRef = useRef(null); // DOM요소 참조할 수 있는 ref 생성(상태변경 없이 참조후, 값만 업데이트)
    const textRef = useRef(null);

    useEffect(() => {
      // IntersectionObserver을 사용하여 스크롤로 애니메이션 트리거
      const observer = new IntersectionObserver(
        ([entry]) => { // divRef요소의 정보를 담고있는 객체
          if (entry.isIntersecting) { // 요소가 뷰포트에 얼마나 보이는지에 대한 정보가 담겨있음.
            setIsIntroVisible(true); //화면에 보이게함
          }
        },
        { threshold: 0.5 } // 요소가 50%이상 보일때 애니메이션 시작
      );

      if (introRef.current) { // 화면에 보이거나, 보이지 않을때마다 실행
        observer.observe(introRef.current); // divRef.current 요소 관찰 시작
      }

      return () => {
        if (introRef.current) {
          observer.unobserve(introRef.current); // divRef.current 요소 관찰 중단
        }
      };
    }, []);

    useEffect(() => {
      if (isIntroVisible) { // 첫번째 intro요소 등장후, 두번째 text 등장시키기
        setTimeout(() => {
          setIsTextVisible(true);
        }, 1000);
      }
    }, [isIntroVisible]);

    return (
      <div className="about-container">
        <p>ABOUT ME</p>
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isIntroVisible ? 1 : 0, y: isIntroVisible ? 0 : 100 }}
          transition={{ duration: 1 }}
          className="about-intro"
        >
          {/* 사진, 소개텍스트( 자기소개 )*/}
          <div className="about-intro-img"></div>
          <div className="about-intro-text">
            <div className="about-intro-name">
              <p>최지영</p>
              <p>Choi ji young</p>
            </div>
            <p>🎉1999.01.06</p>
            <p>🏫전주대학교 경영학과&스마트미디어학과</p>
            <p>📧wlduddl4101@gmail.com</p>
            <p>📝https://blog.naver.com/jibbbang2</p>
            <p>💡https://github.com/jizero1</p>
          </div>
        </motion.div>
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isTextVisible ? 1 : 0, y: isTextVisible ? 0 : 100 }}
          transition={{ duration: 1 }}
          className="about-text"
        >
          {/* 기술스택 */}
          <div>ddd</div>
        </motion.div>
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
