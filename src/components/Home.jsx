import React from 'react';
import profilePicture from '../images/mukund.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 id='head1'>Hey there!👋</h1>
        <h1 id='head2'>I am Mukund Solanki</h1>
        <h2 id='head3'>A software developer from India</h2>
        <p id='tagline'>"Transforming Ideas into Functional Reality"</p>
      </div>
      <div className="profile-picture-container">
        <img
          src={profilePicture}
          alt="Profile Picture"
          className="profile-picture"
        />
      </div>
    </div>
  );
};

export default Home;
