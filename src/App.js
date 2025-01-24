import './App.css';
import { useState } from 'react';
import React from 'react';


function App() {

  const [click, setClick] = useState([false, false, false]);
  const navClick = (index) => {
    const updateState = [false, false, false];
    updateState[index] = true;
    setClick(updateState);
  };

  const MainContainer = () => {
    const [clickImg, setClickImg] = useState(false);
    const imgChange = () => {
      setClickImg(!clickImg);
    }
    return (
      <div className="main-container">
        {/* 화면 왼쪽에 메뉴 네비게이션 / 중앙에 이름 및 간단소개 / 중앙에 메인화면 */}
        <div className="main-introduce">
          <p className="main-introduce-1">Front-end developer</p>
          <p className="main-introduce-2">최지영의 포트폴리오</p>
          <div className="main-img" onMouseOver={imgChange} onMouseLeave={imgChange}>
            {clickImg ? <p>👩</p> : <p>👋</p>}
          </div>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-ul">
            {/* 기술스택,프로젝트경험,개발시작이유,취미또는 관심사 */}
            <li onClick={() => navClick(0)}>
              <p>About Me</p>
            </li>
            {/* 프로젝트명, 사용기술, 주요기능, 기여부분, 링크, 스크린샷 등 */}
            <li onClick={() => navClick(1)}>Project</li>
            {/* 이메일주소, 연락폼, 소셜미디어링크(깃허브,블로그) */}
            <li onClick={() => navClick(2)}>Contact</li>
          </ul>
        </nav>
      </div>
    );
  };



  const AboutContainer = () => {
    return (
      <div>
        <div>about me</div>
      </div>
    )
  }

  const ProjectContainer = () => {
    return (
      <div>
        <div>project</div>
      </div>
    )
  }

  const ContactContainer = () => {
    return (
      <div>
        <div>contact</div>
      </div>
    )
  }

  // 조건부 렌더링
  const renderContent = () => {
    if (click[0]) return <AboutContainer></AboutContainer>;
    if (click[1]) return <ProjectContainer></ProjectContainer>;
    if (click[2]) return <ContactContainer></ContactContainer>;
  }
  return (
    <div className="container">
      <MainContainer></MainContainer>
      {renderContent()}
    </div>
  );
}

export default App;
