import './App.css';
import { useState, useEffect, useCallback, useRef } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineMail, MdComputer, MdModeNight, MdWbSunny } from "react-icons/md";

import { FaGithub, FaSchool, FaPencilAlt, FaMousePointer, FaCertificate } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { TbBrandReactNative } from "react-icons/tb";

function App() {



  // ------------------ 메인 화면 ----------------
  const MainContainer = ({ darkLightClick }) => {
    return (
      <div className="main-container" style={darkLightClick ? { backgroundColor: "rgb(26, 28, 48)" } : { backgroundColor: "white" }}>
        <div className="main-circle" style={darkLightClick ? { background: "linear-gradient(to left,rgb(38, 46, 87),rgb(239, 248, 255))" } : { background: "linear-gradient(to top, #a0a7ca, #fcfafe)" }}></div>
        <div className="main-text">
          <p className="main-name" style={darkLightClick ? { color: "rgb(229, 232, 253)" } : { color: "rgb(127, 142, 240)" }}><span>C</span>HOI <span>J</span>IYOUNG</p>
          <p className="main-front" style={darkLightClick ? { color: "rgb(229, 232, 253)" } : { color: "rgb(127, 142, 240)" }}>Front-end Developer</p>
          <p className="main-portfolio" style={darkLightClick ? { color: "rgb(229, 232, 253)" } : { color: "rgb(127, 142, 240)" }}>Portfolio</p>
        </div>
      </div>
    )
  }


  // ------------------ 자기소개 화면 ----------------
  const AboutContainer = ({ darkLightClick }) => {

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
        }, 700);
      }
    }, [isIntroVisible]);


    const [img, setImg] = useState(null);
    const ImgEnter = (id) => {
      setImg(id);
    }
    const ImgLeave = () => {
      setImg(null);
    }
    return (
      <div className="about-container" style={darkLightClick ? { backgroundColor: "rgb(26, 28, 48)", color: "white" } : { backgroundColor: "white" }}>
        <p className="about-me" style={darkLightClick ? { color: "rgb(226, 240, 253)" } : {}}>ABOUT ME</p>
        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isIntroVisible ? 1 : 0, y: isIntroVisible ? 0 : 100 }}
          transition={{ duration: 1 }}
          className="about-intro"
        >

          <div className="about-intro-img">
            <img src="./img/me.png"></img>
          </div>
          <div className="about-intro-text">
            <div className="about-intro-name">
              <p>최지영</p>
              <p>CHOI JIYOUNG</p>
            </div>

            <p><FaCakeCandles size="20" style={{ marginRight: '15px' }} />1999.01.06</p>
            <p><FaSchool size="20" style={{ marginRight: '15px' }} /> 전주대학교 경영학과&스마트미디어학과</p>
            <p><FaCertificate size="20" style={{ marginRight: '15px' }}></FaCertificate>2023.06 정보처리기사 자격증 취득</p>
            <p><MdOutlineMail size="20" style={{ marginRight: '15px' }} />wlduddl4101@gmail.com</p>
            <p><FaPencilAlt size="20" style={{ marginRight: '15px' }} />https://blog.naver.com/jibbbang2</p>
            <p><FaGithub size="20" style={{ marginRight: '15px' }} /> https://github.com/jizero1</p>


            <div className="about-intro-skill">
              <div>
                <FaMousePointer className="about-mouse"></FaMousePointer>
              </div>
              <div className="about-intro-skill-img">
                <img src="./img/html.png" onMouseEnter={() => ImgEnter('img1')} onMouseLeave={ImgLeave}></img>
                <img src="./img/css.png" onMouseEnter={() => ImgEnter('img2')} onMouseLeave={ImgLeave}></img>
                <img src="./img/js.png" onMouseEnter={() => ImgEnter('img3')} onMouseLeave={ImgLeave}></img>
                <img src="./img/react.png" onMouseEnter={() => ImgEnter('img4')} onMouseLeave={ImgLeave}></img>
                <TbBrandReactNative size="50" color="#ADF3F4" onMouseEnter={() => ImgEnter('img5')} onMouseLeave={ImgLeave} />
                <img src="./img/nodejs.png" onMouseEnter={() => ImgEnter('img6')} onMouseLeave={ImgLeave}></img>
              </div>
              <div className="about-intro-skill-text" style={{ display: img === 'img1' ? 'block' : 'none' }}>
                <p>HTML5의 구조적 마크업을 활용해 웹 페이지를 구성 할 수 있습니다. 시맨틱 태그와 웹 접근성을 고려한 웹 페이지를 구현 할 수 있습니다.</p>
              </div>
              <div className="about-intro-skill-text" style={{ display: img === 'img2' ? 'block' : 'none' }}>
                <p>CSS3을 사용하여 레이아웃 구축, css 애니메이션 및 트랜지션을 적용한 동적인 스타일링을 구현 할 수 있습니다. 또한 반응형 디자인을 위해 미디어쿼리를 잘 활용 할 수 있습니다.</p>
              </div>
              <div className="about-intro-skill-text" style={{ display: img === 'img3' ? 'block' : 'none' }}>
                <p>다양한 JavaScript 기능을 활용하여 동적인 웹 어플리케이션을 개발 할 수 있습니다. 이벤트 핸들링, localStorage 등을 효율적으로 사용 할 수 있습니다.</p>
              </div>
              <div className="about-intro-skill-text" style={{ display: img === 'img4' ? 'block' : 'none' }}>
                <p>React를 활용하여 상태 관리 및 컴포넌트 기반의 UI를 개발 할 수 있습니다. Router, Hoods, Context API등을 사용하여 SPA(Single Page Application)를 구현 할 수 있습니다.</p>
              </div>
              <div className="about-intro-skill-text" style={{ display: img === 'img5' ? 'block' : 'none' }}>
                <p>React Natvie의 기본적인 UI 구성과 네이티브 모듈을 활영한 기능 구현이 가능하고, 상태관리 및 컴포넌트 기반의 구조를 이해하고 있습니다.</p>
              </div>
              <div className="about-intro-skill-text" style={{ display: img === 'img6' ? 'block' : 'none' }}>
                <p>Node.js를 사용하여 서버측 로직을 구현한 경험이 있으며, 기본적인 API를 개발 할 수 있습니다. 현재는 고급 개념이나 서버최적화, 데이터베이스 연동 등은 학습이 필요한 상태입니다.</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isTextVisible ? 1 : 0, y: isTextVisible ? 0 : 100 }}
          transition={{ duration: 1 }}
          className="about-text"
        >
          <div className="about-text-div">
            <p className="about-text-text">

              <strong>경영학</strong>을 전공하던 중 HTML 기초 강의를 수강 했던 적이 있었는데,
              이때 머릿속의 아이디어를 화면에 구현 할 수 있다는 점에
              매력을 느껴 <strong>프론트엔드 개발자</strong>라는 꿈을 가지게 되었습니다.
              이를 실현하기 위해 <strong>스마트미디어학과</strong>를 복수 전공하며 개발에 대한 이해를 쌓았습니다.
              <br></br>
              <br></br>
              꾸준히 <strong>성장</strong>하고 새로운 것에 <strong>도전</strong>하는 것을 좋아하여
              최근에는 React Native를 독학으로 배우고,
              Play Store에 앱을 등록하고 비공개 테스트 심사를 진행 중입니다.
              사용자 경험을 고려한 실용적이고 효율적인 개발을 통해 꾸준히 성장하는
              프론트엔드 개발자가 되겠습니다.
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  const projectData = [
    {
      number: 1,
      name: "실시간 날씨 🌤",
      developer: "최지영",
      date: "2024.12.29 ~ 2025.01.04",
      skill: "HTML / CSS / JavaScript / Node.js",
      description: "OpenWeather API를 이용하여 실시간으로 날씨정보를제공받아 사용자의 위치 기반으로 날씨정보를 표시합니다. 사용자의 이해를 돕기 위해 날씨 상태코드에 맞게 날씨 이모티콘을 적절하게 표시하고, 날씨 텍스트(ex.맑음)도 추가했습니다. node.js를 이용하여 실시간으로 날씨정보를 제공하는 서버를 구축 했고, vercel을 통해 배포를 완료 하였습니다.",
      image: "./img/project1.png",
      projectLink: "https://weather-project-peach-xi.vercel.app/",
      github: "https://github.com/jizero1/weather",
    },
    {
      number: 2,
      name: "달력 일기 📝",
      developer: "최지영",
      date: "2024.12.17 ~ 2025.12.26",
      skill: "HTML / CSS / JavaScript",
      description: "달력의 기본 기능인 현재 날짜 확인, 이전달/다음달 이동 뿐만 아니라 해당 날짜를 클릭하면 이미지와 메모를 작성 할 수 있습니다. 또한, 입력된 내용들은 localStorage에 저장되어 페이지를 새로고침 하더라도 계속해서 확인이 가능 합니다.",
      image: "./img/project2.png",
      projectLink: "https://jizero1.github.io/CalendarDiary/",
      github: "https://github.com/jizero1/CalendarDiary",
    },
    {
      number: 3,
      name: "하루 토마토🍅",
      developer: "최지영",
      date: "2025.01.09 ~ 진행중(비공개 테스트 통과 후, 출시예정)",
      skill: "React Native / JavaScript",
      description: "할일 추가 및 체크기능으로 할일을 간단하게 관리할 수 있고, 중요한 할일은 인덱스로 표시해주어 체계적으로 일정 관리가 가능합니다. 또한, 5가지의 색상과 표정의 기분 아이콘을 통해 하루의 기분을 표시할 수 있습니다.",
      image: "./img/project3.png",
      projectLink: "https://play.google.com/store/apps/details?id=com.jizerotodo",
      github: "https://github.com/jizero1/todo",
    },
    {
      number: 4,
      name: "포트폴리오",
      developer: "최지영",
      date: "2025.01.24 ~ 진행중",
      skill: "JavaScript / React / CSS / Framer Motion",
      description: "자기소개 및 개인 프로젝트 설명을 위해 제작한 포트폴리오 웹사이트입니다. React와 Framer Motion을 활용하여 동적인 애니메이션과 효과를 구현하였습니다. 페이지 스크롤 할때마다 부드럽게 등장하는 콘텐츠와 다크모드 및 라이드모드를 지원하는 기능을 통해 사용자경험을 극대화 하였습니다.",
      image: "./img/project4.png",
      projectLink: "https://jizero1.github.io/portfolio/",
      github: "https://github.com/jizero1/portfolio",
    }
  ]


  // ------------------ 프로젝트 소개 화면 ----------------
  const ProjectContainer = ({ project, darkLightClick }) => {

    const [isProjectVisible, setIsProjectVisible] = useState(false);
    const project1Ref = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) { // 뷰포트에 얼마나 보이는지 확인
            setIsProjectVisible(true); // 화면에 보이게함
          }
        },
        { threshold: 0.5 } // 요소가 50퍼 이상 보일때 애니메이션 시작
      );

      if (project1Ref.current) { // 화면에 보이거나 보이지 않을때
        observer.observe(project1Ref.current); // 요소관찰 시작
      }

      return () => {
        if (project1Ref.current) {
          observer.unobserve(project1Ref.current); // 요소관찰 중단
        }
      };
    }, []);

    return (
      <div className="project-container" style={darkLightClick ? { backgroundColor: "rgb(26, 28, 48)", color: "white" } : { backgroundColor: "white" }}>
        <p className="project-sideText" style={darkLightClick ? { color: "rgb(226, 240, 253)" } : {}}>PROJECT #{project.number}</p>
        <motion.div
          ref={project1Ref}
          initial={{ opacity: 0, y: 100 }}
          animate={isProjectVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="project"
        >

          <div className="project-imgBox">
            <p className="project-imgBox-number">#{project.number}</p>
            <a href={project.projectLink} target="_blank"><img src={project.image}></img></a>
          </div>
          <div className="project-textBox">
            <div className="project-text">
              <p className="project-text-common"><span># 프로젝트명</span>{project.name}</p>
              <p className="project-text-common"><span># 개발자</span>{project.developer}</p>
              <p className="project-text-common"><span># 개발기간</span>{project.date}</p>
              <p className="project-text-common"><span># 사용기술</span>{project.skill}</p>
              <div className="project-about-div" style={darkLightClick ? { color: "black" } : {}}>
                <p className="project-about">{project.description}</p>
              </div>
            </div>
            <div className="project-link">
              <a href={project.github} target="_blank"><FaGithub size="30" className="project-link-icon" style={darkLightClick ? { color: "white" } : {}}></FaGithub></a>
              <a href={project.projectLink} target="_blank"><MdComputer size="30" className="project-link-icon" style={darkLightClick ? { color: "white" } : {}}></MdComputer></a>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }


  // ------------------ Footer ----------------
  const Footer = () => {
    return (
      <div className="footer-container">
        <p>© 2025.02 CHOI JIYOUNG Portfolio</p>
      </div>
    )
  }

  const [darkLightClick, setDarkLightClick] = useState(false);
  const [darkLightIcon, setDarkLightIcon] = useState(<MdWbSunny></MdWbSunny>);
  const darkLightToggle = () => {
    setDarkLightClick(!darkLightClick);
    if (darkLightClick) { // 버튼클릭시 darkLightClick은 true가 되어 다크모드가 됨.
      setDarkLightIcon(<MdModeNight></MdModeNight>);
    } else {
      setDarkLightIcon(<MdWbSunny></MdWbSunny>);
    }

  }

  return (
    <div className="container">
      <div className="darkLight-container" onClick={darkLightToggle}>
        <div className="darkLight-btn" style={darkLightClick ? { backgroundColor: "white" } : {}}>
          <div className="darkLight-btn-Icon" style={darkLightClick ? { color: "rgb(33, 63, 92)" } : {}}>{darkLightIcon}</div>
        </div>
      </div>
      <MainContainer darkLightClick={darkLightClick}></MainContainer>
      <AboutContainer darkLightClick={darkLightClick}></AboutContainer>
      {projectData.map((project) => (
        <ProjectContainer darkLightClick={darkLightClick} key={project.number} project={project}></ProjectContainer>
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
