import React, { useEffect } from 'react';
// import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
// import { ReactComponent as GitHubIcon } from '../images/github.svg';
// import { ReactComponent as CodechefIcon } from '../images/codechef.svg';
// import { ReactComponent as MailIcon } from '../images/mail.svg';
import profilePicture from '../images/mukund.jpg';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-animation');
    elements.forEach((element) => {
      element.classList.add('fade-in');
    });
  }, []);

  return (
    <>
    <div className="home-container">
      <div className={`home-text fade-in-animation`}>
        <h1 id='head1'>Hey there!👋</h1>
        <h1 id='head2'>I am <span className='name'>Mukund Solanki</span></h1>
        <h2 id='head3'>A software developer from India</h2>
        <p id='tagline'>"Transforming Ideas into Functional Reality"</p>

        <a rel="noopener" href="#" className='resume-button'>
          <button>Download Resume</button>
        </a>

      </div>
      <div className={`profile-picture-container fade-in-animation`}>
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-picture"
        />
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Home;
