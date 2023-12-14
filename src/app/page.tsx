import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "./components/TodoItem";
import styles from './main.module.css';
import Image from 'next/image'; // Import the next/image component


function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();

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

    <div className={`${styles.container} ${styles.textureBackground}`}>
      

      <header className={styles.header}>
        <div className={styles.content}>
=
          <h1 className={`${styles.logoname} ${styles.noselect}`}>Eatwell</h1>
          <h1 className={`${styles.textlarge} ${styles.noselect}`}>SANDWICH</h1>
          
          
        </div>
        <div className={styles.imageContainer}>
        
          <Image src="/Sandwich.png" alt="Description of your image" width={400} height={400} />
        </div>
      </header>
      <p className={styles.about}>
          EatWell is revolutionizing eating habits by offering a platform that guides individuals toward 
          sustainable, healthy choices. Our solution simplifies meal management and fosters a supportive 
          community, freeing you from nutrition pitfalls and time constraints for a healthier lifestyle.
        </p>

        <Link className={styles.linkstyle} href="/aboutus">
            About Us
          </Link>
      {/* <ul className={styles.margisn}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul> */}
      </div>
    </div>
  );
}
