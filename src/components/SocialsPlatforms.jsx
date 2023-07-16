import React from 'react';
import { ReactComponent as LinkedInIcon } from '../images/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../images/github.svg';
import { ReactComponent as CodechefIcon } from '../images/codechef.svg';
import { ReactComponent as MailIcon } from '../images/mail.svg';

const SocialPlatforms = () => {
  const email = 'mukundsolanki665@gmail.com';
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="social-platforms">
      <h1 className='about-heading'>🔗LET'S CONNECT</h1>
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
  );
};

export default SocialPlatforms;
