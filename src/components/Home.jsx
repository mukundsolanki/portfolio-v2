import React from 'react';
import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../images/github.svg';
import { ReactComponent as CodechefIcon } from '../images/codechef.svg';
import { ReactComponent as MailIcon } from '../images/mail.svg';
import profilePicture from '../images/mukund.jpg';

const Home = () => {
  const email = 'mukundsolanki665@gmail.com';
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 id='head1'>Hey there!👋</h1>
        <h1 id='head2'>I am Mukund Solanki</h1>
        <h2 id='head3'>A software developer from India</h2>
        <p id='tagline'>"Transforming Ideas into Functional Reality"</p>

        <div className="platform-icons">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="icon" />
          </a>
          <a href="https://www.codechef.com/" target="_blank" rel="noopener noreferrer">
            <CodechefIcon className="icon" />
          </a>
          <a onClick={handleEmailClick} href="" target="_blank" rel="noopener noreferrer">
            <MailIcon className="icon" />
          </a>
        </div>
      </div>
      <div className="profile-picture-container">
        <img
          src={profilePicture}
          alt="Profile"
          className="profile-picture"
        />
      </div>

    </div>
  );
};

export default Home;
