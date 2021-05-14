import React, { useState } from 'react';
import styles from '../styles/Skills.module.css';

const Card = ({ name, percent }) => (
  <div className={styles.card}>
    <h4>{name}</h4>
    <p>{percent}%</p>
    <div style={{ width: `${percent}%` }} className={styles.progressBar}></div>
  </div>
);

const Skills = () => {
  const [active, setActive] = useState(0);

  return (
    <div id="skill" className={styles.skills}>
      <ul className={styles.skills__nav}>
        <li
          onClick={() => setActive(0)}
          className={active === 0 ? styles.active : 'skill.notActive'}
        >
          Web
        </li>

        <li
          onClick={() => setActive(1)}
          className={active === 1 ? styles.active : 'skill.notActive'}
        >
          Tools
        </li>
      </ul>
      {active === 0 && (
        <div className={styles.skill}>
          <Card name="React" percent={80} />
          <Card name="Next JS" percent={70} />
          <Card name="Node JS" percent={60} />
          <Card name="Express" percent={70} />
          <Card name="MongoDB" percent={70} />
          <Card name="Typescript" percent={60} />
          <Card name="Socket" percent={50} />
          <Card name="Redux" percent={80} />
          <Card name="Firebase" percent={70} />
        </div>
      )}

      {active === 1 && (
        <div className={styles.skill}>
          <Card name="Git" percent={80} />
          <Card name="Photoshop" percent={80} />
          <Card name="Illustrator" percent={70} />
          <Card name="Draw.io" percent={70} />
          <Card name="Postman" percent={85} />
        </div>
      )}
    </div>
  );
};

export default Skills;
