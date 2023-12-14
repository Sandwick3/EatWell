import styles from '../main.module.css';
import Link from 'next/link';

export default function Contact() {

  return (
    <div>
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
      <h2 className={`${styles.ask} ${styles.noselect}`}>
        What can we help you with?
      </h2>

      <div className={styles.textBoxContainer}>
        <input
          type="text"
          className={styles.textBox}
          placeholder="Type your question here..."
        />
      </div>

      <div className={styles.containerbx}>
        <button className={`${styles.box} ${styles.leftBox}`}>
            
            <Link href="/commonbugs">Common Bugs</Link>
        </button>
        <button
          className={`${styles.box} ${styles.rightBox}`} >
          Submit Request
          
        </button>
      </div>
    </div>
  );
  }

