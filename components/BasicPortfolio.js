import React from 'react';
import styles from '../styles/Portfolio.module.css';

const Portfolio = ({ name, details, img, links, tools }) => {
  return (
    <div className={styles.portfolio}>
      <div style={{ marginTop: '0px' }} className={styles.details}>
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
        name="Spotify Frontend"
        details="This is spotify frontend application. This application using react , redux and spotify web API."
        links={{
          githubLink: 'https://github.com/syket-git/spotify-clone',
          websiteLink: 'https://spotify-clone90.web.app/',
        }}
        tools={['react', 'redux']}
      />
      <Portfolio
        name="Instagram Media"
        details="This is Instagram media. Here people can share their stories and other people can like, comments on the post."
        links={{
          githubLink: 'https://github.com/syket-git/instagram-clone',
          websiteLink: 'https://instagram-clone90.web.app/',
        }}
        tools={['react', 'redux', 'firebase']}
      />
      <Portfolio
        name="Hot Onion Restaurant"
        details="This is online food ordering website. Here can order food in online and pay the bill using stripe."
        links={{
          githubLink: 'https://github.com/syket-git/hot-onion',
          websiteLink: 'https://hot-onion-restaurants.web.app/',
        }}
        tools={['react', 'redux', 'express', 'stripe']}
      />
    </div>
  );
};

export default PortfolioFeatured;
