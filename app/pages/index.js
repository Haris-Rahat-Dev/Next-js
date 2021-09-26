import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from "next/head";

export default function Home() {
  return (
      <>
          <Head>
              <title>Ninja List | Home</title>
              <meta name={"keywords"} content={"ninjas"} />
          </Head>
          <div>
              <h1 className={styles.title}>Home</h1>
              <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius esse hic ipsa iste libero minus nisi nulla quas voluptatibus.</p>
              <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eius esse hic ipsa iste libero minus nisi nulla quas voluptatibus.</p>
              <Link href={"/ninjas"}><a className={styles.btn}>See Ninja Listing</a></Link>
          </div>
      </>
  )
}
