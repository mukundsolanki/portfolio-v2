import React, { useEffect } from 'react';
import SocialsPlatforms from './SocialsPlatforms'
import Footer from './Footer';

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-animation');
    elements.forEach((element) => {
      element.classList.add('fade-in');
    });
  }, []);

  return (
    <div >
      <div className="about-container">
        <section className="about-section">
        <div className={`fade-in-animation`}>
          <h1 className="about-heading">ABOUT ME</h1>
          <div className="about-content">
            <ul>
              <li>
                <span className="bullet">🧑‍💻</span> I am Mukund Solanki, a passionate web and Android developer currently in my third year of BTech at AITR indore.
              </li>
              <li>
                <span className="bullet">❤️</span> I love writing code and exploring the world of open source.
              </li>
              <li>
                <span className="bullet">🔥</span> With a strong foundation in web development, I enjoy creating intuitive and user-friendly interfaces.
              </li>
              <li>
                <span className="bullet">🌟</span> I do competetive programming and have 3⭐ on codechef.
              </li>
              <li>
                <span className="bullet">🚀</span> My curiosity drives me to continuously learn and adopt new technologies to enhance my skills as a software developer.
              </li>
              <li>
                <span className="bullet">⚡</span> I am available for full-time opportunities and I am excited to contribute to innovative projects that make a positive impact on people's lives through technology.
              </li>
            </ul>
          </div>
          <SocialsPlatforms />
          </div>
        </section>

        <Footer/>
      </div>

    </div>
  );
};

export default About;
