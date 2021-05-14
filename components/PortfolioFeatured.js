import React from 'react';
import styles from '../styles/Portfolio.module.css';

const Portfolio = ({ name, details, img, links, tools }) => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__img}>
        <img src={img} alt="Amazon" />
      </div>
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>{details}</p>
        <div className={styles.links}>
          <ul>
            <li>
              <a href={links.githubLink} target="_blank">
                <img src="/github.svg" alt="Github" />
              </a>
            </li>
            <li>
              <a href={links?.websiteLink} target="_blank">
                <img src="/link.svg" alt="Github" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.tools}>
          <ul>
            {tools?.length > 0 &&
              tools?.map((tool, i) => <li key={i}>{tool}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PortfolioFeatured = () => {
  return (
    <div className={`${styles.portfolioItems} ${styles.portfolioFeatured}`}>
      <Portfolio
        name="Covid Tracker"
        details="This is covid 19 tracker. Every day we can get updated results in this application. Also, we can see the country-wise data."
        img="/covid-tracker.png"
        links={{
          githubLink: 'https://github.com/syket-git/covid-19-tracker',
          websiteLink: 'https://covid19-tracker90.web.app/',
        }}
        tools={['react', 'redux', 'firebase', 'chat.js']}
      />
      <Portfolio
        name="Amazon E-commerce"
        details="This is an E-commerce Site. Here people can buy their clothes and pay their payment using stripe."
        img="/amazon.jpg"
        links={{
          githubLink: 'https://github.com/syket-git/amazon',
          websiteLink: 'https://syket6490.web.app/',
        }}
        tools={['react', 'redux', 'firebase', 'stripe']}
      />
      <Portfolio
        name="Twitter Media"
        details="This is Twitter media. Here people can share their stories and other people can like, comments on the post."
        img="/twitter.png"
        links={{
          githubLink: 'https://github.com/syket-git/twitter-clone',
          websiteLink: 'https://twitter-clone90.web.app/',
        }}
        tools={['react', 'redux', 'firebase']}
      />
    </div>
  );
};

export default PortfolioFeatured;
