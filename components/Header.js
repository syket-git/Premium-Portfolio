import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
const Header = () => {
  const [expand, setExpand] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#about">Skill</a>
          </li>
          <li>
            <a href="/#about">Portfolio</a>
          </li>
          <li>
            <a href="/#about">Contact</a>
          </li>
          <li>
            <a href="/#about">Blog</a>
          </li>
          <li>
            <a className={styles.resume} href="/#about">
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.responsiveMenu}>
        <div onClick={() => setExpand(!expand)} className={styles.menu}>
          <img src="/menu.svg" alt="" />
        </div>
        {expand && (
          <div className={styles.responsiveMenu__popup}>
            <nav>
              <ul>
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#about">Skill</a>
                </li>
                <li>
                  <a href="/#about">Portfolio</a>
                </li>
                <li>
                  <a href="/#about">Contact</a>
                </li>
                <li>
                  <a href="/#about">Blog</a>
                </li>
                <li className={styles.resumeWrapper}>
                  <a className={styles.resume} href="/#about">
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
