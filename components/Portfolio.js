import React from 'react';
import styles from '../styles/Portfolio.module.css';
import PortfolioFeatured from './PortfolioFeatured';

const Portfolio = () => {
  return (
    <div className={styles.portfolio_wrapper}>
      <PortfolioFeatured />
    </div>
  );
};

export default Portfolio;
