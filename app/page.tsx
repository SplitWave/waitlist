import Image from 'next/image'
import styles from './page.module.css'
import React from 'react';
import NavBar from './components/navBar'
import BackDrop from './images/mobile.png'
import WaitlistForum from './components/waitlistForum'

export default function Home() {
  return (
    
 <main className={styles.main}>
    <NavBar/>
    <div className={styles.overlap}></div>
  <h1 className={styles.h1}> SplitWave </h1>
  <p className={styles.para}> SplitWave streamlines expense sharing by effortlessly dividing bills among friends, offering a hassle-free solution for managing group finances. Simplify your financial interactions with this user-friendly app.</p>
  <button className={styles.button}
  onClick={WaitlistForum}
  > Join Waitlist </button>
  {/* <Image
    src={BackDrop}
    alt="backdrop"
  /> */}
  
  </main>
  )
}
