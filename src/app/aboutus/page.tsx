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
      <div className={styles.containera}>
        <p className={styles.aboutblack}>
                Welcome to EatWell, where health meets simplicity. With self dedicated project, EatWell is on a mission to redefine your journey towards a healthier 
                and happier lifestyle. Our innovative platform is crafted to transform your 
                approach to nutrition, making it not only accessible and enjoyable but also 
                sustainable. Whether you are a busy professional, a multitasking parent, a 
                fitness enthusiast, or someone on a wellness journey, EatWell is your go-to 
                solution. Our user-centric mobile application and web portal empower you to 
                effortlessly cultivate healthy eating habits, efficiently manage mealtime, 
                and engage with a supportive community committed to overall well-being. Bid 
                farewell to the complexities of meal planning and nutrition tracking—EatWell 
                is your dedicated partner, nourishing lives with every bite.
          </p>
      </div>
      
      <div className={styles.imgus}>
        <Image src="/us.png" alt="Description of your image" width={800} height={800} />
      </div>
    </div>
  );
}