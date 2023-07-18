import React, { useEffect } from 'react';
import Project1 from '../images/project1.png';
import Project2 from '../images/project2.png';
import Project3 from '../images/project3.png';
import Project4 from '../images/project4.jpg';
import Project5 from '../images/project5.jpg';
import Project6 from '../images/project6.png';
import Footer from './Footer';

const Projects = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-animation');
    elements.forEach((element) => {
      element.classList.add('fade-in');
    });
  }, []);

  return (
    <>

      <section className="projects-section">
        <div className={`fade-in-animation`}>
          <h1 className="about-heading">PROJECTS</h1>
          <div className="project-list">

            <a className="text-link" target="_blank" href="https://devlit.vercel.app/">
              <div className="project-card">
                <img className="project-image" src={Project1} alt='devlit' />
                <div className="project-details">
                  <h3 className="project-title">DEVLIT</h3>
                  <p className="project-description">A web-based Code Editor built with React. It allows users to write and run HTML, CSS, and JavaScript code in real-time. </p>
                </div>
              </div>
            </a>

            <a className="text-link" target="_blank" href="https://github.com/mukundsolanki/CertiCraft">
              <div className="project-card">
                <img className="project-image" src={Project2} alt='certicraft' />
                <div className="project-details">
                  <h3 className="project-title">CERTICRAFT</h3>
                  <p className="project-description">CertiCraft is an innovative certificate generator that was developed during a hackathon at our college. </p>
                </div>
              </div>
            </a>

            <a className="text-link" target="_blank" href="https://flip-the-cards-deployment.vercel.app/">
              <div className="project-card">
                <img className="project-image" src={Project3} alt='flip-yhe-cards' />
                <div className="project-details">
                  <h3 className="project-title">FLIP THE CARDS</h3>
                  <p className="project-description">Flip the Cards is a Progressive Web App (PWA) built using React, It's a memory matching game where the user flips over cards and tries to find matching pairs. </p>
                </div>
              </div>
            </a>
          </div>

          <div className="project-list">

            <a className="text-link" target="_blank" href="https://github.com/mukundsolanki/Quizit-the-quiz-app">
              <div className="project-card">
                <img className="project-image" src={Project4} alt='quizit' />
                <div className="project-details">
                  <h3 className="project-title">QUIZIT</h3>
                  <p className="project-description">Quizit👀 is a Flutter-based mobile application that allows users to complete quizzes and receive a certificate upon completing all the quizzes.</p>
                </div>
              </div>
            </a>
            <a className="text-link" target="_blank" href="https://github.com/mukundsolanki/SyncPad">
              <div className="project-card">
                <img className="project-image" src={Project5} alt='syncpad' />
                <div className="project-details">
                  <h3 className="project-title">SYNCPAD</h3>
                  <p className="project-description">Flutter application that allows you to control your computer mouse movements remotely using your mobile device as a touchpad.</p>
                </div>
              </div>
            </a>

            <a className="text-link" target="_blank" href="https://mukund4s.live">
              <div className="project-card">
                <img className="project-image" src={Project6} alt='portfolio' />
                <div className="project-details">
                  <h3 className="project-title">TERMINAL PORTFOLIO</h3>
                  <p className="project-description">Ubuntu style terminal theme based portfolio website built with ReactJS.</p>
                </div>
              </div>
            </a>
          </div>

          <div >
            <p id="more-text">You can find more projects at <a className="text-link" target="_blank" id='more-text-link' href="https://github.com/mukundsolanki">Github</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
