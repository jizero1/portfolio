import './App.css';
import { useState } from 'react';
import React from 'react';


function App() {

  const [toggle, setToggle] = useState(false);

  console.log(toggle);
  const [click, setClick] = useState([true, false, false, false]);
  const navClick = (index) => {
    const updateState = [false, false, false, false];
    updateState[index] = true;
    setClick(updateState);
  };

  const Toggle = () => {
    // const [click, setClick] = useState(false);
    const toggleClick = () => {
      setToggle(!toggle);
      console.log("dddd"+!toggle);
    }
    return (
      <div className="toggle-container">
        <button className="toggle-btn" onClick={toggleClick}>d</button>
      </div>
    )
  }
  const NavContainer = () => {
    return (
      <div className="nav-container" style={toggle ? {borderColor: 'black'} : {borderColor: 'white'}}>
        <nav className="nav">
          <ul className="nav-ul">
            <li onClick={() => navClick(0)} >
              <p>Home</p>
            </li>
            <li onClick={() => navClick(1)}>
              <p>About Me</p>
            </li>
            {/* 프로젝트명, 사용기술, 주요기능, 기여부분, 링크, 스크린샷 등 */}
            <li onClick={() => navClick(2)}>
              <p>Project</p>
            </li>
            {/* 이메일주소, 연락폼, 소셜미디어링크(깃허브,블로그) */}
            <li onClick={() => navClick(3)}>
              <p>Contact</p>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

  const MainContainer = () => {
    // const [clickImg, setClickImg] = useState(false);
    // const imgChange = () => {
    //   setClickImg(!clickImg);
    // }
    return (
      <div className="main-container">
        {/* 화면 왼쪽에 메뉴 네비게이션 / 중앙에 이름 및 간단소개 / 중앙에 메인화면 */}
        <div className="main-introduce">
          <p className="main-introduce-1">Front-end developer</p>
          <p className="main-introduce-2">최지영의 포트폴리오</p>
          <div className="main-introduce-3">
            <div className="main-circle">

            </div>

            <div className="main-img">
              <div className="main-imgBox">
                {/* <img></img> 제자리에서 움직이다가 인사하는 이미지 */}
                {/* 제자리에서 움직이는 이미지를 animation으로 앞으로 움직이게하기 */}
                {/* C:\Users\gy411\바탕 화면\portfolio\project1\img\img1.gif */}
                <img src="/img/img1.gif" alt="이미지"></img>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };


  {/* 자기소개, 기술스택,프로젝트경험,개발시작이유,취미또는 관심사 */ }
  const AboutContainer = () => {
    return (
      <div className="shared-container about-container">
        <p className="sideText-in">ABOUT ME</p>
        <div className="shared about">

          <div className="about-top">
            <div className="about-img">이모지</div>
            <div className="about-text">
            <p>최지영 / 1999.01.06 </p>
            <p>전주대학교 (전공: 경영학과, 복수전공: 스마트미디어학과)</p>
            <p>
            경영학과를 전공하면서 HTML을 간단히 배우게 되었고, 
            이때 웹 개발에 대한 흥미를 느껴 복수전공으로
            스마트미디어학과를 선택하게 되었습니다. 
            머릿속의 아이디어를 직접 구현해 나가는 과정에 매력을 느껴, 
            프론트엔드 개발자로서의 길을 꿈꾸게 되었습니다. 
            끊임없이 생각하고 문제를 해결하며 도전을 두려워하지 않는
            프론트엔드 개발자가 되겠습니다.
            </p>
          </div>
          </div>
          


          <p>기술스택 나열~</p>
          <p>취미 ~~ 이미지 </p>
        </div>
      </div>
    )
  }

  const ProjectContainer = () => {
    return (
      <div className="shared-container project-cotainer">
        <p className="sideText-in">PROJECT</p>
        <div className="shared">project</div>
      </div>
    )
  }

  const ContactContainer = () => {
    return (
      <div className="shared-container project-container">
        <p className="sideText-in">CONTACT</p>
        <div className="shared">contact</div>
      </div>
    )
  }

  // 조건부 렌더링
  const renderContent = () => {
    if (click[0]) return <MainContainer></MainContainer>
    if (click[1]) return <AboutContainer></AboutContainer>;
    if (click[2]) return <ProjectContainer></ProjectContainer>;
    if (click[3]) return <ContactContainer></ContactContainer>;
  }
  return (
    <div className="container" style={toggle ? {backgroundColor: 'white', color: 'black'} :  {backgroundColor: 'black', color: 'white'}}>
      <Toggle></Toggle>
      <NavContainer></NavContainer>

      {renderContent()}
    </div>
  );
}

export default App;
