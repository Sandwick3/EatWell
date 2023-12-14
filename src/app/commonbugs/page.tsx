import styles from '../main.module.css';
import Link from "next/link";
import Image from 'next/image';

export default function Page() {
  return (
    <div >
      <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/communityFeed">Community</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/aboutus">About us</Link>
            </li>
          </ul>
      </nav>
      <h1 className={`${styles.logonamecont} ${styles.noselect}`}>Eatwell</h1>
      
      <div className={styles.flexContainer}>
        <div className={`${styles.box1} ${styles.leftBox}`}>User Interface Bugs
        </div>
        <div className={`${styles.box1} ${styles.rightBox}`}>Data Synchronization Bugs</div>
        <div className={`${styles.box1} ${styles.leftBox}`}>Crashes and Freezes</div>
        <div className={`${styles.box1} ${styles.rightBox}`}>Authentication Bugs</div>
      </div>
    </div>
  );
}