import { useState } from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';

import textContent from '../../assets/text.json';
import styles from './Hero.module.css';

const Hero = () => {
  const [isPopupOpen, togglePopupState] = useState(false);

  const togglePopup = () => {
    togglePopupState(!isPopupOpen);
  };

  return (
    <div className="page-box">
      <Header />
      <div className={styles.heroContent}>
        <div className={styles.messageBox}>
          <h1> {textContent.hero.title} </h1>
          <p> {textContent.hero.paragraph} </p>
        </div>
        <div className={styles.buttonGroup}>
          <button className="btn btn-secondary" onClick={togglePopup}>{textContent.hero.tryButton}</button>
          {isPopupOpen ? <LoginForm togglePopup={togglePopup} /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
