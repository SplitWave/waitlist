import React from 'react';
import styles from './navbar.module.css'
import Image from 'next/image'
import Logo from '../images/logo.png'
import { text } from 'stream/consumers';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
        src={Logo}
        alt='logo'
        />
        <div className={styles.text}>SplitWave</div>
      </div>
      
      <div>
       <div> Home</div>
      <div>Join Waitlist</div>
    
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
