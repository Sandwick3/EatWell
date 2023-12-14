import styles from '../main.module.css';
import Link from "next/link";
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Page() {

  const user1 = {
    name: 'Ninong Ry Ryan',
    profilePic: '/ninongry.jpg',
  };
  const user2 = {
    name: 'Gordon Ramsay',
    profilePic: '/gordonrasay.jpg',
  };


  const Profile: React.FC<ProfileProps> = ({ name, profilePic }) => (
    <div className={styles.profile}>
        <div className={styles.profilePic}>
          <Image src={profilePic} alt="Profile Pic" width={100} height={100} className={styles.circularImage} />
        </div>
        <p className={styles.profileName}>{name}</p>
      </div>
    );

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

      <div className={styles.content2}>
        <Profile name={user1.name} profilePic={user1.profilePic} />
      </div>

      <div className={styles.container2}>
        <div className={styles.box2}>
          Napaka Sarap #foodIsLayff
        </div>
        <div className={styles.box3}>
        </div>
      </div>
      
      <div className={styles.content2}>
        <Profile name={user2.name} profilePic={user2.profilePic} />
      </div>

      <div className={styles.container2}>
        <div className={styles.box2}>
         Panghatag sad diha chef
        </div>
      </div>
    </div>
  )};