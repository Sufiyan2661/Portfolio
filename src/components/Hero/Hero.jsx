import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg"
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg"
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark
  const GithubIcon = theme === 'light' ? githubLight : githubDark
  const LinkedInIcon = theme === 'light' ? linkedInLight : linkedInDark

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Mohd sufiyan"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mohd <br /> Sufiyan
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="twitter icon" />
          </a>
          <a href="https://Github.com/" target="_blank">
            <img src={GithubIcon} alt="Github icon" />
          </a>
          <a href="https://LinkedIn.com/" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quisquam
          obcaecati saepe!
        </p>
        <a href={CV} download>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
