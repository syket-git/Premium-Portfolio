import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.about__details}>
        <p>
          Hi! I'm Syket Bhattachergee, a dedicated Web Developer. I develop web
          applications. My core skill is based on JavaScript and I love to do
          most of the things using JavaScript. I have graduated with a diploma
          degree in Computer Science Technology from Chittagong Polytechnic
          Institute at Chittagong. I am available for any kind of job
          opportunity that suits my interests.
        </p>
        <div className={styles.about__cta}>
          <button className={styles.resume}>Get Resume</button>
          <button className={styles.skills}>My Skills</button>
        </div>
      </div>
      <div className={styles.about__img}>
        <img src="/syket.jpg" alt="Syket Bhattachergee" />
      </div>
    </div>
  );
};

export default About;
